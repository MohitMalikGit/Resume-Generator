const addWorkExp = ()=>{
  let x = document.getElementById("Iworkexp");
  let y = document.createElement("textarea");
  y.placeholder = "Enter Here";
  y.className = "largebox";
  y.style.marginTop = "5px";
  x.appendChild(y);
}
const addAcdQua = ()=>{
  let x = document.getElementById("Iacdqua");
  let y = document.createElement("textarea");
  y.placeholder = "Enter Here";
  y.className = "largebox";
  y.style.marginTop = "5px";
  x.appendChild(y);
}
const changetoResume = ()=>{
 let x = document.getElementsByClassName("resume");
 x[0].style.visibility ="visible";
 x = document.getElementsByClassName("content");
 x[0].style.display = "none";
//  personal details
 document.getElementById("Rname").textContent = document.getElementById("Iname").value;
 document.getElementById("Rphone").textContent = document.getElementById("Iphone").value;
 document.getElementById("Raddress").textContent = document.getElementById("Iaddress").value;
 document.getElementById("Rfacebook").innerText = document.getElementById("Ifacebook").value;
 document.getElementById("Rinsta").innerText = document.getElementById("Iinsta").value;
 document.getElementById("Rlinkdin").innerText = document.getElementById("Ilinkdin").value;
//  proffsional details
document.getElementById("Robjective").innerText = document.getElementById("Iobjective").value;
x = document.getElementById("Iworkexp");
let allwrkexp = x.getElementsByTagName("textarea");
let list = document.getElementById("Rworkexp");
for( let temp of allwrkexp){
  let l = document.createElement("li");
  l.innerText = temp.value;
  list.appendChild(l);
}

x = document.getElementById("Iacdqua");
allwrkexp = x.getElementsByTagName("textarea");
list = document.getElementById("Racdqua");
for( let temp of allwrkexp){
  let l = document.createElement("li");
  l.innerText = temp.value;
  list.appendChild(l);
}
x = document.getElementById("imagefile").files[0];
let reader = new FileReader();
reader.readAsDataURL(x);
console.log(reader.result);
reader.onloadend = function(){
  document.getElementById("profilephoto").src = reader.result;
};
}