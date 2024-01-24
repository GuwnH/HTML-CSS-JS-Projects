const input = document.getElementById('text-input');
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function palindrome(text) {
  if(text === ""){
    alert('Please input a value');
    return;
  }
  
  text = text.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let l = 0;
  let r = text.length-1;
  
  if(text.length <= 1){
    return true;
  }
  while (l < r) {
    if (text[l] !== text[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

function shootMessage(text) {
  result.replaceChildren();
  let message = "";
  
  if (palindrome(text)) {
    message = `<strong>${text}</strong> is a palindrome`;
  }
  else {
    message = `<strong>${text}</strong> is not a palindrome`;
  }
  const p = document.createElement('p');
  p.innerHTML = message;
  result.appendChild(p);
}

button.addEventListener('click',() => shootMessage(input.value));
