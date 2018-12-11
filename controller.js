// // Add event listners here

window.onload=function() {

  document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("outer").innerHTML += getNote()
  });

}
