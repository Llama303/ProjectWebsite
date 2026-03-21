//console.log("HIiiiii");
//console.log(`i like girlss`);
//window.alert(`BOOOM!`);
//document.getElementById("we").textContent="Sup Bro";
//let age= 30;
//console.log(`Your age is ${age}`);
//console.log(typeof age);
//let price=10.99;
//console.log(`the price is $${price}`);
//let name= "Meko";
//console.log(`your name is ${name}`);

//let age1 =window.prompt("What is your age?");
//console.log(age1);

/*const down= document.getElementById("down");
const nutral= document.getElementById("nutral");
const up= document.getElementById("up");
const count= document.getElementById("count");

let counting=0;

up.onclick= function(){
   counting++;
    count.textContent=counting;
}

down.onclick= function(){
    counting--;
     count.textContent=counting;
 }
 nutral.onclick= function(){
    counting=0
     count.textContent=counting;
 }*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the button and menu elements
  const Dropdownbt = document.getElementById('Dropdownbt');
  const dropmenu = document.getElementById('dropmenu');

  // Check if elements exist
  if (Dropdownbt && dropmenu) {
    // Add a click event listener to the button
    Dropdownbt.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event from bubbling to window
      dropmenu.classList.toggle('hidden');
    });

    // Close the menu when clicking outside
    window.addEventListener('click', (event) => {
      if (!Dropdownbt.contains(event.target) && !dropmenu.contains(event.target)) {
        dropmenu.classList.add('hidden');
      }
    });
  }
});