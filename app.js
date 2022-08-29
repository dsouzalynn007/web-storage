// //! setting item inside web storage
// window.localStorage.setItem('username','lynn')
// //! getting item from web storage
// let username=window.localStorage.getItem('username')
// console.log(username);
// //! removing item from web storage
// window.localStorage.removeItem('username')

let mainForm=document.querySelector('#mainForm')
let form=document.querySelector('form')
let profileName=document.querySelector('#profileName')
let logout=document.querySelector('#logout')
let login=document.querySelector('#login')
console.log(login);
let mainProfile=document.querySelector('#mainProfile')

logout.onclick = function(){
    window.localStorage.removeItem('user')
    login.style.display='block'
    mainForm.style.display='block'
    logout.style.display='none'
    mainProfile.style.display='none'
    profileName.innerHTML=''
}
login.onclick = function(){
let user=window.localStorage.getItem('user')
let parsedUser=JSON.parse(user)
console.log(user);
console.log(parsedUser);
console.log(parsedUser.username);
    profileName.innerHTML= parsedUser.username
    login.style.display='none'
    mainForm.style.display='none'
    logout.style.display='block'
    mainProfile.style.display='block'
}

form.addEventListener('submit',e=>{
    e.preventDefault()
    let username=e.target[0].value.trim()
    let password=e.target[1].value.trim()
    let userData={username,password}
    window.localStorage.setItem('user',JSON.stringify(userData))
})
