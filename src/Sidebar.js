import "./Sidebar.css"
import React from 'react';
import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
/*import LabImportantIcon from "@material-ui/icons/LabImportant"*/
import PersonIcon from "@material-ui/icons/Person";
import {useDispatch} from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {
	const dispatch=useDispatch();
	return (
<div className="sidebar">
		<Button onClick={()=>dispatch(openSendMessage())} startIcon={<AddIcon fontSize="large"/>} className="sidebar_compose">Compose</Button>
		
		<SidebarOption Icons={InboxIcon} title="inbox" number={123}/>
		<SidebarOption Icons={StarIcon} title="star" />
		<SidebarOption Icons={AccessTimeIcon} title="access"/>
		{/*<SidebarOption Icons={LabImportantIcon} title="nmgfdng"/> */}
		


		<div className="sidebar_footer">
		<div className="sidebar_footer_icons">
		<IconButton>
		<PersonIcon/></IconButton>
		<IconButton>
		<PersonIcon/></IconButton>
		<IconButton>
		<PersonIcon/></IconButton>
		

		</div>

		</div>
		</div>
	)
}

export default Sidebar;

