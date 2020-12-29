import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import "./EmailRow.css";
import {useHistory} from "react-router-dom"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
function EmailRow({title,description,id,subject,time}) {
	const history=useHistory();
	return (
		<div onClick={()=>history.push('/mail')} className="EmailRow">
		<div className="EmailRow_options">
		<Checkbox/>
		<IconButton>
		<StarBorderIcon/>
		</IconButton>
		<IconButton>
		<LabelImportantIcon/>
		</IconButton>
		</div>
		<h3 className="EmailRow_title">
		{title}
		</h3>
		
		<div className="EmailRow_message">
		<h4>
		{subject}{" "}
		<span className="EmailRow_description">-{description}</span>
		</h4>
		</div>	
		<p className="EmailRow_time">
		{time}</p>
		</div>
	)
}

export default EmailRow
