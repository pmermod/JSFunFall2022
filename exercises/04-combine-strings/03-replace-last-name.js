let fullName = "Joe Washington"; // e.g.
let newLastName = "Fernandez"; // e.g.

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Washington";
 * let newLastName = "Fernandez";
 * The new value for "fullName" should result in "Joe Fernandez".
 */

// WRITE YOUR ANSWER BELOW THIS LINE

//My original solution  (works, but doesn't use the augmented assignment operator which it should)

/*let index = fullName.indexOf(" ");
let firstName = fullName.substring(0, index);
fullName = firstName + " " + newLastName;
console.log(fullName);*/

//per Matina in chat - solution prints JoeFernandez (no space)

//let index = fullName.indexOf(" ");
//fullName = fullName.substring(0, index);
//fullName += newLastName;
//console.log(fullName);

// My revised solution based on above

let index = fullName.indexOf(" ");
fullName = fullName.substring(0, index);
fullName += " " + newLastName; //This is same as above but adds a space
console.log(fullName);
