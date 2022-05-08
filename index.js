document.querySelector("#form").addEventListener("submit", myFunction);
var jobArr = JSON.parse(localStorage.getItem("jobApplications")) || [];

//     if(localStorage.getItem("jobApplications")==null){
//       jobArr=[]
//     }
//     else{
//       jobArr=JSON.parse(localStorage.getItem("jobApplications"))
//     }

function myFunction() {
  event.preventDefault();
  var jobObj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    role: document.querySelector("#role").value,
    salary:document.querySelector("#salary").value,
  };
  jobArr.push(jobObj);
  //array of objects
  console.log(jobArr)
  localStorage.setItem("jobApplications", JSON.stringify(jobArr));
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
}