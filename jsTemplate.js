var crest = (function(){

	// vars
	var templateString = "";
	var targetID = "";
	var layoutString = "";
	var data = {};

	// constants
	var VAR_REGEX = /\{\{\w+\}\}/g;


	// extracts variable information from a string 
	// returns an array of the variable extracted, its index, and its key
	function getVariables(str){
		// return str.exec(VAR_REGEX, str);
		var data = [];
		var arr = [];
		var varString = "";
		do {	
			m = VAR_REGEX.exec(str);

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

	function reqListener () {
  console.log(this.responseText);
}

	function setLayout(file) {
		if (!file) {
			return;
		}
		var reader = new FileReader();
		reader.onload = function(e) {
			var contents = e.target.result;
			console.log(contents);
		};
		// reader.readAsText(file);
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
		let varInfo = getVariables(templateString);
		var root = document.getElementById(targetID);

		varInfo.forEach(function(v){
			if(data[v.key]){
				templateString = templateString.replace(v.value, data[v.key]);
			}
			else{
				templateString = templateString.replace(v.value, "");
			}
			
		});

		root.innerHTML = templateString;

		
	}

	return {
		setTemplateString: setTemplateString,
		setTargetID: setTargetID,
		setVar: setVar,
		setLayout: setLayout,
		render: render
	}

})();