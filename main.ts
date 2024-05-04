console.log("Exercise 2") 
// Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string= "Eric";
console.log(`Hello ${personName} , would you like to learn some Python today?`);

console.log("Exercise 3")  
// Name Cases: Store a person’s name in a variable, and then 
// print that person’s name in lowercase, uppercase, and titlecase.

//Lowercase
let person_Name: string ="Foqia"
console.log("lowercase:", person_Name.toLowerCase());

//Uppercase
console.log("uppercase:", person_Name.toLocaleUpperCase());

//Titlecase
console.log("tittlecase:", person_Name.replace(/\bw/g,c => c.toUpperCase()));

//Exercise 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “ A person who never made a mistake never tried anything new.”

let quote: string = "A person who never made a mistake never tried anything new.";
let author: string= "Albert Einstein"
console.log(`${author} Once said, "${quote}`);

let quotes = "Quaid e Azam";
let msg = `${quotes} Once said, "No nation can rise to the height of glory unless your women are side by side with you."`;
console.log(msg);

//Exercise 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
// famous person.Then compose your message and store it in a new variable called message.
// Print your message.

// let quote: string= "No nation can rise to the height of glory unless your women are side by side with you.";
// let famous_person="Quaid e Azam";
// let message= `${famous_person} once said, ${quote}`;
// console.log(message);

let famous_person = "Quaid e Azam";
let message= `${famous_person} once said, No nation can rise to the height of glory unless your women are side by side with you.`;
console.log(message);

//Exercise 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed.Then print the name after striping the white spaces.

let personNames: string ="\n\t Foqia Siddiqui\t\n";
console.log(personNames);

let stripped: string = "Foqia Siddiqui";
console.log(stripped);

//Exercise 7 & 8
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result
// in the number.
// 8. Be sure to enclose your operations in print statements to see the results.

// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4 + 4);
console.log(10 - 2);
console.log(8 * 1);
console.log(16 / 2);

//Exercise 9
// Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that reveals your favorite number. Print that message.

let favouriteNumber: number = 5;
console.log(`My favourite number is ${favouriteNumber}`);

//Execise 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.

// My name is Foqia
//This program will run simple Hello World
console.log("Hello World ");
//simple operations program will run each line result in the number 8
console.log(4 + 4);
console.log(10 - 2);
console.log(8 * 1);
console.log(16 / 2);

// // EXERCISE 11
// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.

let names1: string[] =['Fatima' , 'Ayesha' , 'Anam ' , 'Saima'];
for(let i=0; i<names1.length; i++){
  console.log(names1[i]);
}

//EXERCISE 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
// name, print a message to them. The text of each message should be the same, but each message should be
//  personalized with the person’s name.

let members: string[] =['Fatima' , 'Ayesha' , 'Anam ' , 'Saima'];
let mssg: string='Tommorrow you have to submit assingment:';
for(let i=0; i<members.length; i++){
 console.log(mssg + members[i]);
 };

let names: string[] = ['Fatima' , 'Ayesha' , 'Anam ' , 'Saima'];

let greeting_message: string = "You are invited on my birthday party."

names.forEach(names => {
    console.log(`Hello! ${names} ${greeting_message}`)
});

// // Exercise 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these 
// items, such as “I would like to own a Honda motorcycle.”

let transPortation : string [] = ['Toyota carolla','Honda motorcycle','Sports bike'];

transPortation.forEach(transport => {
    console.log(`I would like to own a ${transport}.`)
}
);

// //Exercise 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to 
// print a message to each person, inviting them to dinner.

let  guest_list1 : string [] = ['Sara' ,'Arif' ,'Sabeen' ,'Hina'];
for(let i=0; i<guest_list1.length; i++ ){
  console.log(` Dear ` +  guest_list1[i] + `, \n Tonight you are invited on dinner at my farmhouse .\n ThankYou\n`);
}

