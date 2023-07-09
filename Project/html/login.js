let error=document.getElementById("error");
let btnSubmit=document.getElementById("btnSubmit");
btnSubmit.addEventListener("click",function(even){
    even.preventDefault();
   let email=document.getElementById("exampleInputEmail1").value;
   let password=document.getElementById("exampleInputPassword1").value;
   let checkLogin=checkUserExist(email,password);
   if(checkLogin){
    localStorage.setItem("userLogin",email);
    window.location.href="dashboard.html";
   }else{
    error.innerText="Email hoặc Password không tồn tại, vui lòng đăng nhập lại";
    error.style.color="red";
   }
})
function checkUserExist(email,password){
    let userSystem=localStorage.getItem("userSystem")? JSON.parse(localStorage.getItem("userSystem")):[];
    for (let index = 0; index < userSystem.length; index++) {
        if(userSystem[index].email==email && userSystem[index].password==password){
            return true;
        }
        
    }
    return false;
}
