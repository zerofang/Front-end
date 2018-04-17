function init(){
	var button = document.getElementById("submit");
	button.onclick = handleButtonClick;
}
function handleButtonClick(){
	var input1 = document.getElementById("input1");
	var getkeyword = input1.value;
	var keyword= document.getElementById("keyword");
	keyword.innerHTML = getkeyword[0]+"<br>"+getkeyword[1];
	var input2 = document.getElementById("input2");
	var getauthor = input2.value;
	var author = document.getElementById("author");
	var temp1="";
	for (var i = 0; i < getauthor.length; i++) {
		temp1=temp1+getauthor[i]+"</br>"
	};
	author.innerHTML = temp1+"说";
	var fullDate = getTime();
	var date = document.getElementById("date");
	var temp2="";
	for (var i = 0; i < fullDate.length; i++) {
		temp2 = temp2+fullDate[i]+"</br>";
	};
	date.innerHTML = temp2;
	var quote = document.getElementById("quote");
	var quotes = quote.value;
	var list1 = "";
	var list2 = "";
	var list3 = "";
	var list4 = "";
	var list5 = "";
	for(var i=0;i<quotes.length;i++){
		if(i<10){
			list1 = list1+quotes[i]+"</br>";
		}
		else if(i<20){
			list2 = list2+quotes[i]+"</br>";
		}	
		else if(i<30){
			list3 = list3+quotes[i]+"</br>";
		}
		else if(i<40){
			list4 = list4+quotes[i]+"</br>";
		}
		else if(i<50){
			list5 = list5+quotes[i]+"</br>";
		}
		else{
			alert("字数超出限制！");
			break;
		}
	};
	var row1 = document.getElementById("row1");
	row1.innerHTML = list1;
	var row2 = document.getElementById("row2");
	row2.innerHTML = list2;	
	var row3 = document.getElementById("row3");
	row3.innerHTML = list3;
	var row4 = document.getElementById("row4");
	row4.innerHTML = list4;
	var row5 = document.getElementById("row5");
	row5.innerHTML = list5;
}
function getTime(){
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth()+1;
	var dates = myDate.getDate();
	var cn_year=year.toString();
	var cn_month=month.toString();
	var cn_dates=dates.toString();
	var newyear = transform(cn_year,1);
	var newmonth = transform(cn_month,2);
	var newdates = transform(cn_dates,3);
	var fullDate = newyear + "年"+ newmonth + "月" + newdates + "日";
	return fullDate;
}
function transform(text,key){
	var date="";
	for(var i=0;i<text.length;i++){
		switch(text[i]){
			case '0':if(key == 1) date+="零";break;
			case '1':
					if(i==0&&(key==2||key===3)){
						date+="十";
						break;
					}else{
						date+="一";break;
					}
			case '2':
					if(i==0&&(key==2||key===3)){
						date+="二十";
						break;
					}else {
						date+="二";
						break;
					}
			case '3':
					if(i==0&&(key==2||key===3)){
						date+="三十";
						break;
					}else {
						date+="三";
						break;
					}
			case '4':date+="四";break;
			case '5':date+="五";break;
			case '6':date+="六";break;
			case '7':date+="七";break;
			case '8':date+="八";break;
			case '9':date+="九";break;
			default:break;
		} 
	}
	return date;
}
window.onload = init;