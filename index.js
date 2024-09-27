                    //Part 1: Refactoring Old Code

// Split the CSV string by rows based on the newline character '\n'
function parseCSVToObjects(csvString) {
const rows = csvString.split('\n');
  
// Get the header row (first row) to use as keys for objects
const headers = rows[0].split(',');

// Initialize an empty array to store the objects representing each row
const result = [];

// Loop through the remaining rows (skipping the first row with headers)
for (let i = 1; i < rows.length; i++) {
  const cells = rows[i].split(','); // Split each row into cells
  const obj = {}; // Create an empty object for the current row

  // Map each cell to the corresponding header
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = cells[j];
  }

  // Push the object representing the row into the result array
  result.push(obj);
}

// Log the array of objects
console.log(result);
return result;
}
// Test with the provided CSV data
let csv1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
parseCSVToObjects(csv1);

let csv2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
parseCSVToObjects(csv2);



                                //Part 2: Expanding Functionality
function parseCSV(csvString) {
    // Split the CSV string into rows
    const rows = csvString.split('\n');
  
    // Initialize the two-dimensional array with the header row
    const resultArray = [];
  
    // Loop through each row
    for (let i = 0; i < rows.length; i++) {
      // Split the row into columns based on the comma delimiter
      const columns = rows[i].split(',');
  
      // Push the columns array into the result array
      resultArray.push(columns);
    }
  
    // Cache the result for later use
    const columnCount = resultArray[0].length; // Store the number of columns
    console.log("Number of columns:", columnCount);
  
    // Log the two-dimensional array
    console.log("Two-Dimensional Array:", resultArray);
    
    return resultArray; // Return the two-dimensional array
  }
  
  // Original CSV example data
  const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  
  // Call the function to parse the CSV
  const parsedData = parseCSV(csvData);
  


                                                         //Part 3: Transforming Data

function parseCSVToLowerCaseObjects(csvString) {
    const rows = csvString.split('\n');
    const headers = rows[0].split(',').map(header => header.trim().toLowerCase()); 
    const result = [];
    for (let i = 1; i < rows.length; i++) {
      
    const cells = rows[i].split(',').map(cell => cell.trim()); 
    const obj = {}; 
    for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = cells[j]; 
    }
      result.push(obj);
    }
    console.log(result);
    return result;
  }
// Test with the provided CSV data
  let csv1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  parseCSVToLowerCaseObjects(csv1);
  
  let csv2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
  parseCSVToLowerCaseObjects(csv2);

  
  
  
  
  
                                      //Part 4: Sorting and Manipulating Data

  function manipulateData() {

    let data = [
      { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
      { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
      { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
      { id: '98', name: 'Bill', occupation: "Doctor’s Assistant", age: '26' }
    ];
  
    data.pop(); 
    data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
    data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
    console.log(data);
  
    // Calculate the average age
    let totalAge = 0;
    let length = data.length;
  
    for (let i = 0; i < length; i++) {
      totalAge += parseInt(data[i].age); 
    }
  
    let averageAge = totalAge / length; // Calculate average age
    console.log("Average Age:", averageAge);
  }
  manipulateData();