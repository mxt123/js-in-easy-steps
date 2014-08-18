function accelerate(){
	return "<br>Vroom!";
}

function Car(make,model,color){
	this.make=make;
	this.model=model;
	this.color = color;
	this.accelerate = accelerate;
}

function list(obj){
	var str ='';
	for (property in obj){
		str+=property + '<br>';
	}
	return str;
}

function init(){
	var panel=document.getElementById('panel');
	var myCar = new Car('dodge ','viper ','red');
	panel.innerHTML=myCar.color+myCar.make+myCar.model;
	panel.innerHTML+=myCar.accelerate();
	panel.innerHTML+='<br>'+list(myCar);
	Car.prototype.doors=2;
	myCar.doors=3;
	panel.innerHTML+='<br>'+myCar['doors']+'<br>';
	var colors = new Array('a','b','c');
	var str = "";
	for (val in colors){
		str+=colors[val];
	}
	panel.innerHTML+=str;
}
document.addEventListener('DOMContentLoaded',init,false);
