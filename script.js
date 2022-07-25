const icon = document.querySelector("#icon");
const inputField = document.querySelector("#input-field");

icon.addEventListener('click',()=>{
    icon.classList.toggle('fa-eye-slash');
    icon.title = icon.classList.contains('fa-eye-slash')?"Hide Password":"Show Password";
    let type = inputField.type;
    inputField.type = type==='password'?'text':'password';
})