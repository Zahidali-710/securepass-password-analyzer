const passwordInput = document.getElementById("password-input");
const togglePasswordButton = document.getElementById("toggle-password");
const themeToggleButton = document.getElementById("theme-toggle");

const scoreElement = document.getElementById("score");
const strengthLabel = document.getElementById("strength-label");
const strengthMeter = document.getElementById("strength-meter");

const recommendationsList =
  document.getElementById("recommendations");

const lengthRule =
  document.getElementById("length-rule");

const uppercaseRule =
  document.getElementById("uppercase-rule");

const lowercaseRule =
  document.getElementById("lowercase-rule");

const numberRule =
  document.getElementById("number-rule");

const specialRule =
  document.getElementById("special-rule");

function updateRule(element, isValid, text) {
  if (isValid) {
    element.textContent = "✅ " + text;
  } else {
    element.textContent = "❌ " + text;
  }
}

function updateStrengthMeter(score) {
  strengthMeter.style.width = score + "%";

  if (score <= 20) {
    strengthMeter.style.background = "#ef4444";
  } else if (score <= 40) {
    strengthMeter.style.background = "#f97316";
  } else if (score <= 60) {
    strengthMeter.style.background = "#eab308";
  } else if (score <= 80) {
    strengthMeter.style.background = "#22c55e";
  } else {
    strengthMeter.style.background = "#15803d";
  }
}

function updateRules(password) {
  updateRule(
    lengthRule,
    hasGoodLength(password),
    "At least 12 characters"
  );

  updateRule(
    uppercaseRule,
    hasUppercase(password),
    "Contains uppercase letters"
  );

  updateRule(
    lowercaseRule,
    hasLowercase(password),
    "Contains lowercase letters"
  );

  updateRule(
    numberRule,
    hasNumbers(password),
    "Contains numbers"
  );

  updateRule(
    specialRule,
    hasSpecialCharacters(password),
    "Contains special characters"
  );
}

function updateRecommendations(password) {
  const recommendations =
    getRecommendations(password);

  recommendationsList.innerHTML = "";

  if (recommendations.length === 0) {
    recommendationsList.innerHTML =
      "<li>✅ Excellent password. No recommendations.</li>";

    return;
  }

  recommendations.forEach(function (tip) {
    const item =
      document.createElement("li");

    item.textContent = "• " + tip;

    recommendationsList.appendChild(item);
  });
}

function analyzePassword() {
  const password =
    passwordInput.value.trim();

  const score =
    calculateScore(password);

  const strength =
    getStrength(score);

  const entropy =
    calculateEntropy(password);

  scoreElement.textContent =
    score;

  strengthLabel.textContent = strength;

  if (score <= 20) {
    strengthLabel.style.color = "#ef4444";
  } else if (score <= 40) {
  strengthLabel.style.color = "#f97316";
  } else if (score <= 60) {
    strengthLabel.style.color = "#eab308";
  } else if (score <= 80) {
    strengthLabel.style.color = "#22c55e";
  } else {
    strengthLabel.style.color = "#15803d";
  }

  updateStrengthMeter(score);
  updateRules(password);
  updateRecommendations(password);
  renderAttackSimulator(
    password,
    entropy
  );
}

function togglePasswordVisibility() {
  if (
    passwordInput.type === "password"
  ) {
    passwordInput.type = "text";
    togglePasswordButton.textContent =
      "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordButton.textContent =
      "Show";
  }
}

function toggleTheme() {
  document.body.classList.toggle(
    "dark"
  );
}

passwordInput.addEventListener(
  "input",
  analyzePassword
);

togglePasswordButton.addEventListener(
  "click",
  togglePasswordVisibility
);

themeToggleButton.addEventListener(
  "click",
  toggleTheme
);

analyzePassword();














// const passwordInput = document.getElementById("password-input");
// const togglePasswordButton = document.getElementById("toggle-password");
// const themeToggleButton = document.getElementById("theme-toggle");

