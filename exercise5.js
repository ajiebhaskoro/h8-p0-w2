console.log("==============formSentence==============");

var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

console.log(word+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+seventh+"\n");

console.log("==============indexAccessing==============");

var word = "wow JavaScript is so cool";
var word1 = word[0]+word[1]+word[2];
var word2 = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13];
var word3 = word[15]+word[16];
var word4 = word[18]+word[19];
var word5 = word[21]+word[22]+word[23]+word[24];

console.log("Word 1: "  +word1);
console.log("Word 2: "  +word2);
console.log("Word 3: "  +word3);
console.log("Word 4: "  +word4);
console.log("Word 5: "  +word5+"\n");

console.log("==============subString==============");

var word = "wow JavaScript is so cool";
var word1 = word.substring(0,3);
var word2 = word.substring(4,14);
var word3 = word.substring(15,17);
var word4 = word.substring(18,20);
var word5 = word.substring(21,25);

console.log("Word 1: "  +word1);
console.log("Word 2: "  +word2);
console.log("Word 3: "  +word3);
console.log("Word 4: "  +word4);
console.log("Word 5: "  +word5+"\n");

console.log("==============eachLength==============");

var word = "wow JavaScript is so cool";
var word1 = word.substring(0,3);
var word2 = word.substring(4,14);
var word3 = word.substring(15,17);
var word4 = word.substring(18,20);
var word5 = word.substring(21,25);

var word1Length = word1.length
var word2Length = word2.length
var word3Length = word3.length
var word4Length = word4.length
var word5Length = word5.length

console.log("Word 1: "  +word1+ ", with length :"+word1Length);
console.log("Word 2: "  +word2+ ", with length :"+word2Length);
console.log("Word 3: "  +word3+ ", with length :"+word3Length);
console.log("Word 4: "  +word4+ ", with length :"+word4Length);
console.log("Word 5: "  +word5+ ", with length :"+word5Length);


