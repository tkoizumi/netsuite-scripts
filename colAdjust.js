//This function will adjust the width of each column depending on how many new columns are added to the row in NetSuite customers

function colAdjust(){

var length = children.length;
var percent = 100/length + "%"
	for(i=0;i<children.length;i++){
    	children[i].style.width=percent;
		}
var hbar = document.getElementById("fg_fieldGroup2");

hbar.colSpan = length;
}
