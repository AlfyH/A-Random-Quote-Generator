/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
const quotes = [
  {
    source: "Ron Hall",
    quote: "Together we can change the world, just one random act of kindness at a time.",
    citation: "Facebook",
    year: "1989"
  },
  {
    source: "Princess Diana",
    quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    citation: "Twitter",
    year: "1989"
  },
  {
    source: "Helen Mirren",
    quote: "I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile.",
    citation: "Instagram",
    year: "1989"
  }
];

getRandomQuote = () => {
  let randomNumber = Math.round(Math.random() * (quotes.length-1));
  let randomQuote = '<p class="quote"> ' + quotes[randomNumber].quote + ' </p>';
  randomQuote += '<p class="source"> ' + quotes[randomNumber].source;
  randomQuote += '<span class="citation"> ' + quotes[randomNumber].citation + ' </span>';
  randomQuote += '<span class="year"> ' + quotes[randomNumber].year + ' </span></p>';
  let element = document.getElementById("quoteBox").innerHTML = randomQuote;
  return randomQuote;
}

getRandomQuote();
document.getElementById('loadQuote').addEventListener("click", getRandomQuote, true);
