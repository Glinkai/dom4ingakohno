//1

//document.getElementById('seach').addEventListener('focus', function(e) {
// console.log("Фокус");
//setTimeout(() => {
// this.blur();
// console.log("blur");
// }, 5000);
//})

//2
//const mainForm = document.querySelector(".main");

//mainForm.addEventListener("focus", function(e) {
// mainForm.classList.add("active")

//});

//mainForm.addEventListener("blur", function(e) {
//mainForm.classList.remove("active")

//});


//3

//const phone = {
//model: "iPhone",
//number: 5853663,
//color: "white",
//}

//localStorage.setItem("phone", JSON.stringify(phone));

const myName = "Inga";
const mySurname = "Kohno";

localStorage.setItem('name', myName);
localStorage.setItem('surname', mySurname);
localStorage.removeItem('name');