//you need to code here
var bookmarks=JSON.parse(localStorage.getItem("bookmarksObj"))

bookmarks.map(function(elem){
  var row= document.createElement("tr")

  var td1= document.createElement("td")
  td1.innerText=elem.name

  var td2= document.createElement("td")
  td2.innerText=elem.email

  var td3= document.createElement("td")
  td3.innerText=elem.role

  

  row.append(td1,td2,td3)

  document.querySelector("tbody").append(row)
})