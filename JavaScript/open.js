const jsonData = require('./data/palindrome.json')

jsonData.words.forEach(word => {
    let state = "is"
    if(!isPalindrome(word)){
        state = state + " not"
    }

    console.log (`${word} ${state} a palindrome`)
}

)

function isPalindrome(word){
    let left = 0;
    let right = word.length - 1
    while (left < right){

        if(word[left] !== word[right]){
            return false
        }

        left++
        right--
    }
    return true
}
