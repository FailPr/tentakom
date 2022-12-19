loadNames();
function loadNames() {
  loadNamesSelect.innerHTML = "<option>Διάλεξε όνομα</option>";
  for (let i = 0; i < loadData.length; i++) {
    loadNamesSelect.innerHTML += `<option value='${i}'>${loadData[i][1]}</option>`;
  }
}
function loadDataOnChange(el) {
  const data = JSON.parse(loadData[el.value][2]);
  loadHeaderContent(data[0]);
  loadSendInfo(data[1]);
  loadSubjectDiv(data[2]);
  loadTableData(data[3]);
  loadFirstLastRow(data[4]);
  loadSecondLastRow(data[5]);
  loadThirdLastRow(data[6]);
  loadFeaturesDiv(data[7]);
  loadNotesInfoDiv(data[8]);
  loadBankInfoDiv(data[9]);
  loadFooterLeftDiv(data[10]);
  loadFooterRigthDiv(data[11]);
}
function loadHeaderContent(data) {
  const headerContent = document.querySelector(".headerContent");
  const selectAllSpans = headerContent.querySelectorAll("span");
  for (let i = 0; i < selectAllSpans.length; i++) {
    selectAllSpans[i].innerText = data.data[i];
  }
}

function loadSendInfo(data) {
  const sendInfo = document.querySelector(".sendInfo");
  const selectSpan = sendInfo.querySelector("span");
  selectSpan.innerText = data.data[0];
}
function loadSubjectDiv(data) {
  const selectSubjectDic = document.querySelector(".subjectDiv");
  const selectSpan = selectSubjectDic.querySelector("span");
  const selectSelection = selectSubjectDic.querySelector("select");
  selectSpan.innerText = data.data[0];
  for (let i = 0; i < selectSelection.options.length; i++) {
    if (selectSelection.options[i].innerText === data.data[1]) {
      selectSelection.value = selectSelection.options[i].value;
      return;
    }
  }
  const createOption = document.createElement("option");
  createOption.innerText = data.data[1];
  selectSelection.append(createOption);
  selectSelection.value = createOption.value;
}

function loadTableData(data) {
  const selectRows = document.querySelectorAll(".dataRow");
  if (selectRows.length > 0) {
    for (let i = 0; i < selectRows.length; i++) {
      selectRows[i].remove();
    }
  }
  for (let i = 0; i < data.data.length; i++) {
    addTableRow(
      data.data[i][1],
      data.data[i][2],
      data.data[i][3],
      data.data[i][4],
      data.data[i][5],
      data.data[i][6]
    );
  }
}

function loadFirstLastRow(data) {
  const selectAllSpans = firstLastRow.getElementsByTagName("span");
  for (let i = 0; i < selectAllSpans.length; i++) {
    selectAllSpans[i].innerText = data.data[i];
  }
}

function loadSecondLastRow(data) {
  const selectAllSpans = secondLastRow.getElementsByTagName("span");
  for (let i = 0; i < selectAllSpans.length; i++) {
    selectAllSpans[i].innerText = data.data[i];
  }
}
function loadThirdLastRow(data) {
  const selectAllSpans = thirdLastRow.getElementsByTagName("span");
  for (let i = 0; i < selectAllSpans.length; i++) {
    selectAllSpans[i].innerText = data.data[i];
  }
}

function loadFeaturesDiv(data) {
  const selectFeatures = document.querySelector(".features");
  const selectSubjectList = selectFeatures.querySelector("#subjectList");
  const selectH4 = selectFeatures.querySelector("H4");
  const selectSpan = selectFeatures.querySelector("span");
  selectH4.innerText = data.data[0];
  selectSpan.innerText = data.data[1];
  const selectAllLi = selectSubjectList.querySelectorAll("li");
  for (let i = 0; i < selectAllLi.length; i++) {
    selectAllLi[i].remove();
  }
  for (let i = 0; i < data.data[2].length; i++) {
    selectSubjectList.innerHTML += `<li><span contenteditable>${data.data[2][i]}</span></li>`;
  }
}

function loadNotesInfoDiv(data) {
  const selectNotesInfoDiv = document.querySelector(".notesInfo");
  const selectH4 = selectNotesInfoDiv.querySelector("h4");
  selectH4.innerText = data.data[0];
  const selectList = selectNotesInfoDiv.querySelector("ol");
  selectList.innerHTML = "";
  for (let i = 0; i < data.data[1].length; i++) {
    selectList.innerHTML += `<li>${data.data[1][i]}</li>`;
  }
}

function loadBankInfoDiv(data) {
  const selectBankInfoDiv = document.querySelector(".bankInfo");
  const selectAllSpans = selectBankInfoDiv.querySelectorAll("span");
  selectAllSpans[0].innerText = data.data[0];
  selectAllSpans[1].innerText = data.data[1];
}
function loadFooterLeftDiv(data) {
  const selectFooterLeftDiv = document.querySelector(".footerLeft");
  const selectAllSpans = selectFooterLeftDiv.querySelectorAll("span");
  selectAllSpans[0].innerText = data.data[0];
  selectAllSpans[1].innerText = data.data[1];
  selectAllSpans[2].innerText = data.data[2];
}
function loadFooterRigthDiv(data) {
  const selectFooterRigthDiv = document.querySelector(".footerRigth");
  const selectAllSpans = selectFooterRigthDiv.querySelectorAll("span");
  selectAllSpans[0].innerText = data.data[0];
  selectAllSpans[1].innerText = data.data[1];
  selectAllSpans[2].innerText = data.data[2];
}
