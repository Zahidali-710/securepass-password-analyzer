console.log("attack simulator loaded");

function getCrackTime(password, entropy) {
  if (isCommonPassword(password)) {
    return "Could be guessed within seconds.";
  }

  if (entropy < 40) {
    return "Could be guessed within minutes.";
  }

  if (entropy < 55) {
    return "May take several days to crack.";
  }

  if (entropy < 70) {
    return "May take several months to crack.";
  }

  return "May take several years to crack.";
}

function renderAttackSimulator(password, entropy) {
  const attackResults =
    document.getElementById("attack-results");

  if (!attackResults) {
    return;
  }

  let dictionaryMessage =
    "This password does not appear in our common password list.";

  if (isCommonPassword(password)) {
    dictionaryMessage =
      "This password could be guessed almost instantly because it is commonly used.";
  }

  const bruteForceMessage =
    getCrackTime(password, entropy);

  attackResults.innerHTML =
    "<div class='attack-card'>" +
      "<h3>Dictionary Attack</h3>" +
      "<p>" + dictionaryMessage + "</p>" +
    "</div>" +

    "<div class='attack-card'>" +
      "<h3>Brute Force Attack</h3>" +
      "<p>" + bruteForceMessage + "</p>" +
    "</div>" +

    "<div class='attack-card'>" +
      "<h3>Credential Stuffing</h3>" +
      "<p>If this password is reused on other websites, attackers can automatically try it on thousands of accounts.</p>" +
    "</div>";
}