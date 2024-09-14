document.getElementById("dropbutton1").onclick = function() {
    var element = document.getElementById("inhalt1");
    if (element.style.display === "none") {
      element.style.display = "block";
      document.getElementById("dropbutton1").style.backgroundColor="white";
    } else {
      element.style.display = "none";
      document.getElementById("dropbutton1").style.background ="none"
    }
  }
  
  document.getElementById("dropbutton2").onclick = function() {
    var element = document.getElementById("inhalt2");
    if (element.style.display === "none") {
      element.style.display = "block";
      document.getElementById("dropbutton2").style.backgroundColor="white";
    } else {
      element.style.display = "none";
      document.getElementById("dropbutton2").style.background ="none"

    }
  }
  
  document.getElementById("dropbutton3").onclick = function() {
    var element = document.getElementById("inhalt3");
    if (element.style.display === "none") {
      element.style.display = "block";
      document.getElementById("dropbutton3").style.backgroundColor="white";
    } else {
      element.style.display = "none";
      document.getElementById("dropbutton3").style.background ="none"
    }
  }
  