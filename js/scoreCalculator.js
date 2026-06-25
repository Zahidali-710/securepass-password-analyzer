function calculateScore(password) {
  let score = 0;

  if (password.length >= 8) {
    score += 20;
  }

  if (password.length >= 12) {
    score += 15;
  }

  if (hasUppercase(password)) {
    score += 15;
  }

  if (hasLowercase(password)) {
    score += 15;
  }

  if (hasNumbers(password)) {
    score += 15;
  }

  if (hasSpecialCharacters(password)) {
    score += 20;
  }

  if (hasRepeatedCharacters(password)) {
    score -= 10;
  }

  if (hasSequentialPattern(password)) {
    score -= 15;
  }

  if (isCommonPassword(password)) {
    score -= 30;
  }

  return Math.max(0, Math.min(score, 100));
}

function getStrength(score) {
  if (score <= 20) {
    return "Very Weak";
  }

  if (score <= 40) {
    return "Weak";
  }

  if (score <= 60) {
    return "Medium";
  }

  if (score <= 80) {
    return "Strong";
  }

  return "Very Strong";
}