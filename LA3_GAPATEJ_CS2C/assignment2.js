// iterationMapping.js

const maxLimit = parseInt(prompt("Enter the Max Limit of the Loops:"));

// Initialize counters to zero
let i = 0;
let j = 0;

// Loop through the iterations
for (i = 0; i < maxLimit; i++) {
  for (j = 0; j < maxLimit; j++) {
    // Calculate the added value
    const addedValue = i + j;

    // Log the iteration points and added value
    console.log(`Loop Point: (${i}, ${j}) - Added Value: ${addedValue}`);
  }
}
 
