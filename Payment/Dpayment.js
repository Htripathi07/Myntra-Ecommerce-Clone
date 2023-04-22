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

if(Cname=="" || Cnumber=="" || Expmonth=="" || Expyear=="" ||Cvv==""){
    alert("Fill all the Details");
    }
     else{
        alert("Thank You for Your Order");
    PayArr.push(PayObj);
    localStorage.setItem("paymentdetail",JSON.stringify(PayArr));
    console.log(PayArr);
    }
}