//Continue from Exercise 14
let  guest_list2 : string [] = ['Sara' ,'Arif' ,'Sabeen' ,'Hina'];
for(let i=0; i<guest_list2.length; i++ ){
  console.log(` Dear ` +  guest_list2[i] + `, \n Tonight you are invited on dinner at my farmhouse .\n ThankYou\n`);
};

// //Exercise 15

// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the 
// name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new 
// person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guest : string = `Arif`;
let new_guest : string = `Ameen`;
guest_list2[1] = new_guest;
for(let i=0; i<guest_list2.length; i++ ){
console.log(` Dear ` +  guest_list2[i] + `, \n Tonight you are invited on dinner at my farmhouse .\n ThankYou\n`);
}
console.log(`Ms. ${guest} is not coming tomorrow.`);

// Start from Exercise 15
let  guest_list3 : string [] = ['Sara' ,'Arif' ,'Sabeen' ,'Hina'];

guest_list3.forEach(invite => {
    console.log(`Dear ${invite}, you are invited to dinner.`)
}
);

// Exercise 16
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
// list. • Print a new set of invitation messages, one for each person in your list.
let  guest_list4 : string [] = ['Sara' ,'Arif' ,'Sabeen' ,'Hina'];


console.log("\nGreat news! We found a bigger dinner table.");

// Updated List
guest_list4.unshift("Ali"); // Add Ali to the begining of the array
guest_list4.splice(2, 0, "Dua"); // Add Dua to the middle of the array
guest_list4.push("Sana"); // Add Sana to the end of the array

guest_list4.forEach(person =>{
    console.log(`Dear ${person} \n Tonight you are invited on dinner at my farmhouse .\n ThankYou\n`);

});

console.log(` Dear ${guest_list4} I have arranged bigger dinner table at night and inviting some more of my freinds so make sue to be there on time. \n Thank you \n `)

//Exercise 17
let  guest_list5 : string [] = ['Sara' ,'Arif' ,'Sabeen' ,'Hina'];

guest_list5.forEach(invite => {
    console.log(`Dear ${invite}, \n Tonight you are invited on dinner at my farmhouse .\n ThankYou\n`)
}
);

// // Exercise 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop
//  a name from your list, print a message to that person letting them know you’re sorry you can’t invite
// them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.

console.log('\nunfourtunately we can not arrange big table , Only two person allow to join ')
  while(guest_list5.length>2){
    let remove_guest = guest_list5.pop();
    console.log(`We apologize Sir/Madam.${remove_guest} you are not invited on dinner.`);
  }
  for(let i=0; i<guest_list5.length; i++ ){
    console.log(`\nRespected Sir/Mam ` + guest_list5[i] + ` \nYes you are still invited on dinner. \n Thank you \n `);
  }
  guest_list5.splice(0,2)
  console.log(guest_list5)
  
  //Exercise 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places : string [] = ['cape town', 'dehli', 'faisalabad', 'bankong', 'arab']

// console.log('original: '    +     places);
// console.log('copy: ' + [...places].sort());

// console.log('original: '    +     places);

console.log('copy: ' + [...places].sort().reverse());
console.log('copy: ' + [...places].sort().reverse());
console.log('original: '    +     places.sort());
console.log('copy: ' + [...places].sort().reverse());

//Exercise 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
// indicating the number of people you are inviting to dinner.

let  guest_list : string [] = ['Sara' ,'Arif' ,'Sabeen' ,'Hina'];
for(let i=0; i<guest_list.length; i++ ){
  console.log(` Dear ` +  guest_list[i] + `, \n Tonight you are invited on dinner at my farmhouse .\n ThankYou\n`);
}

let noOfGuess = guest_list.length;

console.log(`\nNumber of people invited to dinner: ${noOfGuess}`);

//Exercise 20
// Think of something you could store in a array. For example, you could make a list of
// mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that 
// creates a list containing these items.

let countries : string [] = [

    'Pakistan', 
    'Canada', 
    'Saudia Arabia', 
    'China', 
    'Japan', 
    'England', 
    'Australia'

];

