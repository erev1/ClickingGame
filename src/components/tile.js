import React from "react";


const Tile = (props) => {
	let st = {backgroundImage: 'url(' + props.imgUrl + ')'};
    
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