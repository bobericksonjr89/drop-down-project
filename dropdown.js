export function dropDown() {
  const menu = document.querySelectorAll(".drop-down__main");
  menu.forEach((dropDown) =>
    dropDown.addEventListener("click", () => {
      const dropDownSubMenu = dropDown.parentElement.querySelector(
        ".drop-down__submenu"
      );
      dropDownSubMenu.classList.toggle("drop-down__submenu--visible");
      const dropDownLinks = document.querySelectorAll(".drop-down__link");
      dropDownLinks.forEach((link) =>
        link.addEventListener("click", () => {
          dropDownSubMenu.classList.remove("drop-down__submenu--visible");
        })
      );
    })
  );
}
