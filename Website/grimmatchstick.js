document.getElementById("button1").onclick = function() {
    document.getElementById("image").src = "Bilder/Bilder Grim/Bild1.webp";
    document.getElementById("button1").style.backgroundColor="white";
    document.getElementById("button2").style.background="none";
    document.getElementById("button3").style.background="none";
  }
  
  document.getElementById("button2").onclick = function() {
    document.getElementById("image").src = "Bilder/Bilder Grim/Bild2.webp";
    document.getElementById("button1").style.background="none";
    document.getElementById("button2").style.backgroundColor="white";
    document.getElementById("button3").style.background="none";
  }
  
  document.getElementById("button3").onclick = function(){
    document.getElementById("image").src = "Bilder/Bilder Grim/Bild3.webp"; //ändert den src von der ID image zu einem neuen src
    document.getElementById("button3").style.backgroundColor="white";
    document.getElementById("button2").style.background="none";
    document.getElementById("button1").style.background="none";
  }

