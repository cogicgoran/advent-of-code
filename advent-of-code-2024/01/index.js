const fs = require('node:fs');
const filename = process.argv[2];
let input = fs.readFileSync(filename, 'utf8');
let data = input.trim().split("\n").join("   ").split("   ")
const arr1 = [];
const arr2 = [];
data.forEach((locationId, idx) => {
    if (idx % 2 == 0) {
        arr1.push(locationId)
        return
    }
    arr2.push(locationId)
})
arr1.sort((a,b) => a - b)
arr2.sort((a,b) => a - b)

let totalDistance = 0;
for (let i = 0; i < arr1.length; i++) {
    totalDistance += Math.abs(arr2[i] - arr1[i])
}
console.log('Total distance:', totalDistance)
// part two

const similarityScores = arr1.map((locationId) => {
    let matches = 0;
    arr2.forEach((cmpLocationId) => {
        if(locationId === cmpLocationId) matches++;
    })
    return matches * locationId
})

let total = 0;
similarityScores.forEach((simScore) => {total+=simScore});
console.log('Similarity score:', total);

