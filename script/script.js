function myFunction() {
  let btn = document.getElementById("btnLike"); 
  if(btn.innerText === 'Like') {
    btn.innerText = 'Liked';
  } else  {
    btn.innerText = 'Like';
  } 
}