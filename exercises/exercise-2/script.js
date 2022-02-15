/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
let counter = 0;
let body = document.querySelector("body");
setInterval(() => {
  body.style.background = colorArray[counter];
  counter++;
  counter = counter % colorArray.length;
}, 1000);
let colorArray = ["red", "green", "blue", "pink"];
