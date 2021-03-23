//var timer = null;
window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();	
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		x.innerHTML = second;		
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen			
		if(allbox.length != 0){
			if(second != 0){
				console.log(second);
				second--;
			}		
			else{
				alert("Game Over!");
				clearInterval(timer);
				timer = null;
				clearScreen();	
			}
		}	
		else{
			alert("You Win!");
			clearInterval(timer);			
			clearScreen();			
		}		
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		//var boxBGcolor = document.createElement("div");
		tempbox.className = ("square");
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		if(colorDrop == "red"){
			tempbox.classList.add("red")
		}
		else if(colorDrop == "blue"){
			tempbox.classList.add("blue")
		}
		else if(colorDrop == "green"){
			tempbox.classList.add("green")
		}
		else if(colorDrop == "jam"){
			tempbox.classList.add("jam")
		}
		//boxBGcolor.innerHTML = "";
		//boxBGcolor.className = ("color");
		//boxBGcolor.className = colorDrop.value;
		//document.getElementById(tempbox.id).appendChild(boxBGcolor);

		//add element to HTML node	
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		console.log("Box " + box.id);
        document.getElementById(box.id).remove();	
	}
}
function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.getElementById("game-layer");
    console.log(allbox.childElementCount);

    while(allbox.firstChild){
        allbox.removeChild(allbox.lastChild);
    }
}
