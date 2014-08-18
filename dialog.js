function init(){
	var panel = document.getElementById('panel');
	//panel.innerHTML('confirm'+window.confirm('go or stop'));
	panel.innerHTML+='<br>prompt ' + window.prompt('y/n','yes');
}
document.addEventListener('DOMContentLoaded',init,false);
