/** Escape Up */
export function onEscapePress() {
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
export function onInsertPress() {
  document.body.addEventListener("keyup", function (e) {
    if (e.key == "Insert") {
      document.getElementById("add-button").click();
    }
  });
}
