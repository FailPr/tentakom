const dataTable = [];
function saveTable(saveName) {
  dataTable.length = 0;
  saveHeaderContentData();
  saveSendInfoData();
  saveSubjectDivData();
  saveTableData();
  saveResults(firstLastRow);
  saveResults(secondLastRow);
  saveResults(thirdLastRow);
  saveFeatures();
  saveNotesInfo();
  saveBankInfo();
  saveFooterLeft();
  saveFooterRigth();
  saveWebSiteBottomInfo();
  dbSave(saveName);
}
function saveHeaderContentData() {
  const headerContent = document.body.querySelector(".headerContent");
  const headerData = headerContent.querySelectorAll("span");
  const headerObj = { objectName: "headerContent", data: [] };
  for (let i = 0; i < headerData.length; i++) {
    const span = headerData[i].innerText;
    headerObj.data.push(span);
  }
  dataTable.push(headerObj);
}
function saveSendInfoData() {
  const sendInfo = document.querySelector(".sendInfo");
  const sendInfoData = sendInfo.querySelector("span").innerText;
  const sendInfoObj = { objectName: "sendInfo", data: [] };
  sendInfoObj.data.push(sendInfoData);
  dataTable.push(sendInfoObj);
}

function saveSubjectDivData() {
  const subjectDiv = document.querySelector(".subjectDiv");
  const subjectDivSpan = subjectDiv.querySelector("span").innerText;
  const subjectDivSelectOptions = subjectDiv.querySelector("select").options;
  const subjectDivSelectValue =
    subjectDivSelectOptions[subjectDivSelectOptions.selectedIndex].text;
  const subjectDivObj = { objectName: "subjectDiv", data: [] };
  subjectDivObj.data.push(subjectDivSpan);
  subjectDivObj.data.push(subjectDivSelectValue);
  dataTable.push(subjectDivObj);
}
function saveTableData() {
  const selectAllDataRows = document.querySelectorAll(".dataRow");
  const tableDataObj = { objectName: "tableData", data: [] };
  for (let i = 0; i < selectAllDataRows.length; i++) {
    const rowData = [];
    const selectAllCells = selectAllDataRows[i].querySelectorAll("td");
    const tableAAData = saveCellWithSpan(selectAllCells[0]);
    const eidosData = saveEidosCellData(selectAllCells[1]);
    const mhkosData = saveCellWithSpan(selectAllCells[2]);
    const platosData = saveCellWithSpan(selectAllCells[3]);
    const tetragonikaData = saveCellWithSpan(selectAllCells[4]);
    const temaxiaData = saveCellWithSpan(selectAllCells[5]);
    const kostosData = saveCellWithSpan(selectAllCells[6]);
    rowData.push(
      tableAAData,
      eidosData,
      mhkosData,
      platosData,
      tetragonikaData,
      temaxiaData,
      kostosData
    );
    tableDataObj.data.push(rowData);
  }
  dataTable.push(tableDataObj);
}

function saveResults(el) {
  const lastRowsData = { objectName: el.id, data: [] };
  const selectCells = el.querySelectorAll("td");
  for (let i = 0; i < selectCells.length; i++) {
    if (selectCells[i].querySelector("span")) {
      const cell = saveCellWithSpan(selectCells[i]);
      lastRowsData.data.push(cell);
    }
  }
  dataTable.push(lastRowsData);
}

function saveFeatures() {
  const featuresDivData = { objectName: "features", data: [] };
  const subjectListData = [];
  const selectFeaturesDiv = document.querySelector(".features");
  const selectH4 = selectFeaturesDiv.querySelector("h4").innerText;
  const selectSpan = selectFeaturesDiv.querySelector("span").innerText;
  const selectAllLi = subjectList.getElementsByTagName("li");
  for (let i = 0; i < selectAllLi.length; i++) {
    const span = saveCellWithSpan(selectAllLi[i]);
    subjectListData.push(span);
  }
  featuresDivData.data.push(selectH4, selectSpan, subjectListData);
  dataTable.push(featuresDivData);
}
function saveNotesInfo() {
  const notesInfoDivData = { objectName: "NotesInfo", data: [] };
  const notesInfoDiv = document.querySelector(".notesInfo");
  const title = notesInfoDiv.querySelector("h4").innerText;
  const notesList = notesInfoDiv.querySelectorAll("li");
  const noteListSave = [];
  for (let i = 0; i < notesList.length; i++) {
    const spanText = saveCellWithSpan(notesList[i]);
    noteListSave.push(spanText);
  }
  notesInfoDivData.data.push(title, noteListSave);
  dataTable.push(notesInfoDivData);
}

