//Entry Point
function GetValues() {
  //Get the input string
  let inputString = document.getElementById('userString').value;

  DisplayResults(inputString,CheckForPalindrome(inputString));
}

//Logic Function
function CheckForPalindrome(stringToCheck) {
  //Remove any character thats not a letter or number regardless of case.
  let cleanedString = stringToCheck.replace(/[^a-z0-9]/gi, '').toLowerCase();

  //Iterate from outside to inside to see if input is palindrome and return false if not.
  for(let i = 0; i<=(cleanedString.length/2);i++){
    if(cleanedString[i] != cleanedString[cleanedString.length-i-1]){
      //Not a palindrome
      return false;
    }    
  }
  //If we make it through the check, the word is a palindrome so we return true
  return true;
}

//View Function
function DisplayResults(inputString, result) {
  let alertElement = document.getElementById('alert');
  let alertHeading = document.getElementById('alertHeading');
  let results = document.getElementById('results');
  let inputReversed = inputString.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse().join('');

  if (result) {
    alertElement.classList.replace('alert-danger', 'alert-success');
    alertHeading.textContent = 'Well Done!You entered a Palindrome';
    results.textContent = `Your phrase reversed is: ${inputReversed}`;
    alertElement.classList.remove('invisible');
  }
  else {
    alertElement.classList.replace('alert-success', 'alert-danger');
    alertHeading.textContent = 'Sorry, you did not enter a Palindrome!';
    results.textContent = `Your phrase reversed is: ${inputReversed}`;
    alertElement.classList.remove('invisible');
  }
}