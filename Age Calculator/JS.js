let curr = new Date();
run = () =>{
  document.getElementById("agetext").style.display = "block";
  let date = parseInt(document.getElementById("date").value);
  let month = parseInt(document.getElementById("month").value);
  let year =  parseInt(document.getElementById("year").value);
  let reply = document.getElementById("age");
  console.log(date + " " + month + " "   + year);
  let diff_year = curr.getFullYear()-year;
  let diff_month = curr.getMonth()-month;
  let diff_date = curr.getDate()-date;
  if(diff_year<0){
     reply.innerHTML="INVALID";
     return;
  }
  
   let myage = (curr.getFullYear() - year);

  if (month < curr.getMonth() || 
      month == curr.getMonth() && date < curr.getDate()) {
      myage--;
  }

  reply.innerHTML = myage;

}