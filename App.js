const time = document.getElementById("timeNow"),
  greet = document.getElementById("greet"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");


function setTime() {
  const today = new Date();

  let hrs = today.getHours(),
    mins = today.getMinutes(),
    secs = today.getSeconds();


  // console.log(`${hrs}:${mins}:${secs}`);
  let ampm = hrs < 12 ? "AM" : "PM";
  hrs = hrs % 12 || 12;

  time.innerHTML = `${hrs}<span>:</span>${addZero(mins)}<span>:</span>${addZero(
    secs
  )}`;
  
  document.getElementById('ampm').innerText = ampm;

  setTimeout(setTime, 1000);

  if(secs === 0)
  { 
    setBgGreet();
  }
}

function addZero(n = 0) {
  return (n < 10 ? "0" : "") + n;
}

const dayBgs = [
  "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
  "url('https://images.unsplash.com/photo-1572272195904-f64d9c02c5b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80')",
  "url('https://images.unsplash.com/photo-1616262569508-d0a93ed178c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
],
  aftnoonBgs = [
  "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
  "url('https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
],
  eveBgs = [
    "url('https://images.unsplash.com/photo-1569325170122-9bdbc2334c22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&q=80')",
    "url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
    "url('https://images.unsplash.com/photo-1453872787409-dc25a2913da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80')",
  ];

let i = 0;

function setBgGreet() {
  const today = new Date();
  let hrs = today.getHours();

  i = (i+1)%3;

  if (hrs < 12) 
  { 
    document.body.style.backgroundImage = dayBgs[i];
    greet.textContent = "Good Morning";
    document.body.style.color = "Black";
  } 
  else if (hrs < 18) 
  {
    document.body.style.backgroundImage = aftnoonBgs[i];
    greet.textContent = "Good Afternoon";
    document.body.style.color = "Black";
  }
  else{
    document.body.style.backgroundImage = eveBgs[i];
    greet.textContent = "Good Evening";
    document.body.style.color = "White";
  }

}



function getName(){
  if(localStorage.getItem('name') === null)
  {
    name.textContent = '[Name..]';
  }
  else{
     name.textContent = localStorage.getItem('name');
  }
}

function setName(e){
  if(e.type === 'keypress')
  {
    if(e.keyCode === 13)
    {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    } 
  }
  else{
      localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus(){
  if(localStorage.getItem('focus') === null)
  {
    focus.textContent = '[Enter Focus]';
  }
  else{
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e){
  if(e.type === 'keypress')
  {
    if(e.keyCode === 13)
    {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    } 
  }
  else{
      localStorage.setItem('focus', e.target.innerText);
  }
}

getName();
getFocus();
setTime();
setBgGreet();
// setname();

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);



