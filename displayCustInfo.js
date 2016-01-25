function displayCustInfo (newtitle, newinfo, colrow) {
//adds new information to a new column or a new row in the last column
//put the new title of the information you want to display in 1st argument
//put the data of the title in the 2nd argument
//in the 3rd argument, put 'col' or 'Col' if you want to add a new column
//in the 3rd argument, put 'row' or 'Row' if you want to add a new row in the last column

if(newtitle === undefined || newinfo === undefined || colrow === undefined){ //validates parameters
	return false
} else {

//constructing html structure to display data	
var td = document.createElement("td");
td.vAlign = "top";

var td2 = document.createElement("td");

var tr = document.createElement("tr");
var table = document.createElement("table");
var tbody = document.createElement("tbody");

table.className ="table_fields"; //necessary to add this class to display text due to NetSuite CSS

var div = document.createElement("div");
div.className="uir-field-wrapper"; //necessary to add this class to display text due to NetSuite CSS

var mspan = document.createElement("span");
mspan.className = "uir-label"; //necessary to add this class to display text due to NetSuite CSS

var span = document.createElement("span");
span.className = "uir-field"; //necessary to add this class to display text due to NetSuite CSS
span.className += " smallgraytextnolink";

var span2 = document.createElement("span");
span2.className = "uir-field"; //necessary to add this class to display text due to NetSuite CSS

var newtext = document.createTextNode(newtitle);
var newtext2 = document.createTextNode(newinfo);

div.appendChild(mspan).appendChild(span).appendChild(newtext);

div.appendChild(span2).appendChild(newtext2);

if(colrow=='col' || colrow=='Col'){ //validates if new column add is desired

parent.appendChild(td).appendChild(table).appendChild(tbody).appendChild(tr).appendChild(td2).appendChild(div);

colAdjust() //adjusts the width of all columns

} else if(colrow=='row' || colrow=='Row') { //validates if new row add is desired
var last_col = c.length -1;
var tr2 = document.createElement('tr');

c[last_col].children[0].children[0].appendChild(tr).appendChild(td2).appendChild(div); //looks for the last column and appends a new row
}

}
}
