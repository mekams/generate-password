class rootPass {                                //class created 
    generateEasy() {
    let pwd = document.getElementById('text')
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let passwordlength = 5;
    let password = ""
    for (let i = 0; i < passwordlength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1)
    }
    pwd.value = password
  }

  generateStrong() {    //random passwords
    let pwd = document.getElementById('text')
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}[];:_-<>"
    let passwordlength = 10;
    let password = ""
    for (let i = 0; i < passwordlength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1)
    }
    pwd.value = password
  }

  generateFunny() {                 //manual array of passwords
    let pwd = document.getElementById('text')
    let chars = ["Enter", "Forgotten", "Thanks", "Hacker", "Me", "Windows 11", "Kamran", "Hack Me","Mujhenahipata","facebook","whattodo"]
    let password = ""
    let randomNumber = Math.floor(Math.random() * chars.length);
    password = chars[randomNumber]
    pwd.value = password
  }

  generateSuper() {                 //random passcodes
    let pwd = document.getElementById('text')
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}[];:_-<>"
    let passwordlength = 15;
    let password = ""
    for (let i = 0; i < passwordlength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1)
    }
    pwd.value = password
  }
}


document.querySelector('.submit').addEventListener("click", () => {
// document.getElementsByClassName("submit").addEventListener("click",()=>{
  let generatepwd = new rootPass()
  let fetchInput = document.querySelector('.input').value
      let input=fetchInput.toLowerCase()

  if (input !== ("funny"||"strong"||"super"||"easy")) {
    let copiedtext = document.querySelector('.copied-text')
    copiedtext.style.display = "block"
    let ctext = document.querySelector('.copy-text')
    ctext.innerHTML = "Enter Password Criteria!"
    setTimeout(() => {
      let copytext = document.querySelector('.copied-text')
      copytext.style.display = "none"
    }, 3000);
  }
  else {
    if (input == "easy") {
      generatepwd.generateEasy()
    }
    else if (input == "strong") {
      generatepwd.generateStrong()
    }
    else if (input == "funny") {
      generatepwd.generateFunny()
    }
    else if (input == "super") {
      generatepwd.generateSuper()
    }
  }
})