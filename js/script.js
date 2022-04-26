"use strict";

window.addEventListener('load', Initieer);
//globals
let lessonsData;
let divJSONFeedback, divJSONAsString, divJSONExtended;
let slcLocation;


function Initieer() 
{
	// DOM elementen ophalen
	divJSONFeedback = document.querySelector("#divJSONFeedback");
	divJSONExtended = document.querySelector("#divJSONExtended");
	slcLocation = document.querySelector("#slcLocation");
	divJSONAsString = document.querySelector("#divJSONAsString");

	// Eventlisteners toevoegen
	slcLocation.addEventListener("change", showLessonsContent);
	//JSON ophalen uit js file als text
	lessonsData = JSON.parse(lessons);
	console.log(lessonsData);
 	// Startup Functies na inladen DOM
	displayInfo();
	fillSelectLocations();
 	showLessonsContent();
 }


// Functies
/**
 * function om de lijst met vakken
 * te vullen
 */
function fillSelectLocations()
{
	//loop over campussen en voeg toe aan select lijst
	//for in om over object properties te gaan


}
/**
 * fills the divs with lessen
 */
function showLessonsContent() 
{
 
	//check if array

}


/**
 * makes a new div with object content
 * @param {*} objectLesson 
 * subject": "JavaScript",
   "module": "WFB",
   "day": "maandag",
   "room": "K1.012
 */
function CreateDivision(objectLesson)
{
    //create div with object props

	//use for in to loop over properties
	
}

function displayInfo() 
{
	// INFO :
	// Wanneer de JSON-file van een server komt(of in txt formaat is) 
	//moeten we deze omzetten naar een JSON-Object 
	//vangt de JSON objecten op na parsen


	// Wijzigen van de inhoud

	
	// Dot notatie

	// Array notatie

	// Eventueel terug omzetten naar een string 

  
}



