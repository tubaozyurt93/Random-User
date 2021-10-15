const form = document.getElementById('form');
const usercount = document.getElementById('usercount');
const select = document.getElementById('gender'); 
window.addEventListener('load', (event) => {
  if(localStorage.getItem('user')){
 window.location.href="second.html";
  }


});

select.onchange = function(e){
  console.log(e.target.value)
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    submit();
});

function setSuccessFor(input, message){
  const formControl = input.parentElement; //.form-control
  formControl.className= 'form-control success';
}

const submit = () => {
  localStorage.setItem('user','user');
console.log(localStorage)
  function fetchUserData(){
  fetch(`https://randomuser.me/api/?results=${usercount.value}`)
      .then(response => response.json())
      .then(json => console.log(json))
}
 fetchUserData()
}


