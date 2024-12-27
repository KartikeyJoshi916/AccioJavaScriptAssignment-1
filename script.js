/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(function (elem, i) {
    if (elem.profession == "developer") {
      console.log(elem);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(function (elem, i) {
    if (elem.profession == "developer") {
      console.log(elem);
    }
  });
}

function addData() {
  const newObject = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObject);
  console.log(arr);
}

function removeAdmin() {
  let ans = arr.filter(function (elem, i) {
    return elem.profession != "admin";
  });
  console.log(ans);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "nikita", age: "11", profession: "developer" },
    { id: 5, name: "akku", age: "21", profession: "developer" },
    { id: 6, name: "nonu", age: "9", profession: "admin" },
  ];

  console.log(newArr.concat(arr));
}
