let register = document.querySelector(".register-content");
let btn = document.querySelector(".header-btn");
btn.addEventListener("click", (evt) => {
  register.classList.toggle("active")
})




let list = document.querySelector(".list");



fetch('https:/www.themealdb.com/api/json/v1/1/categories.php')
  .then((response) => response.json())
  .then((json) => console.log(json));


  function renderApp(user){
    user.forEach(element => {
      let item = document.querySelector("li")
      let
    });

  }




