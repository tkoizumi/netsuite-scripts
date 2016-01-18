var parent = document.getElementById("tr_fg_fieldGroup2");
var children = parent.children;

function displayCustDet (newtitle, newinfo) {

var td = document.createElement("td");
var tr = document.createElement("tr");
var table = document.createElement("table");
var div = document.createElement("div");
var tbody = document.createElement("tbody");

table.className ="table_fields";

var td2 = document.createElement("td");
var table2 = document.createElement("table");
var div2 = document.createElement("div");

td.vAlign = "top";

div.className="uir-field-wrapper";
div2.className="uir-field-wrapper";

var mspan = document.createElement("span");
var mspan2 = document.createElement("span");

mspan.className = "uir-label";
mspan2.className = "uir-label";

var span = document.createElement("span");
var span2 = document.createElement("span");

span.className = "uir-field";
span2.className = "uir-field";

var newtext = document.createTextNode(newtitle);
var newtext2 = document.createTextNode(newinfo);

tbody.appendChild(div).appendChild(mspan).appendChild(span).appendChild(newtext);

tbody.appendChild(div2).appendChild(span2).appendChild(newtext2);

tbody.appendChild(tr);

parent.appendChild(td).appendChild(table).appendChild(tbody);

colAdjust()

}

