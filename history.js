function init(){
	var panel=document.getElementById('panel');
	panel.innerHTML+="<a Href='history-1.html'>page 1</a> | ";
	panel.innerHTML+="<a Href='history-2.html'>page 2</a> | ";
	panel.innerHTML+="<a Href='history-3.html'>page 3</a> | ";
	
	panel.innerHTML+="<br>History length"+history.length + "<br>";
	
	panel.innerHTML+="<br><button onclick='history.back()'>back</button>";
	panel.innerHTML+="<button onclick='history.forward()'>forward</button>";

}
document.addEventListener('DOMContentLoaded',init,false);
