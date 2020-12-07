//SELECTORS
const charInput = document.querySelector("#string");
const generateBtn = document.querySelector("#generate-btn");
const displayContainer = document.querySelector("#display-container");

//EVENTHANDLER 
generateBtn.addEventListener("click", createPassword);
displayContainer.addEventListener("click", copyPassword);


//GENERATE PASSWORD
function createPassword() {
  event.preventDefault();
  
  if(charInput.value < 8) {
    alert("Minimum 8 characters")
  } else if(charInput.value > 30) {
    alert("Maximum 30 characters")
  } else {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+-/=?@_~";
    let password = "";
      for (let i = 0; i < charInput.value; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    createEl(password);
    charInput.value = "";
  }
}


function createEl(password) {
  const displayContainer = document.querySelector("#display-container");

  //DELETE EXISTING CHILDREN
  while(displayContainer.hasChildNodes()) {
    displayContainer.removeChild(displayContainer.firstChild);
  }

  //CREATE PARAGRAPH AND BUTTON
    const para = document.createElement("p");
    para.innerHTML = "Your new password"
    para.className = "para-text"
    displayContainer.appendChild(para);

    const displayPassword = document.createElement("p");
    displayPassword.innerHTML = `${password}`;
    displayPassword.className = "display-password"
    displayContainer.appendChild(displayPassword);

    const copyBtn = document.createElement("button");
    copyBtn.innerHTML = '<i class="far fa-copy"></i>';
    copyBtn.className = "copy-btn";
    displayContainer.appendChild(copyBtn);
}

function copyPassword(e, password) {
  const item = e.target;
  let newPassword = password;
    if(item.classList[0] === "copy-btn"){
      console.log(newPassword);
      /*displayPassword.select();
      displayPassword.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("copied");*/
    }
}
