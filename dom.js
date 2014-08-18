function init(){
	var panel=document.getElementById('panel');
	var property;
	for (property in window){
		if (property){panel.innerHTML+=property+',</br>';}
	}
}
document.addEventListener('DOMContentLoaded',init,false);
