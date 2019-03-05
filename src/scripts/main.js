console.log("Wow you are v cool")

// COOKIES:

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]


// for (let y = 1; y < cookies.length; y++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// CONJUNCTION FUNCTION:

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`;
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

// MOD SQUAD:


// const modSquad = {
//     members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//     series: {
//         start: "1968",
//         end: "1973"
//     }
// }


// // modSquad.members.forEach = (member) => {
// //     HTMLRepresentation += `<div>${member}</div>`
// // }
// let HTMLRepresentation = `<h1>The Mod Squad</h1>`
// for (let i = 0; i < modSquad.members.length; i++) {  
//     HTMLRepresentation += `<div>${modSquad.members[i]}</div>`
// }


// document.querySelector(".show-info").innerHTML = HTMLRepresentation

// SIMON SAYS
const locations = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [3, 3]
]
let invalidList = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    if (currentLocation[0] > 2) {
        invalidLocation = true
        invalidList += 1
    }
}
console.log(`There were ${invalidList} invalid locations`)
/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/


// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }
