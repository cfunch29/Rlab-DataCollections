# R-Alab
## Data Collections 

### Objectives
- Use arrays to store ordered lists of data.
- Use objects to store keyed lists of data.
- Use conditional logic to process data.
- Use loops to handle repetitive tasks.
- Transform data according to specifications.

## Part 1 - Refactoring Old Code 
- Refactoring code is the process of restructuring the code without changing the original behavior. 
- Knowing what we now know about arrays and objects, how would we change the approach to this problem? 

## Part 2 - Expanding Functionality
1. Declare a variable that stores the number of columns in each row of data within the CSV
    - dynamic variable based on the first row of data (use arrays and strings)
        - arrays declared using square bracket notation "[]"
        - each row = array/container * **square bracket notation** * 
        - contents of the row = string
    - now make it 2-dimensional
        - use "push" to make the rows 2D
    - create a new variable for the 2D array 
        - call 2D array something 
    - Cache 2D array in variable for later

## Part 3 - Transforming Data 
- transform rows into objects
    - objects are keyed collections of zero or more properties 
        - most common data structure in OOP
        - declared using curly brackers "{}"
    -properties are key:value pairs * **(dictionaries)** *
        - key = string (look something up with the key)
        - value = expression (reads the value or "definition")
- for each row of data in the result array, create an object where the key of each value is the heading for that value's column (create an object = header)
    <!-- row 1 = header  -->
    - convert keys to lowercase 
    <!-- figure out how to convert to lowercase -->
- store objects in an array, in original order
    - ie: id, name, occupation, age
- do not need to create object for header row itself

<!-- iterate through the object to filter the elements/objects into the new array -->

## Part 4 - Sorting and Manipulating Data
- Use array methods to sort and manipulate the data 
    1. remove the last element from the sorted array (use pop)
    2. add object at index 1 (use splice)
    3. add object to the end of the array (use push)
    4. use the values of each object within the array and the array's length property to calculate the average age of the group using a loop 

## Part 5 - Full Circle
- Transform data back into a CSV formatted string (use nested loops, join (,) and join (\n))