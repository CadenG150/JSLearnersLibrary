function log(phrase) {
	console.log(phrase)
}

function write(phrase,) {
	document.write(phrase)
}
function createbutton(buttontext, buttonid, alerttype, message) {
	var button = document.createElement("button");
	button.innerHTML = buttontext;
	button.id = buttonid;
	button.className = buttonid;
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button);
	button.addEventListener ("click", 
		function() {
	   if (alerttype == "alert") {
	  	alert(message)
	  } else if (alerttype == "console") {
	  	console.log(message)
	  } else if (alerttype == "write") {
	  	document.write(message)
	  } else {
	  	console.log("That is not a supported property. Please check your syntax.")
	  }
	});
}

function style(id, type, modifier) {
	if (type == "color") {
		document.getElementById(id).style[type] = modifier;
	} else if (type == "background") {
		document.getElementById(id).style.background = modifier;
	 } else if (type == "textalign") {
		var sheet = window.document.styleSheets[0];
		var aligner = '.' + id + ' { text-align: ' + modifier + '; }';
		sheet.insertRule(aligner, sheet.cssRules.length);
	} else {
		console.log("That is not a supported property. Please check the syntax.")
	}
}

function doc(func) {
	if (func == "all") {
		console.log(documentation)
	} else if (func == "log") {
		console.log(logdocumentation)
	} else if (func == "write") {
		console.log(writedocumentation)
	} else if (func == "createbutton") {
		console.log(createbuttondocumentation)
	} else if (func == "style") {
		console.log(styledocumentation)
	} else if (func == "doc") {
		console.log(docdocumentation)
	} else {
		console.log("That is not a supported function.  Please check your spelling.")
	}
}