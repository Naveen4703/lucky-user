let user = [];
let sendDetails = document.getElementById('send-details');
let luckyUser = document.getElementById('lucky-user');
addUser = () => {
    tempUser = {};
    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
   tempUser.name = name.value;
   tempUser.mail = mail.value;
   name.value = "";
   mail.value = "";
   user.push(tempUser);
   console.log(user);
}
luck = () => {
    let totalUser = user.length;
    let randomUser = Math.floor(Math.random()*totalUser);
    console.log(user[randomUser])
    document.getElementById('userName').innerHTML = user[randomUser].name;
    document.getElementById('userMail').innerHTML = user[randomUser].mail;
}
luckyUser.addEventListener('click',luck);
sendDetails.addEventListener('click',addUser);