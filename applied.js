//you need to code here
var appliedJobs = JSON.parse(localStorage.getItem("jobApplications"));
console.log(appliedJobs);

var bookmarks = JSON.parse(localStorage.getItem("bookmarksObj")) || [];
//displayData(appliedJobs)
// document
//   .querySelector("#sortNames")
//   .addEventListener("change", handleNameSort);

window.addEventListener("load", function () {
  displayData(appliedJobs);
});



function handleSalarySort() {
  var selected = document.querySelector("#sortSalary").value;
  console.log(selected);
  if (selected == "htl") {
    appliedJobs.sort(function (a, b) {
      return b.salary - a.salary;
    });
    displayData(appliedJobs);
  }

  if (selected == "lth") {
    appliedJobs.sort(function (a, b) {
      return a.salary - b.salary;
    });
    displayData(appliedJobs);
  }
}

function handleNameSort() {
  //console.log('inside name sort')
  var selected = document.querySelector("#sortNames").value;
  console.log(selected);

  if (selected == "ascending") {
    appliedJobs.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });

    console.log(appliedJobs);
    displayData(appliedJobs);

    // localStorage.setItem("jobApplications", JSON.stringify(appliedJobs));
    // window.location.reload();
  }

  if (selected == "descending") {
    appliedJobs.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    console.log(appliedJobs);
    displayData(appliedJobs);

    // localStorage.setItem("jobApplications", JSON.stringify(appliedJobs));
    // window.location.reload();
  }
}

function handleRoleFilter() {
  var selected = document.querySelector("#filterRole").value;
  // filter will return array whenever it satifies the given condn

  var filteredList = appliedJobs.filter(function (elem) {
    return elem.role == selected;
  });

  console.log(filteredList)
  displayData(filteredList)
}
function displayData(appliedJobs) {
  document.querySelector("tbody").innerHTML = "";
  appliedJobs.map(function (elem) {
    var row = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.name;

    var td2 = document.createElement("td");
    td2.innerText = elem.email;

    var td3 = document.createElement("td");
    td3.innerText = elem.role;

    var td4 = document.createElement("td");
    td4.innerText = "Bookmark";
    td4.style.color = "blue";
    td4.style.cursor = "pointer";

    td4.addEventListener("click", function () {
      addToBookmark(elem);
    });

    var td5 = document.createElement("td");
    td5.innerText = elem.salary;

    row.append(td1, td2, td3, td5, td4);

    document.querySelector("tbody").append(row);
  });
}

function addToBookmark(elem) {
  console.log(elem);
  bookmarks.push(elem);
  localStorage.setItem("bookmarksObj", JSON.stringify(bookmarks));
}