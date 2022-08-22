document.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // do this
      console.log("Checked");
    } else {
      // do that
      console.log("Not checked");
      location.reload();
    }
  });
});