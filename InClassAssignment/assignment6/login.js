window.onload = loginLoad;
function loginLoad(){
	var myForm = document.getElementById("myLogin");
	myForm.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const getURL = new URLSearchParams(window.location.search);
	const getID = getURL.get('username');
	console.log(getID);
	const getPass = getURL.get('password');
	console.log(getPass);

	var username = document.forms['myLogin']['username'].value;
	var password = document.forms['myLogin']['password'].value;	
	if((username == getID) && (password == getPass))
	{
       alert("Login successful!");
	   location.replace("https://ansrach.github.io/Portfolio-webpage/index.html")
	   return false;
	}
	else
	{
      alert("Password incorrect, please try again.");
	  return false;
	}
}

			