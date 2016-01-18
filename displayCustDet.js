var parent = document.getElementById("tr_fg_fieldGroup2");
var c = parent.children;

function displayCustDet (newtitle, newinfo, colrow) {
//add if statement to break if no arguments are passed
var td = document.createElement("td");
td.vAlign = "top";

var td2 = document.createElement("td");

var tr = document.createElement("tr");
var table = document.createElement("table");
var tbody = document.createElement("tbody");

table.className ="table_fields";

var div = document.createElement("div");
div.className="uir-field-wrapper";

var mspan = document.createElement("span");
mspan.className = "uir-label";

var span = document.createElement("span");
span.className = "uir-field";

var span2 = document.createElement("span");
span2.className = "uir-field";

var newtext = document.createTextNode(newtitle);
var newtext2 = document.createTextNode(newinfo);

div.appendChild(mspan).appendChild(span).appendChild(newtext);

div.appendChild(span2).appendChild(newtext2);

if(colrow=='col' || colrow=='Col'){

parent.appendChild(td).appendChild(table).appendChild(tbody).appendChild(tr).appendChild(td2).appendChild(div);

colAdjust()

} else if(colrow=='row' || colrow=='Row') {
var last_col = c.length -1;
var tr2 = document.createElement('tr');

c[last_col].children[0].children[0].appendChild(tr).appendChild(td2).appendChild(div);
}

}

