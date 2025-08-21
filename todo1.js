// Make a button that changes the page’s background color when clicked.Start with an array of at least five colors.Each time the button is pressed, pick the next color.When you reach the last color, start over.

// get the button
const btn = document.querySelector(".gate");
const body = document.querySelector("body");

// an array of colors
const arr = ["red", "blue", "green", "purple", "orange"];

// keep track of current index
let index = 0;

// function to change background color
function click_gate() {
    body.style.backgroundColor = arr[index]; // set color
    index++; // go to next color
    if (index >= arr.length) {
        index = 0; // reset to start
    }
}

// add event listener
btn.addEventListener("click", click_gate);




// an array const arr = [];
// //function function click_gate(e)
//  { // const btn = btn.e.target() style.body.backgroundColor = red; }
//  btn.addEventListener("click", click_gate)










// //

// const div = document.querySelector('#firstd');
// const input = document.querySelector('.input1');   // input box
// const ul = document.querySelector('.ul1');         // the ul
// //
// const addBtn = document.querySelector('.ok'); // select the button



// function add() {
//     const todoText = input.value.trim();
//     if (todoText === '') return;

//     const li = document.createElement('li');
//     li.textContent = todoText;

//     ul.appendChild(li);

//     input.value = '';

// }


// addBtn.addEventListener('click', add);
