  var linkSearchHotel = document.querySelector(".button-hotel-search");
  var popup = document.querySelector(".form-search");

  linkSearchHotel.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-on");
  })

