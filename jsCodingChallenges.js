'use strict'
// // Coding Challenge #1
// // Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// // BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// // Your tasks:
// // 1. StoreMark'sandJohn'smassandheightinvariables
// // 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// // versions)
// // 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// // whether Mark has a higher BMI than John.
// // Test data:
// // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// let markWeight = 78;
// let markHeight = 1.69
// let johnWeight = 92;
// let johnHeight = 1.95

// markBMI = markWeight / (markHeight ** 2);
// johnBMI = johnWeight / (johnHeight ** johnHeight);

// console.log(markBMI, johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI); // true

// markWeight = 95;
// markHeight = 1.88;
// johnWeight = 85;
// johnHeight = 1.76

// markBMI = markWeight / (markHeight ** 2);
// johnBMI = johnWeight / (johnHeight ** johnHeight);

// console.log(markBMI, johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI); //false

// // Coding Challenge #2
// // Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// // Your tasks:
// // 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// // Hint: Use an if/else statement 😉 GOOD LUCK 😀

// markBMI.toFixed(2);
// johnBMI.toFixed(2);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than Johns (${johnBMI.toFixed(2)})! Mark is the heaviest!`);
// } else {
//     console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Marks (${markBMI.toFixed(2)})! John is the heaviest!`);
// }

// // There are two gymnastics teams, Dolphins and Koalas. They compete against each
// // other 3 times. The winner with the highest average score wins a trophy!
// // Your tasks:
// // 1. Calculate the average score for each team, using the test data below
// // 2. Compare the team's average scores to determine the winner of the competition,
// // and print it to the console. Don't forget that there can be a draw, so test for that
// // as well (draw means they have the same average score)
// // 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// // both teams have the same score and both have a score greater or equal 100
// // points. Otherwise, no team wins the trophy
// // Test data:
// // § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// // GOOD LUCK 😀

// let dolphinsAverage = ((96 + 108 + 89) / 3);
// let koalasAverage = ((88 + 91 + 110) / 3);

// if (dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins has the higher average(${dolphinsAverage.toFixed(2)}), DOLPHINS WIN!`)
// } else if (dolphinsAverage < koalasAverage) {
//     console.log(`Koalas have the higher average(${koalasAverage.toFixed(2)}), KOALAS WIN!`)
// } else {
//     console.log(`Both Teams have the same average(Dolphins (${dolphinsAverage.toFixed(2)} vs Koalas (${koalasAverage.toFixed(2)}))), ITS A TIE!`)
// }

// // 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// // team only wins if it has a higher score than the other team, and the same time a
// // score of at least 100 points. Hint: Use a logical operator to test for minimum
// // score, as well as multiple else-if blocks 😉
// // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// dolphinsAverage = ((97 + 99 + 101) / 3);
// koalasAverage = ((109 + 95 + 123) / 3);

// if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins' Average(${dolphinsAverage.toFixed(2)}) is at least 100 points and higher than Koalas(${koalasAverage.toFixed(2)}). DOLPHINS WIN!!!`)
// } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
//     console.log(`Koalas' Average(${koalasAverage.toFixed(2)}) is at least 100 points and is higher than Dolphlins(${dolphinsAverage.toFixed(2)}). KOALAS WIN!!`)
// } else if (koalasAverage === dolphinsAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
//     console.log(`Both Teams have an equal average and an average of at least 100 points. DRAW!`)
// } else {
//     console.log(`Both teams don't have an average of at least 100 points. BOTH TEAMS LOSE!`)
// }

// // 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// // both teams have the same score and both have a score greater or equal 100
// // points. Otherwise, no team wins the trophy
// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// dolphinsAverage = ((97 + 99 + 101) / 3);
// koalasAverage = ((109 + 95 + 106) / 3);

// if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins' Average(${dolphinsAverage.toFixed(2)}) is at least 100 points and higher than Koalas(${koalasAverage.toFixed(2)}). DOLPHINS WIN!!!`)
// } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
//     console.log(`Koalas' Average(${koalasAverage.toFixed(2)}) is at least 100 points and is higher than Dolphlins(${dolphinsAverage.toFixed(2)}). KOALAS WIN!!`)
// } else if (koalasAverage === dolphinsAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
//     console.log(`Both Teams have an equal average and an average of at least 100 points. DRAW!`)
// } else {
//     console.log(`Both teams don't have an average of at least 100 points. NO ONE WINS!`)
// }

// // Coding Challenge #4
// // Steven wants to build a very simple tip calculator for whenever he goes eating in a
// // restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// // 300. If the value is different, the tip is 20%.
// // Your tasks:
// // 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// // this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// // start with an if/else statement, and then try to convert it to a ternary
// // operator!)
// // 2. Print a string to the console containing the bill value, the tip, and the final value
// // (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// // 316.25”
// // Test data:
// // § Data 1: Test for bill values 275, 40 and 430
// // Hints:
// // § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// // § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// // GOOD LUCK 😀
// let bill = 430;
// let tip;

// bill >= 50 && bill <= 300 ? tip = (.15 * bill) : tip = (.2 * bill);

// console.log(`The bill was $${bill.toFixed(2)}, the tip was $${tip.toFixed(2)}, the total value is $${(bill + tip).toFixed(2)}`);


// PART 2
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console


// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);


// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No one wins... :( (${scoreDolphins} vs ${scoreKoalas}))`);
//     }
// }

// checkWinner(scoreKoalas, scoreDolphins);


// scoreKoalas = calcAverage(85, 54, 41);
// scoreDolphins = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK 😀

// let tip;
// let bill;

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         tip = .15 * bill;
//         return tip;
//     } else {
//         tip = .2 * bill;
//         return tip;
//     }
// }
// calcTip(100);
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[bills.length - 1])
// ];
// console.log(tips);

// const totalValue = [
//     tips[0] + bills[0],
//     tips[1] + bills[1],
//     tips[tips.length - 1] + bills[bills.length - 1]
// ];
// console.log(totalValue);

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName:'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// console.log(mark.bmi);
// console.log(john.bmi);

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}s (${john.bmi.toFixed(2)})`);
// } else if (john.bmi > mark.bmi)
//  {
//     console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}s (${mark.bmi.toFixed(2)})`);
//  }
