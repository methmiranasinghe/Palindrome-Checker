// script.js
const { jsPDF } = window.jspdf;
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

function checkPalindromes() {
  const words = [];
  for (let i = 1; i <= 5; i++) {
    const word = document.getElementById("word" + i).value;
    words.push(word);
  }

  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";

  words.forEach((word) => {
    const listItem = document.createElement("li");
    const isPalindromeText = isPalindrome(word)
      ? "a palindrome"
      : "not a palindrome";
    listItem.textContent = `${word} is ${isPalindromeText}`;
    resultList.appendChild(listItem);
  });
}

 function downloadPDF() {
   // const jsPDF = window.jsPDF.jsPDF;
   // const pdf = new jsPDF();
   const pdf = new jsPDF(); // Corrected line
   const resultList = document.getElementById("resultList");
   const resultText = Array.from(resultList.getElementsByTagName("li"))
     .map((li) => li.textContent)
     .join("\n");

   pdf.text(resultText, 10, 10);
   pdf.save("PalindromeResult.pdf");
 }

   