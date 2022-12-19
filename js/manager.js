const kindOfInput = document.getElementById("kindOfInput");
const kindOfSelect = document.getElementById("kindOfSelect");
const subjectSelect = document.getElementById("subjectSelect");
const subjectList = document.getElementById("subjectList");
// kindOffRefresh();
function kindOffAdd() {
  const selectKindOfDiv = document.querySelector(".kindOfDiv");
  const createSpanMessage = document.createElement("span");
  createSpanMessage.classList.add("kindOfMessage");
  $.ajax({
    url: "php/add.php",
    type: "post",
    data: { kindof: "add", data: kindOfInput.value },
    success: function (response) {
      if (response === "New record created successfully") {
        createSpanMessage.classList.add("greenText");
        createSpanMessage.innerText = "Επιτυχής Εγγραφή";
        kindOffRefresh();
      } else {
        createSpanMessage.classList.add("pinkText");
        createSpanMessage.innerText =
          "Κάτι πήγε στραβά δοκιμάστε ξανά αργότερα";
      }
      selectKindOfDiv.append(createSpanMessage);
      setInterval(() => {
        createSpanMessage.remove();
      }, 1000);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
  kindOfInput.value = "";
}



function kindOfDelete() {
  const selectKindOfDiv = document.querySelector(".kindOfDiv");
  const createSpanMessage = document.createElement("span");
  createSpanMessage.classList.add("kindOfMessage");
  $.ajax({
    url: "php/delete.php",
    type: "post",
    data: { kindof: "refresh", id: kindOfSelect.value },
    success: function (response) {
      if (response === "Record deleted successfully") {
        createSpanMessage.classList.add("pinkText");
        createSpanMessage.classList.add("pinkText");
        createSpanMessage.innerText = "Η εγγραφή διαγράφηκε";
        selectKindOfDiv.append(createSpanMessage);
        setInterval(() => {
          createSpanMessage.remove();
        }, 1000);
        kindOffRefresh();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
}
const kindOfDiv = document.querySelectorAll(".doubleDiv")[0];
const createSubjectDiv = document.querySelectorAll(".doubleDiv")[1];
const editSubjectDiv = document.querySelectorAll(".doubleDiv")[2];

let kindOfData;
let subjectData;
updateDataUi();

function updateDataUi() {
  kindOfData = selectDbData("select_kindof");
  subjectData = selectDbData("select_subject");
  updateSelectKindOf(kindOfData);
  updateSelectSubjects(subjectData);
}

function updateSelectKindOf(items) {
  const selectKindOfSelect = kindOfDiv.querySelector("select");
  selectKindOfSelect.innerHTML = `<option selected>Επιλέξτε είδος για διαγραφή</option>`;
  for (let i = 0; i < items.length; i++) {
    selectKindOfSelect.innerHTML += `<option value=${items[i][0]}>${items[i][1]}</option>`;
  }
}

function updateSelectSubjects(items) {
  const selectAddSubjectSelect = createSubjectDiv.querySelector("select");
  const selectEditSubjectSelect = editSubjectDiv.querySelector("select");
  selectAddSubjectSelect.innerHTML =
    "<option selected>Επιλέξτε Θέμα για διαγραφή</option>";
  selectEditSubjectSelect.innerHTML =
    "<option selected>Επιλέξτε Θέμα για επεξεργασία</option>";
  for (let i = 0; i < items.length; i++) {
    const id = items[i][0];
    const name = items[i][1];
    selectAddSubjectSelect.innerHTML += `<option value=${id}>${name}</option>`;
    selectEditSubjectSelect.innerHTML += `<option value=${id}>${name}</option>`;
  }
}

function loadSubjectList(value) {
  let id;
  if (value === "Επιλέξτε Θέμα για επεξεργασία") {
    itemsList.innerHTML = "";
    return;
  }
  for (let i = 0; i < subjectData.length; i++) {
    if (value === subjectData[i][0]) {
      id = i;
    }
  }
  const list = JSON.parse(subjectData[id][2]);
  itemsList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    itemsList.innerHTML += `<li><span contenteditable>${list[i]}</span></li>`;
  }
}

function selectDbData(call) {
  let data;
  $.ajax({
    async: false,
    url: "php/selectdb.php",
    type: "post",
    data: { kindof: call },
    success: function (response) {
      data = JSON.parse(response);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
  return data;
}

function addToDatabaseKindOf() {
  const selectInput = kindOfDiv.querySelector("input");
  const select = kindOfDiv.querySelector("select");
  const data = { action: "addKindOf", data: selectInput.value };
  if (sendToDb(data) === "New record created successfully") {
    message("Η νέα εγγραφή αποθηκεύτηκε επιτυχώς", kindOfDiv, "greenText");
    selectInput.value = "";
    kindOfData = selectDbData("select_kindof");
    const id = kindOfData[kindOfData.length - 1][0];
    const value = kindOfData[kindOfData.length - 1][1];
    select.innerHTML += `<option value=${id}>${value}</option>`;
  }
}
function addToDatabaseSubject() {
  const selectInput = createSubjectDiv.querySelector("input");
  const select = createSubjectDiv.querySelector("select");
  const data = { action: "addSubject", data: selectInput.value };
  if (sendToDb(data) === "New record created successfully") {
    message(
      "Η νέα εγγραφή αποθηκεύτηκε επιτυχώς",
      createSubjectDiv,
      "greenText"
    );
    selectInput.value = "";
    subjectData = selectDbData("select_subject");
    updateSelectSubjects(subjectData);
  }
  updateSelectSubjects(subjectData);
}
function deleteSelectedFromDb(el) {
  if (el === "deleteKind" || el === "deleteSubject") {
    let select;
    const data = { action: "", id: "" };
    if (el === "deleteKind") {
      select = kindOfSelect;
      data.action = "kind";
    }
    if (el === "deleteSubject") {
      select = subjectSelect;
      data.action = "subject";
    }
    data.id = select.value;
    if (deleteFromDb(data) === "Record deleted successfully") {
      deleteRefresh(el, select);
    }
  }
}
function deleteRefresh(el, select) {
  if (el === "deleteKind") {
    message("Επιτυχής διαγραφή", kindOfDiv, "greenText");
    kindOfData = selectDbData("select_kindof");
  }
  if (el === "deleteSubject") {
    message("Επιτυχής διαγραφή", createSubjectDiv, "greenText");
    subjectData = selectDbData("select_subject");
  }
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value === select.value) {
      if (el === "deleteSubject") {
        editSubjectSelect.options[i].value === select.value;
        editSubjectSelect.options[i].remove();
      }
      select.options[i].remove();
      return;
    }
  }
}
function deleteFromDb(data) {
  let res;
  $.ajax({
    async: false,
    url: "php/delete.php",
    type: "post",
    data: data,
    success: function (response) {
      res = response;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
  return res;
}
function sendToDb(sendData) {
  let res;
  $.ajax({
    async: false,
    url: "php/add.php",
    type: "post",
    data: sendData,
    success: function (response) {
      res = response;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
  return res;
}

function message(msg, el, styleClassName = "") {
  const span = document.createElement("span");
  span.innerText = msg;
  if (styleClassName != "" && span.classList.add(styleClassName));
  setTimeout(() => {
    span.remove();
  }, 1000);
  el.append(span);
}

function addItemTolist() {
  if (editSubjectSelect.value === "Επιλέξτε Θέμα για επεξεργασία") {
    message("Επιλέξτε θέμα πρώτα", editSubjectDiv, "pinkText");
    return;
  }
  itemsList.innerHTML += `<li><span onfocusout='focusOutChecker(event)' contenteditable='true'></span></li>`;
  selectItems = itemsList.getElementsByTagName("span");
  selectItems[selectItems.length - 1].focus();
}

function saveListToDb() {
  const selectItems = itemsList.getElementsByTagName("span");
  const itemsListLi = [];
  for (let i = 0; i < selectItems.length; i++) {
    itemsListLi.push(selectItems[i].innerText);
  }
  const data = {
    action: "addSubjectItem",
    id: editSubjectSelect.value,
    data: JSON.stringify(itemsListLi),
  };
  if (sendToDb(data) === "record updated") {
    message("Επιτυχής αποθήκευση", editSubjectDiv, "greenText");
    subjectData = selectDbData("select_subject");
    updateSelectSubjects(subjectData);
  }
}

function focusOutChecker(event) {
  if (event.target.innerText === "") {
    event.path[1].remove();
  }
}
