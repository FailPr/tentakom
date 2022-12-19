let dbKindOfData = dbSelector("select_kindof");
let dbSubjectData = dbSelector("select_subject");
let loadData = dbSelector("load");
updateSubjectSelect();

function updateSubjectSelect() {
  subjectSelect.innerHTML = "<option>Διαλέξτε θέμα</option>";
  for (let i = 0; i < dbSubjectData.length; i++) {
    subjectSelect.innerHTML += `<option value='${dbSubjectData[i][0]}'>${dbSubjectData[i][1]}</option>`;
  }
  subjectSelect.innerHTML += "<option class='pinkBG'>Ανανέωση</option>";
}

function addItemToList() {
  if (subjectSelect.value === "Διαλέξτε θέμα") {
    return;
  }
  const createLi = document.createElement("li");
  const createSpan = document.createElement("span");
  createLi.addEventListener("click", () => {
    createSpan.focus();
  });
  createSpan.addEventListener("focusout", () => {
    if (createSpan.innerText == "") {
      createLi.remove();
    }
  });
  createSpan.setAttribute("contenteditable", "");
  createLi.append(createSpan);
  subjectList.append(createLi);
  createSpan.focus();
}

function updateSubjectList(value) {
  const selectButton = subjectList.querySelector("button");
  if (value === "Διαλέξτε θέμα") {
    return;
  }
  if (subjectSelect.value === "Ανανέωση") {
    dbSubjectData = dbSelector("select_subject");
    updateSubjectSelect();
    const lis = subjectList.querySelectorAll("li");
    lis.forEach((li) => {
      li.remove();
    });
    subjectList.innerHTML = "<li>Διαλέξτε θέμα</li>";
    subjectList.append(selectButton);
    return;
  }

  subjectList.innerHTML = "";
  subjectList.append(selectButton);
  let optionsFinded;
  for (let i = 0; i < dbSubjectData.length; i++) {
    if (dbSubjectData[i][0] === value) {
      subjectList.innerHTML += ``;
      optionsFinded = JSON.parse(dbSubjectData[i][2]);
    }
  }
  for (let i = 0; i < optionsFinded.length; i++) {
    const createLi = document.createElement("li");
    const createSpan = document.createElement("span");
    createLi.addEventListener("click", () => {
      createSpan.focus();
    });
    createSpan.addEventListener("focusout", (event) => {
      if (createSpan.innerText == "") {
        createLi.remove();
      }
    });
    createSpan.innerText = optionsFinded[i];
    createSpan.setAttribute("contenteditable", "");
    createLi.append(createSpan);
    subjectList.append(createLi);
  }
}

function dbSelector(select) {
  let res;
  $.ajax({
    async: false,
    url: "selectdb.php",
    type: "post",
    data: { kindof: select },
    success: function (response) {
      res = JSON.parse(response);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
  return res;
}