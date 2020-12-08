//SELECTORS
const charInput = document.querySelector("#string");
const generateBtn = document.querySelector("#generate-btn");
const displayContainer = document.querySelector("#display-container");
const displayPassword = document.querySelector("#display-password");
const copyBtn = document.querySelector("#copy-btn");

//EVENTHANDLER 
generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", copyPassword);


//GENERATE PASSWORD
function createPassword() {
  event.preventDefault();
  
  if(charInput.value < 8) {
    alert("Minimum 8 characters")
  } else if(charInput.value > 20) {
    alert("Maximum 20 characters")
  } else {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-/=?@_~";
    let password = "";
      for (let i = 0; i < charInput.value; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      displayPassword.value = password;

    charInput.value = "";
  }
}

//COPY PASSWORD
function copyPassword() {
  displayPassword.select();
  displayPassword.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert(`${displayPassword.value} copied!`);
  displayPassword.value = "";
}



