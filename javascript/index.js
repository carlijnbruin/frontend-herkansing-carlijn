document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';

const fieldset = [document.querySelector("[data-fieldset-one]"),
                  document.querySelector("[data-fieldset-two]"),
                  document.querySelector("[data-fieldset-three]"),
                  document.querySelector("[data-fieldset-four]"),
                  document.querySelector("[data-fieldset-five]"),
                  document.querySelector("[data-fieldset-six]"),
                  document.querySelector("[data-fieldset-seven]"),
                ];

let form = document.querySelector('form');
const buttonNext = document.querySelector("[data-button-next]");
const buttonBack = document.querySelector("[data-button-back]");
buttonBack.classList.remove("show");
buttonBack.classList.add("hide");
let currentF = 1;

const profileMade = document.querySelector("h2");
profileMade.classList.add("hide");

const onlyShowFirstFieldset = document.querySelector("[data-show-only-first-Fieldset]");
onlyShowFirstFieldset.classList.add("hide");

function fieldSet(showFieldset, removeFieldset, showProfileMade){
  onlyShowFirstFieldset.classList.remove("hide");
  for (let i = 0; i < fieldset.length ; i++){
    if (i == showFieldset){
      fieldset[i].classList.add("show");
    } else {
      fieldset[i].classList.add("hide");
    }
    if (i == removeFieldset){
      fieldset[i].classList.remove("show");
    }

    if (showProfileMade) {
      profileMade.classList.remove("hide");
      profileMade.classList.add("show");
    }
  }
}

function validity() {
  var currentField = fieldset[currentF - 1];
  var inputs = currentField.querySelectorAll("input");
  let result = true;
  inputs.forEach(function(input) {
    if(input.reportValidity() == false) {
      result = false;
    }
  });
  return result;
}

buttonNext.addEventListener("click", function(){
  if (validity()){
    fieldSet(currentF, currentF - 1, false);
    setStep(currentF);
    currentF ++;
    if (currentF == 2){
      buttonBack.classList.remove("hide");
      buttonBack.classList.add("show");
      }
    }
  });

buttonBack.addEventListener("click", function(){
  fieldSet(currentF - 2, currentF - 1, false);
  setStep(currentF - 2);
  currentF --;
  if (currentF == 1){
    buttonBack.classList.remove("show");
    buttonBack.classList.add("hide");
  }
});



// bron: https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
const profilePic = document.getElementById("inputProfilePic");

if(profilePic){																					// indien profilePic op die specifieke html page staat, voer dan de functie uit.
	profilePic.addEventListener("change", function(event){ // wanneer een pagina laadt, heet het een event. Event 'change' wordt uitgevoerd in het geval dat de user iets veranderd in de input type.
		const image = document.getElementById("output");    // de img tag waar de geuploade afbeelding in gepreviewd wordt.
		image.src = URL.createObjectURL(event.target.files[0]);
	})
}

function setStep(step) {
  for (child in document.body.getElementsByClassName("circleSteps")[0].children) {
    let nextStepGreen = document.body.getElementsByClassName("circleSteps")[0].children[child];
    if (nextStepGreen.classList) {
      if (child <= step) {
        nextStepGreen.classList.add("stepGreen")
      } else {
        nextStepGreen.classList.remove("stepGreen")
      }
    }
  }
}
