const lists = document.querySelectorAll(".navigation__wrapper__lists>a");
lists.forEach((li1) => {
  li1.addEventListener("click", () => {
    lists.forEach((li2) =>
      li1.textContent === li2.textContent
        ? li2.classList.add("selected")
        : li2.classList.remove("selected")
    );
  });
});

const lists2 = document.querySelectorAll(".footer__navigation__sections>a");
lists2.forEach((li1) => {
  li1.addEventListener("click", () => {
    lists.forEach((li2) =>
      li1.textContent === li2.textContent
        ? li2.classList.add("selected")
        : li2.classList.remove("selected")
    );
  });
});
