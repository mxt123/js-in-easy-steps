function init(){
	var panel=document.getElementById('panel');
	panel.innerHTML='main window';
	var winObject=window.open('pop.html','nameofwindow','top=200,left=100,height=100,status=yes');
}
document.addEventListener('DOMContentLoaded',init,false);
