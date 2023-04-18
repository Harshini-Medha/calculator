
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
 
