// ==UserScript==
// @name       Remove Yahoo Mail Chat and Ad Windows
// @version    0.1
// @author     Myron Yeung
// @source     http://github.com/myronyeung/mytools/tampermonkey/yahooMail
// @match      http://*.mail.yahoo.com/*
// @copyright  2013+, Myron Yeung
//
// Reference: http://forum.tampermonkey.net/viewtopic.php?f=16&t=75
// ==/UserScript==

(function removeJunk() {
	"use strict";
	
	var chatWindow = document.querySelector("iframe.om-views-overlay");
	var adPanel = document.getElementById("theAd"); // Left ad panel.
	var consoleString = "Tampermonkey: ";

	if(chatWindow) {
		chatWindow.style.display = "none";
		consoleString += "Hid chat overlay. ";
	}

	if(adPanel) {
		adPanel.parentNode.removeChild(adPanel);
		consoleString += "Removed ad panel.";
	}

	// chat window pops up intermittently after page load, hence the cyclical call.
	window.setTimeout(removeJunk, 4000); 

	console.log(consoleString);
})();
