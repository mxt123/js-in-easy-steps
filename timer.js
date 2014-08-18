var counter=0;

function init(){
	var timerid, panel=document.getElementById('panel');
 	counter++;
 	panel.innerHTML+=
 		'<span style ="background:black;color:white;margin:2px;">' + counter +'<span>';
 	if (counter>190){
 		window.clearTimeout(timerId);
 	} else {
 		timerid = window.setTimeout(init,5+counter);
 	}
 	
}
document.addEventListener('DOMContentLoaded',init,false);