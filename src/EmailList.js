import React, { useEffect, useState } from 'react';
import {Checkbox, IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RedoIcon from '@material-ui/icons/Redo';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import "./EmailList.css";
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';
function EmailList() {
	const [emails,setEmails] =useState([]);

	useEffect(() => {
		db.collection("gmails").orderBy("timsestamp",'desc')
		.onSnapshot((snapshot)=>
		setEmails
		(
			snapshot.docs.map((doc)=>(
				{
					id:doc.id,
					data:doc.data()
				}
			))

	));
	
	}, []);
	console.log(setEmails)
	
	return (
		<div className="emailList">
		<div className="emailListsetting">
		<div className="emailListsettingleft"> 
		<Checkbox/>
		     <IconButton>
		              <ArrowDownwardIcon/>
		</IconButton>
		<IconButton>
		            <RedoIcon/></IconButton>
		<IconButton>
		             <MoreHorizIcon/></IconButton>
		</div>
		<div className="emailListsettingright">
		<IconButton>
		      <ChevronLeftIcon/></IconButton>
		<IconButton>
		        <ChevronRightIcon/></IconButton>
		<IconButton>
		        <KeyboardHideIcon/></IconButton>
		<IconButton>
		      <SettingsIcon/></IconButton>
		</div>
		</div>
		<div className="emailList_section">
		<Section Icon={InboxIcon} title="primary" color="red" selected />
		<Section Icon={PeopleIcon} title="people"  color="skyblue"/>
		<Section Icon={LocalOfferIcon} title="promotion" color="green"/>
		</div>
		<div className="emailList_List">
		{emails.map(({id,data:{to,subject,message,timestamp}})=>(
			<EmailRow
			id={id}
			key={id}
		title={to}
		description={message}
		subject={subject}
		time={new Date(timestamp?.seconds*1000).toUTCString()}
		/>

		))}

		<EmailRow
		title="muhje mohabat hai"
		description=" m tera deewana"
		subject="true lub"
		time="16"/>
		</div>
		
	</div>
	)
}

export default EmailList;