console.log("List of Countries: ")

 for(let top of countries ){
     console.log(top)
 }

 //Exercise 21
 // They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface item {
    name: string
    price: number
    
};

const stitchdress: item = {
    name: ' Stitch Dress ' ,
    price: 4000
};

const printeddress: item = {
    name: ' Printed Dress ' ,
    price: 2000
};

console.log(`GulAhmed: ${stitchdress.name} price: $${stitchdress.price}`)
console.log(`GulAhmed: ${printeddress.name} price: $${printeddress.price}`)

//Exercise 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program. 

let array: (string | number) [] = ['Sara', 'Reena', 3,5,8, 'Ali']
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])

//Exercise 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and 
// your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let policy : string = 'interested'

console.log("Is policy == 'interested?' | provide further details") //True
console.log(policy == 'intrested');

console.log("Is policy == 'interested?' | provide further details") //True
console.log(policy === 'interested');

let age : number = 50

console.log("Is age <= 50 | You can apply for this policy") //True
console.log(age <= 50);

console.log("Is age >= 50 | You can apply for this policy") //True
console.log(age >= 50);

console.log("Is age > 50 | You can apply for this policy") //True
console.log(age > 40);

let car : string = "Huzaifa"

console.log("Is car !== 'Huzaifa | you predict wrong") //False
console.log(car  !== 'Huzaifa');

console.log("Is car != 'Huzaifa | you predict wrong") //False
console.log(car  != 'Huzaifa');

let price : number = 50000

console.log("Is price > 50000  | its expensive for me") //False
console.log(price > 50000);

console.log("Is price < 50000  | i can buy ") //False
console.log(price < 50000);

let prices : number = 60000

console.log("Is prices <= 50000  | i can buy") //False
console.log(prices <= 50000 );

// Exercise 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one
// False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let test1: string = "icecream";
let test2: string = "burger";

//Equality Test & Inequality
console.log(test1 === test2) //false
console.log(test1 !== test2) // True

//Test using lower case function
let test3: string = "Icecream";
let test4: string = "burger";

console.log(test3.toLocaleLowerCase() === test4.toLocaleLowerCase()) //True

let a: number = 5;
let b: number = 10;

//Equality & Inequality
console.log(a === b) //False
console.log(a !== b) //True

//Greater & Less than
console.log(a > b) //False
console.log(a < b) //True

//Greater &  equal to, less than or equal to

console.log(a >= b) //False
console.log(a <= b) //True

let x: number = 5;
let y: number = 10;
let z: number = 15;

//Using "and" Operator
console.log(x < y && y < z ) //True

//Using "or" Operator
console.log(x < y || z < y) //False

//Test in Array
let numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers.includes(3)) // True
console.log(numbers.includes(6)) //False

let fruits: string[] = ['apple', 'mango', 'stawbery', 'grapes'];

console.log(fruits.includes('mango')) //True
console.log(fruits.includes('kiwi')) // False


//Exercise 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
// assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, 
// print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)

let alien_color1 : string = "green";

if (alien_color1 == "green"){
    console.log("Congratulations! The player just earned 5 points.")
}

alien_color1 = "yellow";

if (alien_color1 == "green"){
    console.log("The player just earned 5 points.")
}

// Exercise 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting 
// the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alien_color2 : string = "green";

if (alien_color2 == "green"){
    console.log("Congratulations! The player just earned 5 points for shooting the alien.")
}

else{
    console.log("Congratulations! The player just earned 10 points for shooting the alien.")
    
}

alien_color2 = "red";

if (alien_color2 != "green"){
    console.log("Congratulations! The player just earned 10 points for shooting the alien.");
}

// Exercise 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color
// alien.


let alien_color : string = "green";

if (alien_color == "green"){
    console.log("The player just earned 5 points.");
}

else if (alien_color == "yellow"){
    console.log("The player just earned 10 points.");
}

else if (alien_color == "red"){
    console.log("The player just earned 15 points.");
}

else{
    console.log("Please choose correct color")
}

alien_color = "yellow";

