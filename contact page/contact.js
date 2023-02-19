let select_lang = document.querySelectorAll("select");
select_lang.forEach((Option) => {
  Option.addEventListener("change", (e) => {
    if (e.currentTarget.value === "En") {
      window.open("contact.html", "_self");
    } else {
      window.open("contact-rtl.html", "_self");
    }
  });
});