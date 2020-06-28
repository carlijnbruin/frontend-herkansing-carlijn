document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js '; // nodig voor de .no-js, styling wanneer er geen js is

const fieldsetArray = [document.querySelector("[data-fieldset-one]"),
                      document.querySelector("[data-fieldset-two]"),
                      document.querySelector("[data-fieldset-three]"),
                      document.querySelector("[data-fieldset-four]"),
                      document.querySelector("[data-fieldset-five]"),
                      document.querySelector("[data-fieldset-six]"),
                      document.querySelector("[data-fieldset-seven]"),
                      ];

const buttonNext = document.querySelector("[data-button-next]");
const buttonBack = document.querySelector("[data-button-back]");
const buttonSubmit = document.getElementById("submitButton");
let nextField = 1;                                                // dit is de index van de fieldset pagina die je gaat aanroepen in de fieldset array
let currentF = 0;

const onlyShowFirstFieldset = document.querySelector("[data-show-only-first-Fieldset]");
onlyShowFirstFieldset.classList.add("hide");                      // hide standaard alles wat na de eerste fieldset komt

buttonBack.classList.add("hide");                                 // laat de buttonBack verdwijnen (en show weer wanneer hij nodig is)


// functies


function showNewFieldset(showFieldset, removeFieldset){           // show en hide fieldsets d.m.v. for loop. Laat bv. fieldset 1 zien, en hide 2. Parameters worden in het script meegegeven bij bv regel 41, 55 en 71
  onlyShowFirstFieldset.classList.remove("hide");                 // laat hierdoor de rest van fieldsets weer zien
  for (let i = 0; i < fieldsetArray.length ; i++){                // door i++ naar volgende fieldset. Stopt met loopen wanneer i gelijk is aan fieldset.length
    if (i == showFieldset){                                       // als i hetzelfde is als showFieldset, voer dan onderstaande uit
      fieldsetArray[i].classList.add("show");
    } else {
      fieldsetArray[i].classList.add("hide");                     // Zo niet, voer dan dit uit
    }
    if (i == removeFieldset){                                     // als i hetzelfde is als removeFieldset, voer dan onderstaande uit
      fieldsetArray[i].classList.remove("show");
    }
  }
}


function validity() {                                             //valideren van huidige fieldset, is een boolean 'true or false'
  var currentField = fieldsetArray[nextField - 1];
  var inputs = currentField.querySelectorAll("input");            // selecteer alle inputs van de huidige fieldset
  let result = true;
  inputs.forEach(function(input) {                                // ga een voor een door de input fields heen, soort van loop
    if(input.reportValidity() == false) {                         // indien validatie niet correct,
      result = false;                                             // verander result in false
    }
  });
  return result;                                                  // dit is true or false en dat geeft hij terug in de boolean
}


// bron: https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
const profilePic = document.getElementById("inputProfilePic");

if(profilePic){																					          // indien profilePic op die specifieke fieldset staat, voer dan de functie uit.
	profilePic.addEventListener("change", function(event){          // wanneer een pagina laadt, heet het een event. Event 'change' wordt uitgevoerd in het geval dat de user iets veranderd in de input type.
		const image = document.getElementById("output");              // de img tag waar de geuploade afbeelding in gepreviewd wordt
		image.src = URL.createObjectURL(event.target.files[0]);       // maakt het een correcte file om te laten zien, maar 1 image mogelijk
	})
}


// bron: hulp van Sjors Wijsman (blok Tech student)
function cicleSteps(step) {                                       // bolletjes onderin, waar je bent in het formulier. Door de parameter die je op rij 51 en 66 meegeeft wanneer je op de next of back button klikt, weet hij waar je bent in het form (welke fieldset)
  for (child in document.body.getElementsByClassName("circleSteps")[0].children) { // loopt door alle children, 1 voor 1, van circleSteps heen en voert onderstaande uit. Je wilt alleen de eerste waarde die uit de chils komt pakken, vandaag [0] (denk aan de console.log)
    let nextStepGreen = document.body.getElementsByClassName("circleSteps")[0].children[child]; // maakt van de children een array en zet in variabele
    if (nextStepGreen.classList) {
      if (child <= step) {                                        // indien bolletje kleiner is of gelijk is aan waar je bent, voer onderstaande uit. Zo niet? remove groene bolletje.
        nextStepGreen.classList.add("stepGreen")                  // wanneer de childs in de circleSteps kleiner of gelijk zijn aan de step, voeg groen bolletje toe
      } else {
        nextStepGreen.classList.remove("stepGreen")               // zo niet? verwijder het groene bolletje (fieldset terug)
      }
    }
  }
}


// buttons die functies aanroepen


buttonNext.addEventListener("click", function(){                  // button als je op next klikt
  if (validity()){                                                // wanneer geklikt op button en validatie true is, doen dan dit:
    showNewFieldset(nextField, currentF);                         // dit geef je mee als parameter bij functie fieldSet, dus (showFieldset, removeFieldset)
    cicleSteps(nextField);                                        // show bolletjes onderin van de huidige fieldset. Huidige fieldset geef je mee aan de cicleSteps functie als parameter.
    nextField ++;
    currentF ++;                                                  // hiermee gaat de fieldset naar volgende fieldset toe, blijft geupdate worden
    if (nextField == 2){
      buttonBack.classList.remove("hide");
      buttonBack.classList.add("show");
      }
    else if (nextField == fieldsetArray.length){
      buttonNext.classList.remove("show");
      buttonNext.classList.add("hide");
    }
  }
});


buttonBack.addEventListener("click", function(){                   // button als je op back klikt
  showNewFieldset(currentF - 1, currentF);
  cicleSteps(currentF - 1);                                       // showt bolletje minder als je terug klikt
  nextField --;
  currentF --;                                                    // gaat 1 fieldset terug
  if (currentF == 0){                                             // Dit is om back button te hiden op de eerste fieldset page
    buttonBack.classList.remove("show");
    buttonBack.classList.add("hide");
  }
});


buttonSubmit.addEventListener("click",function(){                 // button als je submit knop klikt
  alert("Inschrijving is gelukt!");                               // alert popt up
})
