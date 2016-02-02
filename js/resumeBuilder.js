/*
This is empty on purpose! Your code to build the resume will go here.
 
 $("#main").append(["ECHO TELION PROJECT"]);
*/

var formattedName = HTMLheaderName.replace("%data%", "Low Kee Chow");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#main").append(formattedName);

$("#main").append(formattedRole);