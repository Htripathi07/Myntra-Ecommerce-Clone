
setTimeout(function(){
    alert("Otp send to your register mobile number")
},2000)



function move(e,b,c,d){

  var length=document.getElementById(c).value.length
  var maxlength=document.getElementById(c).getAttribute("maxlength")
  if(length==maxlength){
      if(d!=''){
      document.getElementById(d).focus();

  }
  else {
      setTimeout(function(){
          alert("Login Success")
      window.location.href="https://images.app.goo.gl/ZFHKDwcRJjBPmRcb6"
      },2000)

  }
  
    }
    if(e.key==="Backspace"){
        if(b!==''){
        document.getElementById(b).focus();
    }

    }
}