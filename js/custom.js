var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}