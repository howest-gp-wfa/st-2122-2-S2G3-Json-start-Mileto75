"use strict";

window.addEventListener('load', Initieer);
//globals
let lessonsData;
let divJSONFeedback, divJSONAsString, divJSONExtended;
let slcLocation;
let btnGetQuote;


async function Initieer() 
{
	// DOM elementen ophalen
	divJSONFeedback = document.querySelector("#divJSONFeedback");
	divJSONExtended = document.querySelector("#divJSONExtended");
	slcLocation = document.querySelector("#slcLocation");
	divJSONAsString = document.querySelector("#divJSONAsString");
	btnGetQuote = document.querySelector('#get-quote');
	// Eventlisteners toevoegen
	slcLocation.addEventListener("change", showLessonsContent);
	btnGetQuote.addEventListener('click', showQuote);
	//JSON ophalen uit js file als text
	//lessonsData = JSON.parse(lessons);
	lessonsData = await fetchData('js/rooster.json');
	// Startup Functies na inladen DOM
	//displayInfo();
	fillSelectLocations();
 	showLessonsContent();
}

async function showQuote() {
	let quote = await GetQuote();
	divJSONExtended.innerHTML = quote.value;
}

// Functies
/**
 * function om de lijst met vakken
 * te vullen
 */
async function fillSelectLocations()
{
	//loop over campussen en voeg toe aan select lijst
	//for in om over object properties te gaan
	
	//add to select list
	for(let prop in lessonsData) {
		slcLocation.add(new Option(prop,prop));
	}

}
/**
 * fills the divs with lessen
 */
 function showLessonsContent() 
{
	//empty the div
	divJSONExtended.innerHTML = '';
	var selectedLocation = slcLocation[slcLocation.selectedIndex].value;
	//get the related data from the json 
	let selectedLocationData = lessonsData[selectedLocation];
	console.log(selectedLocationData);
	//check if array
	if(Array.isArray(selectedLocationData)) {
		selectedLocationData.forEach(el => {divJSONExtended
		.appendChild(createDivision(el))})
	}
	else {
		divJSONExtended.appendChild(createDivision(selectedLocationData));
	}

}


/**
 * makes a new div with object content
 * @param {*} objectLesson 
 * subject": "JavaScript",
   "module": "WFB",
   "day": "maandag",
   "room": "K1.012
 */
function createDivision(objectLesson)
{
    //create div with object props
	let newDiv = document.createElement('div');
	//use for in to loop over properties
	for(let prop in objectLesson) {
		newDiv.innerHTML += `${prop}:${objectLesson[prop]}<br/>`;
	}
	newDiv.className = 'les';
	return newDiv;
}

async function displayInfo() 
{
	// INFO :
	// Wanneer de JSON-file van een server komt(of in txt formaat is) 
	//moeten we deze omzetten naar een JSON-Object 
	//vangt de JSON objecten op na parsen
	let lessonJson = JSON.parse(lesson);
	for(let prop in lessonJson) {
		divJSONFeedback.innerHTML += `${prop}:${lessonJson[prop]}<br/>`
	}

	// Wijzigen van de inhoud
	lessonJson.subject = 'Wfa';
	//console.log(lessonJson.subject);
	
	// Dot notatie

	// Array notatie
	console.log(lessonJson['subject']);
	// Eventueel terug omzetten naar een string
	//fetch methode
	let lessonFromFetch = await fetchData('/js/data.json');
	console.log(lessonFromFetch);
	for(let prop in lessonFromFetch) {
		divJSONFeedback.innerHTML += `${prop}:${lessonFromFetch[prop]}<br/>`
	}

}

async function GetQuote() {
	return await fetchData('https://api.chucknorris.io/jokes/random');
}

async function fetchData(location) {
	//try to fetch the data
	//classic
	// var response = await fetch(location);
	// var dataAsJson;
	// //check if success
	// if(response.ok) {
	// 	//get the data as json
	// 	dataAsJson = await response.json();
	// }
	// console.log(dataAsJson);
	//short version using method chaining

	return await fetch(location)
	.then(response => response.json())
	.then(data => data)
	.catch(error => error);
}





