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

// PART 2
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


// // PART 3
// console.log("part3")

// let header = ["id", "name", "occupation", "age"]


// // iterate thru to store objects into the new array with the newly declared header
// for (let r = 0; r < newArray.length; r++) {
//     let obj = {};

//     // // create header row
//     for (let h = 0; h < header[r].length; h++) {
       
//     }
//    newArray.push(obj);
// }
// console.log(newArray)


// let obj = []



// keep last console outside of the for loop!!! 

// PART 4
console.log("Part4")
// use pop to remove last element

let part3Sol = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];

lastArray = part3Sol.pop();

console.log(part3Sol)

//  use splice to add object at index

let newestArray = part3Sol.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

console.log(part3Sol)

part3Sol.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(part3Sol)

let sum = 0
let objCount = 0
let avg = 0
// need to iterate thru array to find each object's age and find the average of all object's ages
for(let i = 0; i<part3Sol.length; i++){
    sum += part3Sol[i];
    let avg = sum / part3Sol.length;
}

console.log("The total sum of age is: " + sum);
console.log("The average age is: " + avg);





// PART 5
console.log("Part5")





