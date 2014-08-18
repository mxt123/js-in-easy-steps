function stringify(a, b, c, d){
	return a+ " " + b + " " + c + " " + d + "<br>";
}

function init(){ 
	var panel = document.getElementById('panel');
	panel.innerHTML=stringify('javascript','in','Easy','Steps');
	panel.innerHTML+=stringify('happy','happy','joy','joy');
}
document.addEventListener('DOMContentLoaded',init,false);


