import React from 'react'
import "./SidebarOption.css";

function SidebarOption({Icons,title,number}) {
	return (
		<div className="sidebarOption">
		<Icons/>
		<h2>{title}</h2>
		<p>{number}</p>
			
		</div>
	)
}

export default SidebarOption
