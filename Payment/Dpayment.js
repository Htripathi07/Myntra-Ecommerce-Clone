document.querySelector("form").addEventListener("submit",SubmitForm);
var PayArr= JSON.parse(localStorage.getItem("paymentdetail")) ||[];


function SubmitForm(event){
    event.preventDefault();

     Cname=document.getElementById("Cname").value;
     Cnumber=document.getElementById("Cnumber").value;
     Expmonth=document.getElementById("Expmonth").value;
     Expyear=document.getElementById("Expyear").value;
     Cvv=document.getElementById("Cvv").value;

PayObj={
    Cname:Cname,
    Cnumber:Cnumber,
    Expmonth:Expmonth,
    Expyear:Expyear,
    Cvv:Cvv,
}
PayArr.push(PayObj);
console.log(PayArr);
localStorage.setItem("paymentdetail",JSON.stringify(PayArr));
}
var take =JSON.parse(localStorage.getItem("paymentdetail"));

take.map(function(elem,i){
    if((elem.Cnumber).lenghth>16 || (elem.Cname).lenghth<16){
        alert("invalid card number");
    }
})
