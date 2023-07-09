
function checkLogin(){
    let email=localStorage.getItem("userLogin");
    if(email==null){
    window.location.href="login.html";
    }
}
let currentPage=1;
let recordsPerPage=3;
function renderData(page,studentManagementStore){
  
  let pageMax=getTotalPage(studentManagementStore);
  if(page<1){
    page=1;
  }
  if(page>pageMax){
    page=pageMax;
  }
  let content=document.getElementById("content");
  content.innerHTML="";
  let indexMinOnPage=(page-1)*recordsPerPage;
  let indexMaxOnPage;
  if(page*recordsPerPage>studentManagementStore.length){
    indexMaxOnPage=studentManagementStore.length;
  }else{
    indexMaxOnPage=page*recordsPerPage;
  }
  for(let index=indexMinOnPage;index<indexMaxOnPage;index++){
    content.innerHTML+=`
    <tr>
              <td>${index+1}</td>
              <td>${studentManagementStore[index].courseId}</td>
              <td>${studentManagementStore[index].courseName}</td>
              <td>${studentManagementStore[index].courseTime}</td>
              <td>${studentManagementStore[index].status}</td>
              <td>
                <button onclick=editManagement('${studentManagementStore[index].courseId}')><i class="fa-regular fa-pen-to-square"></i></button>
                <td onclick=deleteManagement('${studentManagementStore[index].courseId}')><i class="fa-solid fa-trash-can"></i></td>
              </td>
            </tr>
    `
  }
  let listPages=document.getElementById("listPages");
  listPages.innerHTML="";
  for(let i=1;i<=pageMax;i++){
    listPages.innerHTML+=`<li><a href="javascript:clickPage('${i}')">${i}</a></li>`;
  }
  let preview=document.getElementById("preview");
  let next=document.getElementById("next");
  if(currentPage==1){
    preview.style.visibility="hidden";
  }else{
    preview.style.visibility="visible";
  }
  if(currentPage==pageMax){
    next.style.visibility="hidden";
  }else{
    next.style.visibility="visible";
  }
}
function clickPage(page){
  currentPage=page;
  let studentManagementStore=localStorage.getItem("studentManagementStore")?JSON.parse(localStorage.getItem("studentManagementStore")):[];
  renderData(page,studentManagementStore);
}
function previewPage(){
  currentPage--;
  let studentManagementStore=localStorage.getItem("studentManagementStore")?JSON.parse(localStorage.getItem("studentManagementStore")):[];
  renderData(page,studentManagementStore);
}
function nextPage(){
  currentPage++;
  let studentManagementStore=localStorage.getItem("studentManagementStore")?JSON.parse(localStorage.getItem("studentManagementStore")):[];
  renderData(page,studentManagementStore);
}
function getTotalPage(studentManagementStore){
  return Math.ceil(studentManagementStore.length/recordsPerPage);
}
let studentManagementStore=localStorage.getItem("studentManagementStore")?JSON.parse(localStorage.getItem("studentManagementStore")):[];
document.onload=renderData(1,studentManagementStore);
  function logOut(){
      localStorage.removeItem("userLogin");
      window.location.href="./login.html";
  }
  function resetManagement(){
   window.location.href="dashboard.html";
  }
  function classroomManagement(){
   window.location.href="quanlykhoahoc.html";
  }
  document.getElementById("btnLogOut").addEventListener("click",logOut);
  document.onload=checkLogin();