function checkLogin(){
  let email=localStorage.getItem("userLogin");
  if(email==null){
  window.location.href="login.html";
  }
  let studentManagementStore=localStorage.getItem("studentManagementStore")?JSON.parse(localStorage.getItem("studentManagementStore")):[];
  let courseNumber=0;
  let classNumber=0;
  let activeClasses=0;
  let classesEnded=0;
  let classesWaiting=0;
  let studentNumber=0;
  let studentWaiting=0;
  let studentIsStudying=0;
  let studentsReserved=0;
  let studentsGraduating=0;
  studentManagementStore.forEach(course => {
    courseNumber++;
    activeClasses++;
    classesEnded++;
    classesWaiting++;
    course.arrClass.forEach(classOfStudent=>{
        classNumber++;
        classOfStudent.arrStudent.forEach(student=>{
            studentNumber++;
            studentIsStudying++;
            studentsReserved++;
            studentsGraduating++;
            if(student.status==1){
              studentWaiting++;
            }
        })
    })
  });
  document.getElementById("courseNumber").innerText="Số lượng khóa học hiện tại là:"+courseNumber;
  document.getElementById("classNumber").innerText="Số lớp học:"+classNumber;
  document.getElementById("activeClasses").innerText="Số lớp đang hoạt động:"+activeClasses;
  document.getElementById("classesEnded").innerText="Số lớp đã kết thúc:"+classesEnded;
  document.getElementById("classesWaiting").innerText="Số lớp đang chờ:"+classesWaiting;
  document.getElementById("studentNumber").innerText="Tống số SV:"+studentNumber;
  document.getElementById("studentWaiting").innerHTML="Tổng SV đang chờ lớp:"+studentWaiting;
  document.getElementById("studentIsStudying").innerText="Số SV đang học:"+studentIsStudying;
  document.getElementById("studentsReserved").innerText="Số SV bảo lưu/đình chỉ:"+studentsReserved;
  document.getElementById("studentsGraduating").innerText="Số SV tốt nghiệp:"+studentsGraduating;
  

  }
function logOut(){
    localStorage.removeItem("userLogin");
    window.location.href="./login.html";
}
function resetManagement(){
  window.location.href="quanlykhoahoc.html";
}
document.getElementById("btnLogOut").addEventListener("click",logOut);
document.onload=checkLogin();