// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example
// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

// Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns

// int: the number of valleys traversed
// Input Format

// The first line contains an integer , the number of steps in     bccvvbv cbvcbvthe hike.
// The second line contains a single string , of  characters that describe the path.

// Constraints

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// The hiker enters and leaves one valley.

let n = 8; // Gary’s number of steps taken on his hike.
let steps = "UDDDUDUU"; // a single string showing each step (U(up) & D(down))
let steps2= "DDUUDDUDUUUD";

function countingValleys(steps, path) {
  let count = 0;
  let count2 = 0;
  let x = false;

  const arr = Array.from(path);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "U") {
      count++;
    } else if (arr[i] === "D") {
      count--;
    }
    if (count < 0) x=true;
    if (count === 0 && x) {
      count2 += 1;
      x =false;
    }
  }
  return count2;
}

console.log(countingValleys(steps2, n));
