function getRecommendations(password) {
const tips = [];

if (password.length < 12) {
tips.push("Use at least 12 characters.");
}

if (!hasUppercase(password)) {
tips.push("Add uppercase letters.");
}

if (!hasLowercase(password)) {
tips.push("Add lowercase letters.");
}

if (!hasNumbers(password)) {
tips.push("Add numbers.");
}

if (!hasSpecialCharacters(password)) {
tips.push("Add special characters.");
}

if (hasSequentialPattern(password)) {
tips.push("Avoid predictable sequences like 12345 or abcde.");
}

if (hasRepeatedCharacters(password)) {
tips.push("Avoid repeated characters.");
}

if (isCommonPassword(password)) {
tips.push("Avoid commonly used passwords.");
}

return tips;
}