function saveBankInfo() {
  const bankInfoData = { objectName: "bankInfo", data: [] };
  const bankInfoDiv = document.querySelector(".bankInfo");
  const firstSpan = bankInfoDiv.querySelectorAll("span")[0].innerText;
  const secondSpan = bankInfoDiv.querySelectorAll("span")[1].innerText;
  bankInfoData.data.push(firstSpan, secondSpan);
  dataTable.push(bankInfoData);
}

function saveFooterLeft() {
  const footerLeftData = { objectName: "footerLeft", data: [] };
  const footerLeftDiv = document.querySelector(".footerLeft");
  const selectAllSpans = footerLeftDiv.querySelectorAll("span");
  for (let i = 0; i < selectAllSpans.length; i++) {
    footerLeftData.data.push(selectAllSpans[i].innerText);
  }
  dataTable.push(footerLeftData);
}

function saveFooterRigth() {
  const footerRigthData = { objectName: "footerRigth", data: [] };
  const footerRigthDiv = document.querySelector(".footerRigth");
  const selectAllSpans = footerRigthDiv.querySelectorAll("span");
  for (let i = 0; i < selectAllSpans.length; i++) {
    footerRigthData.data.push(selectAllSpans[i].innerText);
  }
  dataTable.push(footerRigthData);
}

function saveWebSiteBottomInfo() {
  const websiteBottomData = { objectName: "webSiteBottomCenter", data: [] };
  websiteBottomData.data.push(webSiteBottomCenter.innerText);
  dataTable.push(websiteBottomData);
}

function saveCellWithSpan(el) {
  const data = el.querySelector("span").innerText;
  return data;
}
function saveEidosCellData(el) {
  const optionsData = el.querySelector("select").options;
  const selectedOption = optionsData[optionsData.selectedIndex].text;
  return selectedOption;
}

function saveDialog() {
  const overFlow = createOverFlowWindow(0);
  const createElementDiv = document.createElement("div");
  createElementDiv.classList.add("saveDialog");
  const createElementInput = document.createElement("input");
  createElementInput.placeholder = "Όνομα αποθήκευσης";

  const createElementButton = document.createElement("button");
  createElementButton.innerText = "Αποθήκευση";

  createElementButton.addEventListener("click", () => {
    saveTable(createElementInput.value);
    overFlow.remove();
  });

  createElementDiv.append(createElementInput);
  createElementDiv.append(createElementButton);
  overFlow.append(createElementDiv);
  document.body.append(overFlow);
  createElementInput.focus();
}

function dbSave(saveName = "") {
  $.ajax({
    async: false,
    url: "add.php",
    type: "post",
    data: { action: "save", save: saveName, data: JSON.stringify(dataTable) },
    success: function (response) {
      if (response === "New record created successfully") {
        const overFlow = createOverFlowWindow();
        overFlow.innerHTML += `<h4 class='greenText'>Επιτυχής αποθήκευση</h4>`;
        document.body.append(overFlow);
      } else {
        const overFlow = createOverFlowWindow();
        overFlow.innerHTML += `<h4 class='pinkText'>Έγινε κάποιο λάθος κατα την αποθήκευση</h4>`;
        document.body.append(overFlow);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      const overFlow = createOverFlowWindow();
      overFlow.innerHTML += `<h4 class='pinkText'>Έγινε κάποιο λάθος κατα την αποθήκευση</h4>`;
      document.body.append(overFlow);
    },
  });
}
