// stacks

// functions: push, pop, peek, length

var letters = []; //this is our stack
var word = "mohamed";
var rword = "";

// put letters of the word into the stack

for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
    
}
console.log(letters);

// pop off the stack in a reverse order

for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}
console.log(rword);

if(word === rword){
    console.log(word + " is a palindrome")
}

else{
    console.log(word + " is not a palindrome")
}

