import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
function Header() {
	return (
		<div className="header">
		
		<div className="header_left">
		<IconButton>
		<MenuIcon/>
		</IconButton>
	
			<img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="/"/>
		</div>
		<div className="header_center">
		<SearchIcon/>
		<input placeholder="search" type="text"/>
		<ArrowDropDownIcon className="input_char"/>
		</div>
		<div className="header_right">
		<IconButton>
		<AppsIcon/></IconButton>
		<IconButton>
	<NotificationImportantIcon/></IconButton>
	<Avatar/>
		</div>
		</div>
	)
}

export default Header
