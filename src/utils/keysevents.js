/** Escape Up */
export function onEscapeKeyPress() {
  document.body.addEventListener("keyup", function (e) {
    if (e.key == "Escape") {
      let elementsArray = document.querySelectorAll(".close-button");
      elementsArray.forEach(function (element) {
        element.click();
      });
    }
  });
}

/** Insert Up */
export function onInsertKeyPress() {
  document.body.addEventListener("keyup", function (e) {
    if (e.key == "Insert") {
      document.getElementById("add-button").click();
    }
  });
}
