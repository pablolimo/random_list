import React from 'react'

// The Gif object, actually an iframe
export default ({title: title}) => (
	<div className="label animate-flicker">
		{title}
	</div>
)