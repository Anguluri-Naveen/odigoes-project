const validate=()=>{
    let username= document.contact.username.value;
    let user_status = mobileno_status=false;
    let email_status=select_status=false;
    let alphaexp= /^[a-z A-Z]+$/;
    let numExp= /^[0-9]+$/;
    let emailexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let mobileno=document.contact.mobileno.value;
    let emailid=document.contact.emailid.value;
    let select=document.contact.course.value;

    if (username==="") {
        document.getElementById("note").innerHTML="name is mandatory"
        user_status=false;
    }
    else{
        if (username.match(alphaexp)) {
            document.getElementById("note").innerHTML=""
            user_status=true;
        }
        else{
            document.getElementById("note").innerHTML="enter name in words"
            user_status=false
        }
    }
    if (mobileno==="") {
        document.getElementById("mobilenote").innerHTML="number is mandatory"
        mobileno_status=false
    }
    else{
        if (mobileno.match(numExp)) {
           if (mobileno.length==10) {
            document.getElementById("mobilenote").innerHTML=""
            mobileno_status=true
           }
           else{
            document.getElementById("mobilenote").innerHTML="enter only 10 digit number"
            mobileno_status=false
           }
        }
        else{
            document.getElementById("mobilenote").innerHTML="enter only numbers"
            mobileno_status=false
        }
    }
    if (emailid==="") {
        document.getElementById("emailnote").innerHTML="emailid is mandatory"
        email_status=false;
      }
      else{
        if (emailid.match(emailexp)) {
            document.getElementById("emailnote").innerHTML=""
            email_status=true;
        }
        else{
            document.getElementById("emailnote").innerHTML="enter charactertics also" 
            email_status=false;
        }
      }
    
    if (user_status===true&&mobileno_status===true) {
        return true;
    }
    else{
        return false;
    }
    if (email_status===true) {
        return true;
    }
    else{
        return false;
    }
}