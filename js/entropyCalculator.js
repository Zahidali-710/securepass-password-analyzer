function calculateEntropy(password) {
if (!password) {
return 0;
}

let characterSetSize = 0;

if (hasLowercase(password)) {
characterSetSize += 26;
}

if (hasUppercase(password)) {
characterSetSize += 26;
}

if (hasNumbers(password)) {
characterSetSize += 10;
}

if (hasSpecialCharacters(password)) {
characterSetSize += 32;
}

return Math.round(
password.length * Math.log2(characterSetSize)
);
}
