import React from 'react';
import "./MailList.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import { IconButton } from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
function MailList() {
	const history=useHistory();
	return (
		<div className="mail">
		<div className="maillist_tools">
		<div className="maillist_tools_left">
		<IconButton onClick={()=>history.push("/")}>
		<ArrowBackIcon/>
		</IconButton>
		<IconButton>
		<MoveToInboxIcon/>
		</IconButton>
		<IconButton>
		<ErrorIcon/>
		</IconButton>
		<IconButton><DeleteIcon/>
		</IconButton>
		<IconButton><EmailIcon/>
		</IconButton>
		</div>
		<div className="maillist_tools_right">
		<IconButton>
		<UnfoldMoreIcon/></IconButton>
		<IconButton>
		<PrintIcon/>
		</IconButton>
		<IconButton>
		<ExitToAppIcon/></IconButton>
		</div>
		</div>
		<div className="mailbody">
		<div className="mailbody_header">
		<h2>subject</h2>
		<LabelImportantIcon className="mailbody_important"/>
		<p>title</p>
		<p>time</p>
		</div>
		<div className="mail_message">
		this is a message
		</div>
		</div>
		
		</div>
	)
}

export default MailList;
