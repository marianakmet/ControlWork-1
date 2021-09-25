const topBlock = document.querySelector(".top-block");
const area = document.querySelector(".area");
const editBlock = document.querySelector(".edit-block");
const styleBlock = document.querySelector(".style-block");
const mainBlock = document.querySelector(".main-block");
const addBlock = document.querySelector(".add-block");
const formCreateList = document.querySelector(".formCreateList");
const formCreateTable = document.querySelector(".formCreateTable");
let showSection = document.querySelector(".colorSelectForm");
let colors = [
  "red",
  "blue",
  "green",
  "black",
  "orange",
  "pink",
  "white",
  "purple",
  "olive",
];
function editBtn() {
  area.value = topBlock.innerHTML;
  console.log(area);
  editBlock.classList.remove("hidden");
  styleBlock.classList.add("hidden");
}
function saveBtn() {
  topBlock.innerHTML = area.value;
  editBlock.classList.add("hidden");
}
function styleBtn() {
  editBlock.classList.add("hidden");
  styleBlock.classList.remove("hidden");
}
function addBtn() {
  formCreateList.countLi.value = "";
  formCreateList.typeMarks.value = "";
  document.querySelector(".style2").checked = false;
  document.querySelector("#style2").checked = false;
  formCreateList.classList.add("hidden");
  mainBlock.classList.add("hidden");
  addBlock.classList.remove("hidden");
}
function backBtn() {
  mainBlock.classList.remove("hidden");
  addBlock.classList.add("hidden");
}
function fontSize() {
  topBlock.style.fontSize = event.target.value;
}
function fontFamily() {
  topBlock.style.fontFamily = event.target.value;
}
function fontWeight() {
  topBlock.style.fontWeight = event.target.checked ? "bold" : "normal";
}
function fontStyle() {
  event.target.checked
    ? topBlock.classList.add("styles")
    : topBlock.classList.remove("styles");
}
function chooseBtn() {
  if (event.target.dataset.create === "table") {
    formCreateTable.countTr.value = "";
    formCreateTable.countTd.value = "";
    formCreateTable.widthTd.value = "";
    formCreateTable.heightTd.value = "";
    formCreateTable.widthBorder.value = "";

    formCreateTable.classList.remove("hidden");
    formCreateList.classList.add("hidden");
  } else if (event.target.dataset.create === "list") {
    formCreateList.countLi.value = "";
    formCreateTable.classList.add("hidden");
    formCreateList.classList.remove("hidden");
  }
}

function createTable() {
  let form = document.forms["formCreateTable"];
  let countTr = form.countTr.value;
  let countTd = form.countTd.value;
  let widthTd = form.widthTd.value;
  let heightTd = form.heightTd.value;
  let widthBorder = form.widthBorder.value;
  let typeBorder = form.typeBorder.value;
  let borderColor = form.borderColor.value;

  area.value += `<table> `;
  for (let i = 1; i <= countTr; i++) {
    area.value += `<tr>`;
    for (let j = 1; j <= countTd; j++) {
      area.value += `<td style= "width:${widthTd}px;height:${heightTd}px;  border:${widthBorder}px ${typeBorder} ${borderColor}" >TD</td>`;
    }
    area.value += `<tr>`;
  }
  area.value += `</table>`;
  form.classList.add("hidden");

  backBtn();
}

function createList() {
  let form = document.forms["formCreateList"];
  let countLi = form.countLi.value;
  let typemark = form.typeMarks.value;

  console.log(countLi, typemark);
  area.value += `<ul style="list-style-type: ${typemark}">`;
  for (let i = 0; i < countLi; i++) {
    area.value += `<li>Item ${i + 1}</li>`;
  }
  area.value += `</ul>`;

  backBtn();
}

let buttonUsed;
function showColorGrid(button) {
  buttonUsed = button;
  showSection.style.display = "flex";
  let children = showSection.children;
  for (let i = 0; i < colors.length; i++) {
    children[i].style.backgroundColor = colors[i];
  }
}

function changeColor() {
  if (buttonUsed === "text") {
    topBlock.style.color = event.target.style.backgroundColor;
    showSection.style.display = "none";
    console.log("changeColor btntext");
  } else if (buttonUsed === "background") {
    topBlock.style.backgroundColor = event.target.style.backgroundColor;
    showSection.style.display = "none";
  }
}