if (alien_color == "green"){
    console.log("The player just earned 5 points.");
}

else if (alien_color == "yellow"){
    console.log("The player just earned 10 points.");
}

else if (alien_color == "red"){
    console.log("The player just earned 15 points.");
}

else{
    console.log("Please choose correct color")
}

alien_color = "red";

if (alien_color == "green"){
    console.log("The player just earned 5 points.");
}

else if (alien_color == "yellow"){
    console.log("The player just earned 10 points.");
}

else if (alien_color == "red"){
    console.log("The player just earned 15 points.");
}

else{
    console.log("Please choose correct color")
}

// //Exercise 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

let ages: number = 15;

if (ages < 2 ){
    console.log("Person is a  baby.")
}

else if (ages >= 2 && ages < 4 ) {
    console.log("Person is  a  toddler.")
}

else if (ages >= 4  &&  ages < 13) {
    console.log("Person is  a  kid.")
}

else if (ages >= 13 && ages < 20 ) {
    console.log("Person is  a  teenager .")
}

else if (ages >= 20 && ages < 65  ) {
    console.log("Person is  a  adult.")
}

else {
    console.log("Person is an elder")
}

// // Exercise 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits: string [] = ['apple', 'stawbery', 'bananna']

if (favourite_fruits.includes('apple')){
    console.log('You really like apple!')

}

if (favourite_fruits.includes('bananna')){
    console.log('You really like bananna!')

}

if (favourite_fruits.includes('mango')){
    console.log('You really like mango!')

}

if (favourite_fruits.includes('orange')){
    console.log('You really like orange!')

}

if (favourite_fruits.includes('stawbery')){
    console.log('You really like stawbery!')

}

// Exercise 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, 
// would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let users1 : string [] = ['admin', 'ali', 'hamza', 'davar', 'aisha', 'sana']

for(let user of users1){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }

else{
    console.log(`Hello ${user}, thank you for logging in again.`)
}

}

// // Exercise 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users : string [] =  ['sana', 'ali', 'hamza', 'davar', 'aisha', 'admin']

if (users.length === 0){
    console.log("We need to find some users!")
}

else{
    users = [];
    console.log("All users have been removed " + users.length)
}

// // Exercise 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames
//  are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users : string[] = ['dua', 'anam', 'sami', 'alam', 'aqib']
let new_users : string[] = ['sana', 'zarbab', 'sarim', 'qasim', 'dua']

new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        
        )

      )  {
    console.log(`${newUser} wil need to enter a new username.`);
} else{
    console.log(`${newUser} is available.`)
}
});

// // Exercise 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be 
//  on a separate line.

let myNumbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0;  i < myNumbers.length; i++) {
    if(myNumbers [i] == 1){
        console.log(`${myNumbers[i]}st`);

} else if(myNumbers[i] == 2){
    console.log(`${myNumbers[i]}nd`);
}

else if(myNumbers[i] == 3){
    console.log(`${myNumbers[i]}rd`);
}

else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
    console.log(`${myNumbers[i]}th`);
}
}

// Exercise 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//  and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
// name of the pizza. For each pizza you should have one line of output containing a simple statement like 
// I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional
//  sentence, such as I really love pizza!

let kind_pizza : string[] = ['creamy tikka pizza', 'pepperoni pizza', 'fajita pizza'];

for(let i = 0; i < kind_pizza.length; i++) {
    console.log(kind_pizza[i]);
}

for(let i = 0; i < kind_pizza.length; i++) {
    console.log(`I like to eat ${kind_pizza[i]}`);
}

console.log('\n I love to eat pizzas. My favourite flavour is creamy tikka. I really like toping of cheese on it.')

// // Exercise 35
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the 
// name of each animal. • Modify your program to print a statement about each animal, such as 
// A dog would make a great pet. • Add a line at the end of your program stating what these 
// animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals : string[] = ['lion', 'tiger', 'wolve'];

animals.forEach(animal => {
    console.log(`A ${animal} is a great wild animal.`);
});

