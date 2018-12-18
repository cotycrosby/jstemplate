var main = (function(){

	var string = `
		<div class='container'>
			<div class="row">
				<div class="col-lg-12">
					<h1>Hello {{name}}!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium hic a sint corrupti ducimus assumenda voluptatibus harum pariatur, illo, cum nesciunt molestias accusamus ratione perferendis natus dolorem cumque nisi. {{name}}
					</p>
					<hr>
					<p>
						<strong>{{app}}</strong> lets you do really cool things!
					</p>
				</div>
			</div>
		</div>
	`;


	


	
	crest.setTemplateString(string);
	crest.setVar("name", "Jake");
	crest.setVar('app', 'Crest');
	crest.setTargetID('root');
	crest.setLayout('layout.tpl');
	crest.render();



})();