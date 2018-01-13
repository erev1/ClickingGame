import React from "react";


const Navbar = (props) =>
	<div>
		<nav class="navbar">
			<ul>
				<li class="brand">
					<a href="/">Clicky Game</a>
				</li>
				<li class="">Click an image to begin!</li>
				<li>Score: {props.score} | Top Score: {props.topScore}</li></ul>
		</nav>
	</div>;
	

export default Navbar;