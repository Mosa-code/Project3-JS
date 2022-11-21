function myFunction() {
  let btn = document.getElementById("likebtn"); 
  if(btn.innerText === 'Like') {
    btn.innerText = 'Liked';
  } else  {
    btn.innerText = 'Like';
  } 
}

function scary() {
  alert("Boo!")
}