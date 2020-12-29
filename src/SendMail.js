import React from 'react';
import "./SendMail.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {closeSendMessage} from './features/mailSlice';
import {useDispatch} from "react-redux";
import {db}  from "./firebase"
import firebase from "firebase";

function SendMail() {
	const{register,errors,handleSubmit,watch} = useForm();
	const dispatch=  useDispatch();
	const onSubmit=(formData)=>{
		console.log(formData);

		db.collection("gmails").add(
			{
			   to:formData.to,
			   submit:formData.submit,
			   message:formData.message,
			   
			   timestamp:firebase.firestore.FieldValue.serverTimestamp()

			   
		})

		dispatch(closeSendMessage());
       
	};
	return (
		<div className="SendMail">
		<div className="SendMail_list">
			<h3>New Message</h3>
			<CloseIcon  onClick={()=> dispatch(closeSendMessage())} className="SendMail_list_close"/>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
			<input name="to" 
			placeholder="to"
			 type="text" ref={register({required:true})}/>
			 {errors.to && <p className="SendMail__error">to is required</p>}
			<input name="submit"  
			placeholder="submit" 
			type="text" ref={register({required:true})}/>
			{errors.to && <p className="SendMail__error">to is required</p>}
			<input name="message"
			 placeholder="message.."
			 className="SendMail_message" 
			 type="text" ref={register({required:true})}/>
			<div className="SendMail_options">
			<Button className="SendMail_button"
			variant="conatiner"
			type="submit"
			color="primary">Send</Button></div>
			</form>
			
			
		</div>
	)
}

export default SendMail
