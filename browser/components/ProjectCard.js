'use strict';

import React from 'react';

function blurb(text){
	return text.split(' ').splice(0,32).join(' ');
}
export default ({project}) => (
	<li>
		<h4>{project.title}</h4>
		{ project.client ? <h5>{project.client}</h5> : null } 
		
		<p className="blurb">{blurb(project.text)}...</p>
		<p>{project.awarded}</p>
	</li>
);