// const scoreElement = document.getElementById("score");
// const strengthLabel = document.getElementById("strength-label");
// const strengthMeter = document.getElementById("strength-meter");

// const recommendationsList =
// document.getElementById("recommendations");

// const lengthRule =
// document.getElementById("length-rule");

// const uppercaseRule =
// document.getElementById("uppercase-rule");

// const lowercaseRule =
// document.getElementById("lowercase-rule");

// const numberRule =
// document.getElementById("number-rule");

// const specialRule =
// document.getElementById("special-rule");

// function updateRule(element, isValid, text) {
// if (isValid) {
// element.textContent = "✅ " + text;
// } else {
// element.textContent = "❌ " + text;
// }
// }

// function updateStrengthMeter(score) {
// strengthMeter.style.width = score + "%";

// if (score <= 20) {
// strengthMeter.style.background = "#ef4444";
// } else if (score <= 40) {
// strengthMeter.style.background = "#f97316";
// } else if (score <= 60) {
// strengthMeter.style.background = "#eab308";
// } else if (score <= 80) {
// strengthMeter.style.background = "#22c55e";
// } else {
// strengthMeter.style.background = "#15803d";
// }
// }

// function updateRules(password) {
// updateRule(
// lengthRule,
// hasGoodLength(password),
// "At least 12 characters"
// );

// updateRule(
// uppercaseRule,
// hasUppercase(password),
// "Contains uppercase letters"
// );

// updateRule(
// lowercaseRule,
// hasLowercase(password),
// "Contains lowercase letters"
// );

// updateRule(
// numberRule,
// hasNumbers(password),
// "Contains numbers"
// );

// updateRule(
// specialRule,
// hasSpecialCharacters(password),
// "Contains special characters"
// );
// }

// function updateRecommendations(password) {
// const recommendations =
// getRecommendations(password);

// recommendationsList.innerHTML = "";

// if (password === "") {
// return;
// }

// if (recommendations.length === 0) {
// recommendationsList.innerHTML =
// "<li>✅ Excellent password. No recommendations.</li>";

// ```
// return;
// ```

// }

// recommendations.forEach(function (tip) {
// const item =
// document.createElement("li");

// ```
// item.textContent =
//   "• " + tip;

// recommendationsList.appendChild(item);
// ```

// });
// }

// function updateStrengthLabel(score, strength) {
// strengthLabel.textContent = strength;

// if (score <= 20) {
// strengthLabel.style.color = "#ef4444";
// } else if (score <= 40) {
// strengthLabel.style.color = "#f97316";
// } else if (score <= 60) {
// strengthLabel.style.color = "#eab308";
// } else if (score <= 80) {
// strengthLabel.style.color = "#22c55e";
// } else {
// strengthLabel.style.color = "#15803d";
// }
// }

// function analyzePassword() {
// const password =
// passwordInput.value.trim();

// const score =
// calculateScore(password);

// const strength =
// getStrength(score);

// const entropy =
// calculateEntropy(password);

// scoreElement.textContent =
// score;

// updateStrengthLabel(
// score,
// strength
// );

// updateStrengthMeter(score);
// updateRules(password);
// updateRecommendations(password);

// renderAttackSimulator(
// password,
// entropy
// );
// }

// function togglePasswordVisibility() {
// if (passwordInput.type === "password") {
// passwordInput.type = "text";
// togglePasswordButton.textContent =
// "Hide";
// } else {
// passwordInput.type = "password";
// togglePasswordButton.textContent =
// "Show";
// }
// }

// function toggleTheme() {
// document.body.classList.toggle(
// "dark"
// );
// }

// passwordInput.addEventListener(
// "input",
// analyzePassword
// );

// togglePasswordButton.addEventListener(
// "click",
// togglePasswordVisibility
// );

// themeToggleButton.addEventListener(
// "click",
// toggleTheme
// );

// analyzePassword();
