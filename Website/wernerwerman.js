document.getElementById("button1").onclick = function() {
    document.getElementById("image").src = "Bilder/Bilder werner/Bild2.webp";
    document.getElementById("button1").style.backgroundColor="white";
    document.getElementById("button2").style.background="none";
    document.getElementById("button3").style.background="none";
  }
  
  document.getElementById("button2").onclick = function() {
    document.getElementById("image").src = "Bilder/Bilder werner/Bild3.webp";
    document.getElementById("button1").style.background="none";
    document.getElementById("button2").style.backgroundColor="white";
    document.getElementById("button3").style.background="none";
  }
  
  document.getElementById("button3").onclick = function(){
    document.getElementById("image").src = "Bilder/Bilder werner/Bild4.png"; //ändert den src von der ID image zu einem neuen src
    document.getElementById("button3").style.backgroundColor="white";
    document.getElementById("button2").style.background="none";
    document.getElementById("button1").style.background="none";
  }

