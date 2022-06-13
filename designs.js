/* eslint-env es6 */

/* eslint-disable */

 

// Select color input

let inputColor = document.getElementById('colorPicker');

 

// Select size input

let inputHeight = document.getElementById('inputHeight');

let inputWidth = document.getElementById('inputWidth');

 

//declaring other vars

const sizePicker = document.getElementById('sizePicker');

const pixelCanvas = document.getElementById('pixelCanvas');

 

 

 

function makeGrid(e) {

    // remove the submit buttons default activity

    e.preventDefault();

 

 

    // reset table

    pixelCanvas.innerHTML = '';

 

    // declare temporary row and column variables

    let tr;

    let td;

 

    //nested for loop, creating a row in the table, then all the column for that row

    for (let i = 1; i <= inputHeight.value; i++) {

 

        //creating the row

        tr = document.createElement('tr');

 

        //creating all the columns for the row and appending them to the row

        for (let j = 1; j <= inputWidth.value; j++) {

            td = document.createElement('td');

 

            //setting up an event listener on each data cell

            td.addEventListener("click", function(changeColor) {

                changeColor.target.style.backgroundColor = inputColor.value;

            });

           

            //appending the child

            tr.appendChild(td);

        }

 

        //appending the row to the table

        pixelCanvas.appendChild(tr);

 

    }

 

}

 

//when sizePicker submit buttin is clicked, make grid function executes

sizePicker.addEventListener('submit', makeGrid)