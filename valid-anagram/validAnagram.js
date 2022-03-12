// Solution 1 - Character Map Comparison
// step 1: remove ant non-alphabet chracter and convert both strings to lowercase
// step 2: define a function to create a character map
// step 3: loop through each character in charMap1,
// and check if it exists in charMap2 with the same value
// if it does not, return false; else return true; 

let isAnagram = (string1, string2) => {
    string1 = string1.replace(/[^\w]/g, "").toLowerCase();
    string2 = string2.replace(/[^/w]/g, "").toLowerCase();
    
    let charMap1 = getCharMap(string1);
    let charMap2 = getCharMap(string2);

    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false
        }
    }
    return true;
};

function getCharMap(string){
    // define an empty object to hold key-value pairs
    // the object is going to be like this: {"a": 1}
    let charMap = {};

    // loop through each character in the given string;
    // if the character already exists, increase the value
    // else add the character to the charMap with a value of 1  
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

// replace(regexp, newSubstr)
