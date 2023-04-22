document.querySelector("form").addEventListener("submit",SubmitForm);

var detailArr=JSON.parse(localStorage.getItem("addressdetail")) ||[];
function SubmitForm(event){
    event.preventDefault();
    Fname=document.getElementById("name").value;
    mobile=document.getElementById("number").value;
    altmobile=document.getElementById("altnumber").value;
    email=document.getElementById("email").value;
    address=document.getElementById("address").value;
    city=document.getElementById("city").value;
    pin=document.getElementById("pin").value;
    state=document.getElementById("state").value;


var detailobj={
    name:Fname,
    mobile:mobile,
    altmobile:altmobile,
    email:email,
    address:address,
    city:city,
    pin:pin,
    state:state,
}
if(Fname=="" || mobile=="" || email=="" || address=="" ||city=="" ||pin=="" || state==""){
alert("Fill all the Details");
} else{
detailArr.push(detailobj);

alert("Address saved Successfully");
localStorage.setItem("addressdetail",JSON.stringify(detailArr));

}
}
