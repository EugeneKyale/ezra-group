/**
 * External Dependencies
 */
import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

/**
 * Internal Dependencies
 */
import Spinner from "../Spinner";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
	const [responseErrors, setResponseErrors] = useState([]);
	const [responseSuccess, setResponseSuccess] = useState(false);

	const sendEmail = ( object ) => {
		emailjs.send( "service_oyv1kpl", "template_5f1dq0p", object, "bGHPZfk19DSzb_yKV" )
			.then( () => {
				setResponseSuccess( true );
			}, ( error ) => {
				setResponseErrors( error.text );
			})
	}

	return (
		<div className={styles.contactForm}>
			<Formik
				className="invite-users-form__form"
				initialValues={{}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email( "Please enter a valid email address" )
						.required( "You are required to enter your email address" ),
					name: Yup.string().required(
						"You are required to enter your full name"
					),
				})}
				onSubmit={ ( values, actions ) => {
					setTimeout( () => {
						sendEmail( values )
						actions.setSubmitting( false )
					}, 1000)
				}}
			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					errors,
					touched,
				}) => (
					<form
						className={ styles.contactForm__form }
						noValidate={ false }
						autoComplete="off"
						onSubmit={ handleSubmit }
					>
						<div className={ styles.contactForm__formFlex }>
							<div>
								<Form.Control
									type="text"
									name="name"
									placeholder="Full Name"
									onBlur={ handleBlur }
									onChange={ handleChange }
									value={ values.name }
									className={ ( errors.name && touched.name ? " is-invalid" : "" ) }
									required
								/>
								<ErrorMessage
									name="name"
									component="div"
									className={ styles.contactForm__form_invalid }
								/>
							</div>

							<div>
								<Form.Control
									type="email"
									name="email"
									placeholder="Email"
									onBlur={ handleBlur }
									onChange={ handleChange }
									value={ values.email }
									className={ ( errors.email && touched.email ? " is-invalid" : "" ) }
									required
								/>
								<ErrorMessage
									name="email"
									component="div"
									className={ styles.contactForm__form_invalid }
								/>
							</div>
						</div>

						<div className={ styles.contactForm__formFull }>
							<Form.Control
								as="textarea"
								rows="5"
								name="message"
								placeholder="Message"
								onBlur={ handleBlur }
								onChange={ handleChange }
								value={ values.message }
							/>
						</div>

						{ responseSuccess ? (
							<p
								style={{
									fontSize: "16px",
									color: "green",
									marginBottom: "30px",
									lineHeight: 1
								}}
							>
								Inquiry sent successfuly, we'll get back to you via email shortly.
							</p>
						) : (
								<p
									style={{
										color: "#f5222d",
										marginBottom: "15px",
										lineHeight: 1
									}}
								>
									{ responseErrors }
								</p>
							)}

						<div className={ styles.contactForm__button }>
							<Button 
								type="submit" 
								disabled2={ isSubmitting }
								disabled
							>
								{ isSubmitting ? <Spinner /> : "Submit" }
							</Button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
