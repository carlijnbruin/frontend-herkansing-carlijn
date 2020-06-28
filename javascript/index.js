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

// function validity() {
//   // var checkVal = fieldset[currentF].reportValidity();
//   // console.log(checkVal);
//   form.reportValidity();
//   }
//
//   var valid = form.HTMLFormElement.reportValidity()
//
//   if (valid) {
//   naar volgende fieldset
//   }


function validity() {
  var currentField = fieldset[currentF];
  var inputs = currentField.querySelectorAll("input");
  inputs.forEach(function(input) {
    input.reportValidity();
  });
}

buttonNext.addEventListener("click", function(){
  console.log(validity());
  // if(valid){}
  fieldSet(currentF, currentF - 1, false);
  setStep(currentF);
  currentF ++;
  if (currentF == 2){
    buttonBack.classList.remove("hide");
    buttonBack.classList.add("show");
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









// document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
//
// // const fieldsetOne = document.querySelector("[data-fieldset-one]");
// // const fieldsetTwo = document.querySelector("[data-fieldset-two]").classList.add("hide");
// // const fieldsetThree = document.querySelector("[data-fieldset-three]").classList.add("hide");
// // const fieldsetFour = document.querySelector("[data-fieldset-four]").classList.add("hide");
// // const fieldsetFive = document.querySelector("[data-fieldset-five]").classList.add("hide");
// // const fieldsetSix = document.querySelector("[data-fieldset-six]").classList.add("hide");
// // const fieldsetSeven = document.querySelector("[data-fieldset-seven]").classList.add("hide");
//
// const thanks = document.querySelector("h2");
//
// const fieldset = [document.querySelector("[data-fieldset-one]"),
//                   document.querySelector("[data-fieldset-two]").classList.add("hide"),
//                   document.querySelector("[data-fieldset-three]").classList.add("hide"),
//                   document.querySelector("[data-fieldset-four]").classList.add("hide"),
//                   document.querySelector("[data-fieldset-five]").classList.add("hide"),
//                   document.querySelector("[data-fieldset-six]").classList.add("hide"),
//                   document.querySelector("[data-fieldset-seven]").classList.add("hide"),
//                 ];
//
// const buttonNext = document.querySelector("[data-button-next]");
// const buttonBack = document.querySelector("[data-button-back]");
//
//
// // function showCertainFieldset(let currentF){
// //   fieldset[currentF].classList.remove("hide");
// //   fieldset[currentF + 1].classList.add("show");
// //   return
// // }
// //
// // function hideAllFieldsets(){
// //   for (let i=0; i<fieldset.length; i++){
// //     fieldset[i].classList.add("hide");
// //   }
// // }
// //
// // buttonNext.addEventListener("click", function(){
// //   if (currentFieldset == fieldset.length + 1){
// //     hideAllFieldsets();
// //     thanks.classList.remove("hide");
// //     thanks.classList.add("show");
// //   } else {
// //     let currentFieldset = showCertainFieldset(currentFieldset, currentFieldset + 1);
// //   }
// // });
// //
//
//
//
//
// const profileMade = document.querySelector("h2");
// profileMade.classList.add("hide");
//
// const onlyShowFirstFieldset = document.querySelector("[data-show-only-first-Fieldset]");
// onlyShowFirstFieldset.classList.add("hide");
//
// function fieldSet(showFieldset, removeFieldset, showProfileMade){
//   onlyShowFirstFieldset.classList.remove("hide");
//   for (let i = 0; i < fieldset.length ; i++){
//     if (i == showFieldset){
//       fieldset[i].classList.add("show");
//     } else {
//       fieldset[i].classList.add("hide");
//     }
//     if (i == removeFieldset){
//       fieldset[i].classList.remove("show");
//     }
//
//     if (showProfileMade) {
//       profileMade.classList.remove("hide");
//       profileMade.classList.add("show");
//     }
//   }
// }
//
// nextButton.addEventListener("click", function(){
//   fieldSet(1, 0, false);
//   setStep(1);
// });
//
// button2.addEventListener("click", function(){
//   fieldSet(2, 1, false);
//   setStep(2);
// });
//
// button3.addEventListener("click", function(){
//   fieldSet(3, 2, false);
//   setStep(3);
// });
//
// button4.addEventListener("click", function(){
//   fieldSet(4, 3, false);
//   setStep(4);
// });
//
// button5.addEventListener("click", function(){
//   fieldSet(5, 4, false);
//   setStep(5);
// });
//
// button6.addEventListener("click", function(){
//   fieldSet(6, 5, false);
//   setStep(6);
// });
//
// button7.addEventListener("click", function(){
//   fieldSet(7, 6, true);
//   setStep(7);
// });
//
//
// function setStep(step) {
//   for (child in document.body.getElementsByClassName("circleSteps")[0].children) {
//     if (child <= step) {
//       document.body.getElementsByClassName("circleSteps")[0].children[child].style.backgroundColor = "green";
//     }
//   }
// }
