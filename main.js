var main = (function(){

	// Simple example



	let jst = new JsTemplate(); // initialize the object

	// set the server template file
	jst.setTemplateFile('index.tpl');

	//alternatively you can use a templateString
	// jst.setTemplateString('<p class="p-5">hello world!!!</p>');

	jst.setVar('age', 17);
	jst.setVar("name", "Coty");
	jst.setVar('app', 'JSTemplate');


	// where the template is going to get inserted.
	jst.setTargetID('root');

	// render the template file
	jst.render();


})();