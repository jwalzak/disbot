// A test file to make sure my code is good instead of repeatedly connecting the bot to discord over and over again.
const jokeList = require('./joke_list.json');
const joke = jokeList.joke_list;
const randomNum = joke[Math.floor(joke.length * Math.random())];
console.log(randomNum);
// console.dir(joke);