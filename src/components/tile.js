import React from "react";


const Tile = (props) => {
	// This would be a good spot to use es6 template literal strings (ie { backgroundImage: `url(${ props.imgUrl })` })
	let st = {backgroundImage: 'url(' + props.imgUrl + ')'};
    
 		// I think it would be more appropriate to use an image tag here and set the src to props.imgUrl.
 		// Also, when setting the class of an element in jsx, you need to use `className`.
 		// Also also, since this is rendered as apart of a list, you should assign a `key` property
 		// so that React can know which element is which (the id property would serve this purpose well).
    return (
	<div 
	role="img" 
	aria-label="click item" 
	class="click-item " 
	style={st}
	onClick = {props.handleClick}
	id = {props.id}>
	</div>
);
}

export default Tile;