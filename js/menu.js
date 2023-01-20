function OpenNav() {

    var x = document.querySelector(".header__menu");

    if (x.style.display === "block") {

      x.style.display = "none";
    } else {

      x.style.display = "block";
    }
}