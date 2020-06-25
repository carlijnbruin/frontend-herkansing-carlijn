document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';

const fieldset = [document.querySelector("[data-fieldset-one]"),
                  document.querySelector("[data-fieldset-two]"),
                  document.querySelector("[data-fieldset-three]"),
                  document.querySelector("[data-fieldset-four]"),
                  document.querySelector("[data-fieldset-five]"),
                  document.querySelector("[data-fieldset-six]"),
                  document.querySelector("[data-fieldset-seven]"),
                ];

const button1 = document.querySelector("[data-button-one]");
const button2 = document.querySelector("[data-button-two]");
const button3 = document.querySelector("[data-button-three]");
const button4 = document.querySelector("[data-button-four]");
const button5 = document.querySelector("[data-button-five]");
const button6 = document.querySelector("[data-button-six]");
const button7 = document.querySelector("[data-button-seven]");

const profileMade = document.querySelector("h2");
profileMade.classList.add("hide");

const onlyShowFirstFieldset = document.querySelector("[data-show-only-first-Fieldset]");
onlyShowFirstFieldset.classList.add("hide");

function fieldSet(showFieldset, removeFieldset, showProfileMade){
  console.log("function is working!");
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

button1.addEventListener("click", function(){
  fieldSet(1, 0, false);
});

button2.addEventListener("click", function(){
  fieldSet(2, 1, false);
});

button3.addEventListener("click", function(){
  fieldSet(3, 2, false);
});

button4.addEventListener("click", function(){
  fieldSet(4, 3, false);
});

button5.addEventListener("click", function(){
  fieldSet(5, 4, false);
});

button6.addEventListener("click", function(){
  fieldSet(6, 5, false);
});

button7.addEventListener("click", function(){
  fieldSet(7, 6, true);
});

// bron: https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
const profilePic = document.getElementById("inputProfilePic");

if(profilePic){																					// indien profilePic op die specifieke html page staat, voer dan de functie uit.
	profilePic.addEventListener("change", function(event){ // wanneer een pagina laadt, heet het een event. Event 'change' wordt uitgevoerd in het geval dat de user iets veranderd in de input type.
		const image = document.getElementById("output");    // de img tag waar de geuploade afbeelding in gepreviewd wordt.
		image.src = URL.createObjectURL(event.target.files[0]);
	})
}
