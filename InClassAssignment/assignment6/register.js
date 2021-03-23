window.onload = pageLoad;
function pageLoad(){
    var summitButton = document.getElementById("myForm");
    summitButton.onsubmit = ValidateForm;
}

function ValidateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms['myForm']['password'].value;
    console.log(password);
    var retypePassword = document.forms['myForm']['repassword'].value;
    console.log(retypePassword);

    if(password == retypePassword)
    {             
        alert("Register successful!");        
    }
    else
    {     
        var errorMassage = document.getElementById("errormsg");
        errorMassage.innerHTML = "Please enter same password.";  
        //alert("Please enter same password."); 
        return false;
    }
}