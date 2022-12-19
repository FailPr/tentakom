function addTableRow(
  kindOfData = "",
  mhkosData = "",
  platosData = "",
  tetragonikaData = "",
  temaxiaData = "",
  kostosData = ""
) {
  const table = customers.querySelector("tbody");
  const selectRows = table.querySelectorAll(".dataRow");
  const createRow = table.insertRow(selectRows.length + 1);
  createRow.classList.add("dataRow");
  AACell(createRow);
  kindOfCell(createRow, kindOfData);
  mhkosCell(createRow, mhkosData);
  platosCell(createRow, platosData);
  tetragonikaCell(createRow, tetragonikaData);
  temaxiaCell(createRow, temaxiaData);
  kostosCell(createRow, kostosData);
}
function AACell(el) {
  const createTD = document.createElement("td");
  const createSpan = document.createElement("span");
  createSpan.classList.add("rowNumber");
  createTD.style.position = "relative";
  const createDeleteButton = document.createElement("button");
  createDeleteButton.classList.add("deleteRowButton");
  createDeleteButton.addEventListener("click", () => {
    el.remove();
    sumTemaxia.innerText = sumTemaxiaCounter();
    talbeRowCounter();
  });
  createTD.append(createSpan);
  createTD.append(createDeleteButton);
  el.append(createTD);
  talbeRowCounter();
}
function kindOfCell(el, kindOfData = "") {
  const select = addSelectItems();
  const createTD = document.createElement("td");
  select.classList.add("kindOfSelect");
  if (kindOfData === "") {
    createTD.append(select);
    el.append(createTD);
  } else {
    const createOption = document.createElement("option");
    createOption.innerText = kindOfData;
    select.append(createOption);
    select.value = createOption.value;
    createTD.append(select);
    el.append(createTD);
  }
}
function mhkosCell(el, mhkosData) {
  const createTD = document.createElement("td");
  createTD.id = "mhkos";
  const createSpan = document.createElement("span");
  createTD.addEventListener("click", () => {
    createSpan.focus();
  });
  createSpan.addEventListener("keyup", (e) => {
    const mhkos = e.path[2].querySelector("#mhkos");
    const platos = e.path[2].querySelector("#platos");
    const tetragonika = e.path[2]
      .querySelector("#tetragonika")
      .querySelector("span");
    const tm = mhkos.innerText * platos.innerText;
    if (checkNumber(tm)) {
      tetragonika.innerText = tm.toFixed(3);
      return;
    }
    tetragonika.innerText = tm;
  });
  createSpan.classList.add("spanWrap");
  createSpan.setAttribute("contenteditable", "");
  if (mhkosData === "") {
    createSpan.innerText = 0;
  } else {
    createSpan.innerHTML = mhkosData;
  }
  createTD.append(createSpan);
  el.append(createTD);
}

function platosCell(el, platosData) {
  const createTD = document.createElement("td");
  createTD.id = "platos";
  const createSpan = document.createElement("span");
  createTD.addEventListener("click", () => {
    createSpan.focus();
  });
  createSpan.addEventListener("keyup", (e) => {
    const mhkos = e.path[2].querySelector("#mhkos");
    const platos = e.path[2].querySelector("#platos");
    const tetragonika = e.path[2]
      .querySelector("#tetragonika")
      .querySelector("span");
    const tm = mhkos.innerText * platos.innerText;
    if (checkNumber(tm)) {
      tetragonika.innerText = tm.toFixed(3);
      return;
    }
    tetragonika.innerText = tm;
  });
  createSpan.classList.add("spanWrap");
  createSpan.setAttribute("contenteditable", "");
  if (platosData === "") {
    createSpan.innerText = 0;
  } else {
    createSpan.innerText = platosData;
  }

  createTD.append(createSpan);
  el.append(createTD);
}

function tetragonikaCell(el, tetragonikaData) {
  const createTD = document.createElement("td");
  createTD.id = "tetragonika";
  const createSpan = document.createElement("span");
  createSpan.setAttribute("contenteditable", "");
  if (tetragonikaData === "") {
    createSpan.innerText = 0;
  } else {
    createSpan.innerText = tetragonikaData;
  }

  createTD.addEventListener("click", () => {
    createSpan.focus();
  });
  createTD.append(createSpan);
  el.append(createTD);
}
function temaxiaCell(el, temaxiaData) {
  const createTD = document.createElement("td");
  const createSpan = document.createElement("span");
  createSpan.setAttribute("contenteditable", "");
  createSpan.classList.add("temaxia");
  createTD.addEventListener("click", () => {
    createSpan.focus();
  });
  createSpan.addEventListener("keyup", () => {
    sumTemaxia.innerText = sumTemaxiaCounter();
  });
  if (temaxiaData === "") {
    createSpan.innerText = 0;
  } else {
    createSpan.innerText = temaxiaData;
  }

  createTD.append(createSpan);
  el.append(createTD);
}
function kostosCell(el, kostosData = "") {
  const createTD = document.createElement("td");
  const createSpan = document.createElement("span");
  createSpan.setAttribute("contenteditable", "");
  createTD.addEventListener("click", () => {
    createSpan.focus();
  });
  if (kostosData === "") {
    createSpan.innerText = "";
  } else {
    createSpan.innerText = kostosData;
  }

  createTD.append(createSpan);
  el.append(createTD);
}

function talbeRowCounter() {
  const selectSpanNum = customers.querySelectorAll(".rowNumber");
  for (let i = 0; i < selectSpanNum.length; i++) {
    selectSpanNum[i].innerText = [i + 1];
  }
  if (!selectSpanNum.length) {
    firstLastRow.setAttribute("hidden", "");
    secondLastRow.setAttribute("hidden", "");
    thirdLastRow.setAttribute("hidden", "");
    return;
  }
  if (selectSpanNum.length > 0) {
    firstLastRow.removeAttribute("hidden");
    secondLastRow.removeAttribute("hidden");
    thirdLastRow.removeAttribute("hidden");
  }
}
function checkNumber(x) {
  // check if the passed value is a number
  if (typeof x == "number" && !isNaN(x)) {
    // check if it is integer
    if (Number.isInteger(x)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function sumTemaxiaCounter() {
  const table = customers.querySelector("tbody");
  const selectTemaxiaSpan = table.querySelectorAll(".temaxia");
  let counter = 0;
  for (let i = 0; i < selectTemaxiaSpan.length; i++) {
    counter += Number(selectTemaxiaSpan[i].innerText);
  }
  return counter;
}

function addSelectItems() {
  const createSelect = document.createElement("select");
  createSelect.innerHTML = "<option>Διάλεξτε είδος-περιγραφή</option>";
  for (let i = 0; i < dbKindOfData.length; i++) {
    createSelect.innerHTML += `<option value="${dbKindOfData[i][0]}">${dbKindOfData[i][1]}</option>`;
  }
  createSelect.innerHTML += "<option>Ανανέωση</option>";
  return createSelect;
}
