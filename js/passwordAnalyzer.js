function hasGoodLength(password) {
  return password.length >= 12;
}

function hasUppercase(password) {
  return /[A-Z]/.test(password);
}

function hasLowercase(password) {
  return /[a-z]/.test(password);
}

function hasNumbers(password) {
  return /\d/.test(password);
}

function hasSpecialCharacters(password) {
  return /[^A-Za-z0-9]/.test(password);
}

function hasRepeatedCharacters(password) {
  return /(.)\1{2,}/.test(password);
}

function hasSequentialPattern(password) {
  const sequences = [
    "123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "qwertyuiop"
  ];

  const value = password.toLowerCase();

  return sequences.some(sequence =>
    sequence.includes(value)
  );
}

function isCommonPassword(password) {
  return commonPasswords.includes(
    password.toLowerCase()
  );
}