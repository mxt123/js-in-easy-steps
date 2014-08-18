var global = 'Im global<hr>';

function us(obj){
	var local ='**localUS***<hr>';
	obj.innerHTML+=local;
}

function eu(obj){
	var local ='**localeu***<hr>';
	obj.innerHTML+=local;
}

function init(){
	var obj=document.getElementById('panel');
	obj.innerHTML=global;
	us(obj);
	eu(obj);
}
document.addEventListener('DOMContentLoaded',init,false);
