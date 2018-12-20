var JsTemplate = function() {

	// vars
	var templateString = "";
	var templateFile = "";
	var usingFile = false;
	var targetID = "";
	var layoutString = "";
	var data = {};

	// constants
	var VAR_REGEX = /\{\{\w+\}\}/g;
	var IF_REGEX = /@if\(([^)]+)\);/;
	var ELSE_REGEX = /@else;/;
	var ENDIF_REGEX = /@endif;/;




/* ------------------------------------
	PRIVATE FUNCTIONS
--------------------------------------*/

	function getIfs(){
		
		// while( templateString.includes('@if')){
		// 	console.log(templateString);
		// 	templateString.replace(IF_REGEX, '***');
		// }

		if(templateString.includes('@if')){
			var ifData = IF_REGEX.exec(templateString);
			var endData = ENDIF_REGEX.exec(templateString);
			console.log(ifData);
			console.log(endData);
		}
		

	}

	// extracts variable information from a string 
	// returns an array of the variable extracted, its index, and its key
	function getVariables(){
		// return str.exec(VAR_REGEX, str);
		var data = [];
		var arr = [];
		var varString = "";
		do {	
			m = VAR_REGEX.exec(templateString);

			if( m ){
				varString = m[0];
				varString = varString.replace("{{", "");
				varString = varString.replace("}}", "");
				arr = { value: m[0], key: varString  };
				data.push(arr);
			}

		} while( m );


		return data;
	}



	function replaceVariables(){

		let varInfo = getVariables();

		varInfo.forEach(function(v){
			if(data[v.key]){
				templateString = templateString.replace(v.value, data[v.key]);
			}
			else{
				templateString = templateString.replace(v.value, "");
			}
			
		});
	}



/* ------------------------------------
	PUBLIC FUNCTIONS
--------------------------------------*/


	function setTemplateFile(file){
		usingFile = true;
		templateFile = file;
	}

	function setTemplateString(str){
		templateString = str;
	}

	function setTargetID(id){
		targetID = id;
	}

	function setVar(key, value){
		data[key] = value;
	}

	function render(){

		var root = document.getElementById(targetID);

		if( usingFile) {
			$.get(templateFile, function(data){ 

				setTemplateString(data);
				replaceVariables();
				getIfs();

				root.innerHTML = templateString;
			} );
		}
		else {
			replaceVariables();
			getIfs();
			root.innerHTML = templateString;
		}
		
	}

	return Object.freeze({
		setTemplateString: setTemplateString,
		setTemplateFile: setTemplateFile,
		setTargetID: setTargetID,
		setVar: setVar,
		render: render
	});

};