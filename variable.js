function init(){
	var str='text content from js';
	var num = 100;
	var bin = true;
	var fcn = init;
	var obj = document.getElementById('panel');
	obj.innerHTML= str+':'+typeof str;
	obj.innerHTML+='<br>' +num+':'+typeof num;
	obj.innerHTML+='<br>' +bin+':'+typeof bin;
	obj.innerHTML+='<br>init():'+typeof fcn;
	obj.innerHTML+='<br>' +obj+':'+typeof obj;
}
document.addEventListener('DOMContentLoaded',init,false);
