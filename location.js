function init(){
	var panel=document.getElementById('panel');
	panel.innerHTML='<a name="frag">fragment anchor</a>';
	var jump=confirm('jump to fragment');
	if (jump){
		location=location.href+'#frag';
		}
	panel.innerHTML+='<hr>Href:'+location.href;
	panel.innerHTML+='<hr>Hash:'+location.hash;
}
document.addEventListener('DOMContentLoaded',init,false);
