/*================
VIEW ONE EFFECTS
================*/





/*================
VIEW TWO EFFECTS
================*/





/*================
VIEW THREE EFFECTS
================*/

// Script to display the first tab of the three upon load
document.getElementsByClassName('tablinks')[0].click();
function openTab(evt, tabName) {
	'use strict';
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Tooltip to generate message for use so they know to click on tab for more info
$(document).ready(function(){
	'use strict';
    $('[data-toggle="tooltip"]').tooltip();  
});

// Old code that was not working

/*
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementsByClassName('tablinks')[0].click()
*/

/*================
VIEW FOUR EFFECTS
================*/





/*================
VIEW FIVE EFFECTS
================*/





/*================
VIEW SIX EFFECTS
================*/

