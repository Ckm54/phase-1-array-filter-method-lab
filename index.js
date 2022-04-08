// Code your solution here

function findMatching(arr, string) {
   let drivers = arr.filter(value => value.toLowerCase() === string.toLowerCase())
   return drivers
}


function fuzzyMatch(arr, letters) {
    let drivers = arr.filter(value => value.startsWith(letters));
    return drivers;
}

function matchName(obj, name) {
    let matchingObject = obj.filter(item => item.name === name);
    return matchingObject;
}