<div class='container'>
	<div class="row">
		<div class="col-lg-12">
			<h1>Hello {{name}}!!!!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium hic a sint corrupti ducimus assumenda voluptatibus harum pariatur, illo, cum nesciunt molestias accusamus ratione perferendis natus dolorem cumque nisi. {{name}}
			</p>
			<hr>
			<p>
				<strong>{{app}}</strong> lets you do really cool things!
			</p>
			<p><strong>Age:</strong> {{age}}</p>
			@if( age >= 18);
				<p>You are old!</p>
			@else;
				<p>Go home kid!</p>
			@endif;
		</div>
	</div>
</div>