console.log("They have similar hunting behaviors and physical features!")

// // Exercise 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
//  should be printed on the shirt. The function should print a sentence summarizing the size of the
//  shirt and the message printed on it. Call the function.

function male_shirt1(size: string, message: string){
    console.log(`Making a ${size} t-shirt withe the  message "${message}" printed on it.  `);
}

male_shirt1("medium", "legends");

// // Exercise 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and 
// a shirt of any size with a different message.

function male_shirt(size: string = "large",  message: string = "I love TypeScript"){
    console.log(`Making a ${size} t-shirt with the  message "${message}" printed on it.  `);
}

male_shirt();
male_shirt("medium");
male_shirt("small", "I love TypeScript");

// // Exercise 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
// for the country a default value. Call your function for three different cities, at least one of 
// which is not in the default country.


function describe_city(city: string, country: string = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan'); // Karachi is in Pakistan
describe_city('Paris', 'France'); // Paris is in France
describe_city('Tokyo'); 

// // Exercise 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:

// // "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string){
    return `"${city}, ${country}"`
}

let mycities = city_country("Karachi", "Pakistan");
console.log(mycities);

console.log(city_country("Dubai", "UAE"));
console.log(city_country("Paris", "France"));
console.log(city_country("Capetwon", "South Africa"));

// // Exercise 40
// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object
// containing these two pieces of information. Use the function to make three dictionaries 
// representing different albums. Print each return value to show that Objects are storing the
// album information correctly. Add an optional parameter to make_album() that allows you to store 
// the number of tracks on an album. If the calling line includes a value for the number of tracks,
// add that value to the album’s Object. Make at least one new function call that includes the number 
// of tracks on an album.

function make_album(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}

let album1 = make_album("Ali", "Rang-e-Mohabat");
let album2 = make_album("Madad", "Roshan Andhera");
let album3 = make_album("Ayaz", "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);


function make_album2(artistName: string, albumTitle: string, numberOfTrakers?: number){
    return {artistName, albumTitle, numberOfTrakers}
}

let album4 = make_album2("Atif Aslam", "Barashain", 30);
let album5 = make_album2("Sahui Ali Baggah", "Mumkin to nahi", 44);
let album6 = make_album2("Arijit Singh", "Hamari Adhuri Kahani", 33);

console.log(album4);
console.log(album5);
console.log(album6);

// // Exercise 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

let magicians_name : string[] = ["john", "chiris", "brad"] ;

function show_magician(magicians: string[]){
    magicians.forEach(magicians => {
          console.log(magicians);
    });
}

show_magician(magicians_name)

console.log("Exercise 42") 
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.

let magicians1: string[] = ["john", "chiris", "brad"] ;

function make_greats(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = `The Great ${magicians[i]}`;
    }
}

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

make_greats(magicians1);
show_magicians(magicians1);

// // Exercise 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
//  the array of magicians’ names. Because the original array will be unchanged, return the new array and 
//  store it in a separate array. Call show_magicians() with each array to show that you have one array of 
//  the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["John", "Chris", "Brad"];

function make_great(originalMagicians: string[]): string[] {

    let modifiedMagicians: string[] = [];

    for (let magician of originalMagicians) {
        modifiedMagicians.push(`The Great ${magician}`);
    }
    
    return modifiedMagicians;
}
function show_magicians1(magicianNames: string[]) {
    for (let magician1 of magicianNames) {
        console.log(magician1);
    }
}
let greatMagicians = make_great(magicians.slice()); 

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nMagicians with 'The Great' added:");
show_magicians(greatMagicians);

// // Exercise 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call 
// provides, and it should print a summary of the sandwich that is being ordered. Call the 
// function three times, using a different number of arguments each time.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(',')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato", "cucumber");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

// // Exercise 45 
// Cars: Write a function that stores information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, modelName: string, ...additionalInfo: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    additionalInfo.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2020]);
console.log(myCar);


console.log("Allhamdullilah 45 Questions Compelete");













