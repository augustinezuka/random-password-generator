document.querySelector('#generate-button').onclick = () => {
  function generatePassword(
    length,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  ) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numberChars = "0123456789";
    const symbolChars = '`~!@#$%^&*()_-+=|}][{:;"/?.>,<';

    let allowedChars = "";
    let password = "";

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
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
    includeNumbers,
    includeSymbols
  );

  document.getElementById('re').innerText = password;

  console.log(`Generated Password: ${password}`);
};


document.querySelector('#copy-button').onclick = () => {
  const passwordText = document.getElementById('re').innerText;

 
  navigator.clipboard.writeText(passwordText).then(() => {
    alert("Password copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy password: ", err);
  });
};
