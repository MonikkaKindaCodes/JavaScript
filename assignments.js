/*LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console*/

let country = 'United States'; 
// let continent = 'North America';
let population = 329000000;
// console.log(country, continent, population);

/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

// let isIsland = false; 
let language;

// console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

/* LECTURE: let, const and var
1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens */

language = 'English';
const continent = 'North America';
const isIsland = false;

// continent and isIsland variables changed color. 
//Also has to comment out all the initial declarations. 

console.log(language, continent, isIsland)


// LECTURE: Basic Operators
// 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
// 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
// 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// Finland?
// 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// have less people than the average country?
// 5. Basedonthevariablesyoucreated,createanewvariable'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

halfOfPopulation = (population / 2);
console.log(halfOfPopulation + ' ' + 'people'); //164500000 people

// population++;
console.log(population); 329000001

let finlandPopulation = 6000000; 
console.log(population > finlandPopulation); //true

let averagePopulation = 33000000; 
console.log(population >= averagePopulation);

console.log(country + " is in " + continent + ", and it's " + population + " speak " + language + "." );