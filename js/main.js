const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".mobile__nav");
const overlay = document.body

const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    if(menu.classList.contains("is-active")){
        overlay.style.overflow = "hidden";
    }else{
        overlay.style.overflow = "auto";
    }
  };
  menu.addEventListener("click", mobileMenu);
  menuLinks.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
});

function validate() {
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const text = document.getElementById('text');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your email address is valid."
        text.style.color = "#00ff00"
    }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please insert a valid email"
        text.style.color = "#7b2516"
    }

    if(email === ""){
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = ""
        text.style.color = "#00ff00"
    }
}