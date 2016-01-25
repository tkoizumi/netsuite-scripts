//This function will adjust the width of each column depending on how many new columns are added to the row in NetSuite customers

function colAdjust(){

var length = c.length;
var percent = 100/length + "%"
	for(i=0;i<c.length;i++){
    	c[i].style.width=percent;
		} 

var parent_table = document.getElementById("detail_table_lay"); //captures the table elements in any page
var row_elem = parent_table.children[0].children; //captures all the row elements

var row_id = row_elem[0].children[0].children[0].children[0].children[0].children[0].id; //gets id of the row's element--for this one we are just getting the 1st row but eventualy that will be a parameter

var hbar = document.getElementById(row_id);

hbar.colSpan = length;
}
