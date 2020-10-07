let elem = [];
// assign the entire table row for all holes to a variable, elem
for (let i = 1; i < 19; i++){
  let s = i.toString();
    elem[i]
      = document.getElementById(s);
}

// assign a function to all + button
for (let i = 1; i < 19; i++){
elem[i].children[4].children[0].onclick 
  = () => {add1(elem[i]);};
}

// create an "add1" function
add1 = (elem) => {
  if (elem.children[2].innerHTML == "-")
    elem.children[3].innerHTML = 1 - parseInt(elem.children[1].innerHTML);
  
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    if(currentScore != elem.children[1].innerHTML * 2)
    elem.children[2].innerHTML = currentScore + 1;
    
    elem.children[3].innerHTML =   parseInt(elem.children[2].innerHTML) - parseInt(elem.children[1].innerHTML)
  }
}

// assign a function to all - button
for (let i = 1; i < 19; i++){
elem[i].children[4].children[1].onclick 
  = () => {sub1(elem[i]);};
}

// create a "sub1" function
sub1 = (elem) => {
  if (elem.children[2].innerHTML == "-")
    elem.children[3].innerHTML = 1 - parseInt(elem.children[1].innerHTML);
  
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    if(currentScore != 1)
    elem.children[2].innerHTML = currentScore - 1;
    
    elem.children[3].innerHTML = parseInt(elem.children[2].innerHTML) - parseInt(elem.children[1].innerHTML)
  }
}
/* your mission: 

4. Make a table row's background color yellow if and only if that table row has a nonzero score.
5. Make the HTML table row with id="totals" display appropriate totals. Totals should be computed only for holes that have yellow-highlighted nonzero scores. Like the yellow-highlighted table rows above, the "totals" table row background color must be yellow if and only if it has a nonzero score. 
6. Add to the Action column a new button, C, which clears the current score for a given hole, and re-sets the table row background color to default.
7. Replace HTML table row code with JavaScript code that appends table rows. That is, delete the HTML elements with ID's 1 through 18, and write a function that loops 18 times, appending the appropriate DOM elements with ID's 1 through 18.  
8. Add a "RESET" button which clears all user-entered data. Use addEventListener method to add functionality to the button. See: https://www.w3schools.com/js/js_htmldom_eventlistener.asp. 
9. Add an "ABOUT" button which displays the message, "Golf Scorecard 1.0. All rights reserved."  Use an arrow function to add the "ABOUT" button to the DOM. See: https://www.w3schools.com/Js/js_arrow_function.asp.
10. Add a "FONT" button which toggles the font size of the entire app, from/to smaller to/from larger.
*. Advanced (optional): put circles around scores that are birdies, and squares around scores that are bogeys!
*/
