function showLinks() {
    var links = document.getElementById("inkwell-isle-links");
    if (links.style.display === "block") {
      links.style.display = "none";
      document.getElementById("topmenu").style.height = "90px";
    } else {
      links.style.display = "block";
      document.getElementById("topmenu").style.height = "190px";

    }
  }