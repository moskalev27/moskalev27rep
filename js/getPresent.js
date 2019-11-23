// let name_guest = document.getElementById('cl_name')

// let button_send_info = document.getElementById('sendPresentInfo')

// console.log('До нажатия кнопки "Отправить"', cl_name.value)

// button_send_info.onclick = function(){
//    let name = cl_name.value
//     console.log('Имя ', name)
// }

// console.log('z', cl_name)

let buttonShowModalPresent = document.getElementById("getPresentModal");
let modalPresentWindow = document.getElementById("modalPresent");
let closePresentWindow = document.getElementById("closeModalPresent");
let sendPresentInfo = document.getElementById("sendPresentInfo");

buttonShowModalPresent.onclick = function() {
  modalPresentWindow.style.display = "block";
};

closePresentWindow.onclick = function() {
  modalPresentWindow.style.display = "none";
};

sendPresentInfo.onclick = function() {
  let nameGuest = document.getElementById("cl_name");
  let guestSelect = document.getElementById("guest_select");

  if (nameGuest.value) {
    console.log("nameGuest", nameGuest.value);
    nameGuest.style.border = "1px solid #bebebe";
  } else {
    nameGuest.style.border = "2px solid red";
  }

  if (guestSelect.value != 0) {
    console.log("guestSelect", guestSelect.value);
    guestSelect.style.border = "1px solid #bebebe";
  } else {
    guestSelect.style.border = "2px solid red";
  }
  if(nameGuest.value && guestSelect.value != 0){
    modalPresentWindow.style.display = "none";

  }
};

let nameGuest = document.getElementById("cl_name");
nameGuest.onchange = function(){
  console.log('До нажатия кнопки отправить: nameGuest', nameGuest.value)
}

let guestSelect = document.getElementById("guest_select");
guestSelect.onchange = function(){
  console.log('До нажатия кнопки отправить: guestSelect', guestSelect.value)
}