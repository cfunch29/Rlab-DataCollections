// Part 1: Refactor Old Code 
// Inserted code from Looping Code Part 3

let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let i = 0
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0;

// comma - separate cells
// \n - separate row/line
// char - everything else - bottom 

// create variables for new row and new cells
for (let i = 0; i < str.length; i++) {

    // saving current char at the current index into a variable for ease
    let current = str[i];

    if (current == ",") {
        // move to the next cell
        commas++;
    }
    else if (current == "\n") {
        // Print all cells
        console.log(cell1, cell2, cell3, cell4);
        commas = 0;
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
    } else {
        if (commas == 0) {
            cell1 += current;
        } else if (commas == 1) {
            cell2 += current;
        } else if (commas == 2) {
            cell3 += current;
        } else {
            cell4 += current;
        }
    }
    if (i + 1 == str.length) {
    }
}
console.log(cell1, cell2, cell3, cell4)


console.log("part2")

// store each row as an array
let newArray = []
commas = 0;
cell1 = "";
cell2 = "";
cell3 = "";
cell4 = "";
// let rowArray = [cell1, cell2, cell3, cell4];
// store row content as a string 

// create 2D array  
// newArray.push();
// multidimensional array: 

// loop for 2D array 
for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current == ",") {
        // move to the next cell
        commas++;
    }
    else if (current == "\n") {
        // Print all cells
        let rowArray = [cell1, cell2, cell3, cell4];
        newArray.push(rowArray);
        // console.log(cell1, cell2, cell3, cell4);
        commas = 0;
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";

    } else {
        if (commas == 0) {
            cell1 += current;
        } else if (commas == 1) {
            cell2 += current;
        } else if (commas == 2) {
            cell3 += current;
        } else {
            cell4 += current;
        }
    }
    if (i + 1 == str.length) {
        let rowArray = [cell1, cell2, cell3, cell4];
        newArray.push(rowArray);
    }
}
console.log(newArray)
console.log("part3")

// let header = newArray[0];
// let obj = {}
// // iterate thru to store objects into the new array with the newly declared header
// for (r = 0; r < newArray.length; r++) {
//     let row = newArray[r];
//     let obj = {};

//     // create header row
//     for (let h = 0; h < header.length; h++) {
//         obj[header[h]] == row[h];
//     }
//     newArray.push(obj);
// }
// console.log(newArray)


// let obj = []



// keep last console outside of the for loop!!! 

