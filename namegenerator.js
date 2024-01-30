// Function to generate a random name from the given names array
function generateRandomName(names) {
  var randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function displayGeneratedName(name, buttonId) {
  document.getElementById(buttonId + "-generatedName").innerHTML = "";

  var generatedName = document.createElement("div");
  generatedName.classList.add("generated-name");
  generatedName.innerHTML = name;
  document.getElementById(buttonId + "-generatedName").appendChild(generatedName);
}

document.getElementById("praenomenButton").addEventListener("click", function() {
  var randomName = generateRandomName(praenominaNames);
  displayGeneratedName(randomName, "praenomenButton");
});

document.getElementById("nomengentileButton").addEventListener("click", function() {
  var randomName = generateRandomName(nominagentileNames);
  displayGeneratedName(randomName, "nomengentileButton");
});

document.getElementById("cognomenButton").addEventListener("click", function() {
  var randomName = generateRandomName(cognominaNames);
  displayGeneratedName(randomName, "cognomenButton");
});

document.getElementById("femininenamesButton").addEventListener("click", function() {
  var randomName = generateRandomName(femininenamesNames);
  displayGeneratedName(randomName, "femininenamesButton");
});

document.getElementById("neutralnamesButton").addEventListener("click", function() {
  var randomName = generateRandomName(neutralnamesNames);
  displayGeneratedName(randomName, "neutralnamesButton");
});

/*
// Function to generate a clickable spoiler utton
document.addEventListener("DOMContentLoaded", function() {
  const spoilerButtons = document.querySelectorAll(".spoiler-button");
  const spoilerContents = document.querySelectorAll(".spoiler-content");

  spoilerButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const spoilerContent = this.nextElementSibling;
      const otherSpoilerContents = Array.from(spoilerContents).filter(function(content) {
        return content !== spoilerContent;
      });

      spoilerContent.classList.toggle("show");
      otherSpoilerContents.forEach(function(content) {
        content.classList.remove("show");
      });

      if (spoilerContent.classList.contains("show")) {
        this.innerHTML = this.getAttribute("data-hide-label");
        document.querySelectorAll(".generator-button").forEach(function(button) {
          button.style.animation = "fadein 0.5s forwards";
        });
      } else {
        this.innerHTML = this.getAttribute("data-show-label");
        document.querySelectorAll(".generator-button").forEach(function(button) {
          button.style.animation = "fadeout 0.5s forwards";
        });
      }
    });
  });
});

var spoilerButtons = document.querySelectorAll(".spoiler-button");

spoilerButtons.forEach(function(button) {
  var spoilerContent = button.nextElementSibling;

  spoilerContent.style.display = "none";

  button.addEventListener("click", function() {
    if (spoilerContent.style.display === "none") {
      spoilerContent.style.display = "block";
    } else {
      spoilerContent.style.display = "none";
    }
  });
});
*/