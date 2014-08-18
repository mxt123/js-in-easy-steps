function sortFunct(day1, day2){
	return day1 > day2;
}

function init(){
	var panel=document.getElementById('panel');
	var i;
	var week = ['mon','tue','wed','thu','fri'];
	var weekend = ['sat','sun'];

	panel.innerHTML='weekdays:'+week;
	panel.innerHTML+='<hr>Weekend days:' + weekend;
	
	for (i=0;i<weekend.length;i++){
		week[week.length]=weekend[i];
	}
	
	panel.innerHTML+='<hr>increased with weekend days:'+week;
	
	//week.length-=2;
	
	//panel.innerHTML+='<hr>reduced back to weekends:'+week;
	
	panel.innerHTML+='<hr>' + week.join(' and ');
	
	panel.innerHTML+='<hr>' +week.sort(sortFunct);
	
	try {
		throw new Error('bleh');
	} catch (err) {
			panel.innerHTML+='<hr>SPLAT:'+err;
	} finally {
			panel.innerHTML+='<hr>FINALLY';
	}
	
}
document.addEventListener('DOMContentLoaded',init,false);
