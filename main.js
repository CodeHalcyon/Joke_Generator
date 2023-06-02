
if (typeof window === "object") {
  // code is running in a browser environment
  let joke = document.getElementById('joke')
  let gen = document.getElementById('gen')
}

console.log("joke genrator");

const arr = [
  "What falls, but never needs a bandage? The rain.",
  "I was going to tell you a joke about boxing but I forgot the punch line.",
  "Why did the egg hide? It was a little chicken.",
  "What did the dirt say to the rain? If you keep this up, my name will be mud!",
  "What's an egg's favorite vacation spot? New Yolk City.",
  "What kind of candy do astronauts like? Mars bars.",
  "I ate a sock yesterday. It was very time-consuming.",
  "I wanted to buy some camo pants but couldn't find any.",
  "I ordered a chicken and an egg from Amazon. I'll let you know.",
  "What month is the shortest of the year? May, it only has three letters.",
];
function generateJoke(){
  let num = Number.parseInt(10*Math.random())
  joke.innerText = arr[num]
  console.log("func executed")
}
