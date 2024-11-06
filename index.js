document.querySelector('button').onclick =()=>{

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwzyz";
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numberChars = "0123456789";
  const symbolChars = '`~!@#$%^&*()_-+=|}][{:;"/?.>,<';

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : ""; 
  allowedChars += includeSymbols ? symbolChars : ""; 

  for(let i =0; i < length; i++){

    const randomIndex =Math.floor(Math.random()*allowedChars.length)
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 16;
const includeLowercase = true;
const includeUppercase = true;
const includeSymbols = true;
const includeNumbers = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeSymbols,
  includeNumbers
);

document.getElementById('re').innerText=password

console.log(`generated : ${password}`);}
