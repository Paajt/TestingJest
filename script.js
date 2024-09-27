//Script goes here
// 
import { TextUpperCaseScript } from "./TextUpperCaseScript.js";

// HTML elements:
const input = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const addedText = document.querySelector('#addedText');

// Variables:
const inputList = [];

//Listener
addBtn.addEventListener(
    'click',
    function () {
        
        //Imported function:
        const inputText = TextUpperCaseScript(input.value);
                      
        inputList.push(inputText);

        // Add new html elements in ul
        const textInput = document.createElement('li');
        addedText.appendChild(textInput);

        const itemLabel = document.createElement('span');
        itemLabel.innerText = inputText;
        textInput.appendChild(itemLabel);

        input.value = '';

        console.log(inputText);
    }
);





