
function add(){
  let  a=Number(document.getElementById("num1").value);
  let b=Number(document.getElementById("num2").value);
  let c =a+b
  document.getElementById("H3").innerText="the answer is " + c
 }
 function sub(){
  let a=Number(document.getElementById("num1").value);
  let b=Number(document.getElementById("num2").value);
  let c=a-b
  document.getElementById("H3").innerText="the answer is " + c
 }
 function mul(){
  let a=Number(document.getElementById("num1").value);
  let b=Number(document.getElementById("num2").value);
  let c=a*b
  document.getElementById("H3").innerText="the answer is " + c
 }
 function div(){
  let a=Number(document.getElementById("num1").value);
  let b=Number(document.getElementById("num2").value);
   let c=a/b
   let m = c.toString()
   document.getElementById("H3").innerText="the answer is " + m.slice(0,7)

 } 

 function formSubmit(event){
  event.preventDefault();

  let a=document.getElementById("email").value;
  let b=document.getElementById("password").value;
 

   if (a=="root@gmail.com" && b=="1234")
   {
    localStorage.setItem=("user",true)
    window.location.href=("http://127.0.0.1:5500/dashboard.html")
   }

 else

   {
alert("wrong id or pass")
   }
 }

 
