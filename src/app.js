/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const reloadButton = document.getElementById("reloadButton");
  const mainText = document.getElementById("main-text");

  let isContentVisible = false;
  let initialContent = mainText.innerHTML;

  reloadButton.addEventListener("click", function() {
    isContentVisible = !isContentVisible;
    if (isContentVisible) {
      mainText.innerHTML = generateDomain();
    } else {
      mainText.innerHTML = initialContent;
    }
  });
};

function generateDomain() {
  let pronouns = ["the", "our", "an"];
  let adjs = ["great", "big", "awesome"];
  let nouns = ["jogger", "racoon", "cat"];
  let domains = [".com", ".net", ".edu"];

  let generatdDomainNames = "";

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          let domainName = `${pronoun}${adj}${noun}${domain}`;
          result += domainName + "<br>";
        }
      }
    }
  }
  return generatdDomainNames;
}
