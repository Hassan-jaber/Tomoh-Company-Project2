let select_lang = document.querySelectorAll("select");
select_lang.forEach((Option) => {
  Option.addEventListener("change", (e) => {
    if (e.currentTarget.value === "Ar") {
      window.open("contact.html", "_self");
    } else {
      window.open("contact-ltr.html", "_self");
    }
  });
});