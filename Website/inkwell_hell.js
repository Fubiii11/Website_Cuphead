const images = ["Bilder/BilderQuotes/68.webp","Bilder/BilderQuotes/69.webp","Bilder/BilderQuotes/70.webp","Bilder/BilderQuotes/71.webp","Bilder/BilderQuotes/72.webp",
"Bilder/BilderQuotes/73.webp","Bilder/BilderQuotes/74.webp","Bilder/BilderQuotes/75.webp","Bilder/BilderQuotes/76.webp","Bilder/BilderQuotes/77.webp","Bilder/BilderQuotes/78.webp"
,"Bilder/BilderQuotes/79.webp","Bilder/BilderQuotes/80.webp"]
const quotes = ["Buttered, smashed, and mashed. It's over for you.", "Hey little guy, it's O.K. if you have to cry!", "I'm lean, mean and full of beta-carotene.", "With a face like mine is it a crime to be bouncing all the time?",
"I'm a handsome slime bringing pain -- one bounce at a time!", "I'm very smashing... even in grave situations!", "We've had fightin' souls since we've been tiny tadpoles. Crude and bad, 'cause we're from the wrong side of the lily pad.",
"You went for broke and now you're croaked!", "Fools who attempt to fight this will leave with allergic rhinitis!", "Extreme pollination and total domination!","Fitting, isn't it? I'm a blimp -- you're a wimp.",
"You won't get too far... it has been foretold in the stars.","You lost too soon and I was only half moon"];



let index = 0;

document.getElementById("next").onclick = function() {
  index = (index + 1) % images.length;
  document.getElementById("image").src = images[index];
  document.getElementById("quote").innerText = quotes[index];
};

document.getElementById("prev").onclick = function() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("image").src = images[index];
  document.getElementById("quote").innerText = quotes[index];
};
      