import React from 'react'

// The Gif object, actually an iframe
export default ({embed_url: gif, title: title}) => (
	<div className="giphy-embed">
		<div>{title}</div>
		<iframe src={gif} title={title} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
	</div>
);