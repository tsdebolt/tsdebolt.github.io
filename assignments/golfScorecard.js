{let elem = []; 
// assign the entire table row for all holes to a variable, elem 

for (let i = 1; i < 19; i++){
  let s = i.toString();
    elem[i] = document.getElementById(s);
}

// assign a function to all +, -, and clear buttons
for (let i = 1; i < 19; i++) {
 
  elem[i].children[4].children[0].onclick = () =>                  {add1(elem[i]);};
  
  elem[i].children[4].children[1].onclick = () =>                   {sub1(elem[i]);};
  
  elem[i].children[4].children[2].onclick = () =>                   {clr1(elem[i]);};
}


// create an "add1" function ----------------
let add1 = (elem) => {
  
  if (elem.children[2].innerHTML == "-"){
    elem.children[3].innerHTML = 1 - parseInt(elem.children[1].innerHTML);
  totals();
  }
  
  if(elem.children[2].innerHTML == "-"){
    elem.children[2].innerHTML = "1";
    totals();
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    if(currentScore != elem.children[1].innerHTML * 2){
    elem.children[2].innerHTML = currentScore + 1;
    totals();
    }
     
    elem.children[3].innerHTML =   parseInt(elem.children[2].innerHTML) -parseInt(elem.children[1].innerHTML)
  }
}


// create a "sub1" function ---------------
let sub1 = (elem) => {
  
  if (elem.children[2].innerHTML == "-"){
    elem.children[3].innerHTML = 1 - parseInt(elem.children[1].innerHTML);
  totals();
  }
  
  if(elem.children[2].innerHTML == "-"){ 
    elem.children[2].innerHTML = "1";
   totals(); 
  }
  
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    if(currentScore != 1){
    elem.children[2].innerHTML = currentScore - 1;
    totals();
    } 
    
    elem.children[3].innerHTML = parseInt(elem.children[2].innerHTML) -parseInt(elem.children[1].innerHTML)
  }
}


// create a "clr1" function ---------------
let clr1 = (elem) => {
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
  totals();
}


// create a "totals" function ---------------
let totals = () => {
  let pCount = 0;  
  let sCount = 0;
  let oCount = 0;
  for (let i = 1; i < 19; i++){
    if (elem[i].children[2].innerHTML !== "-"){
    pCount += parseInt(elem[i].children[1].innerHTML);
    sCount += parseInt(elem[i].children[2].innerHTML);
    oCount += parseInt(elem[i].children[3].innerHTML);
    }
  }
  
  oCount = sCount - pCount;
  document.getElementById("parTotal").innerHTML = pCount;
  document.getElementById("scoreTotal").innerHTML = sCount;
  document.getElementById("overTotal").innerHTML = oCount;
}
}
