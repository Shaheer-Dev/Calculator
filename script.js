let btns = ["AC","Del",".","/",7,8,9,"*",4,5,6,"-",1,2,3,"+","00",0,"="]
let screen = document.querySelector("input");
let keyboard = document.querySelector(".keyboard");

  btns.forEach(function(btn,index){
    keyboard.innerHTML+= `<button class="bg-sky-600 rounded-lg ${index == btns.length -1 && "col-span-2 green"}">${btn}</button>`
  
});

function handleKeys(e) {
  if (e.target.tagName == "BUTTON") {
    let key = e.target.textContent;
    if (key == "Del") {
      deleteOne();
      return;
    }
    if (key == "AC") {
      clearScreen();
      return;
    }
    if (key == "=") {
      calculate(screen.value);
      return;
    }
    screen.value += key;
  }
}

keyboard.addEventListener("click", handleKeys);

function clearScreen() {
  screen.value = "";
}

function deleteOne() {
  console.log("object");
  let str = screen.value;
  screen.value = str.substring(0, str.length - 1);
}

function calculate(value) {
  screen.value = value && eval(value);
}
