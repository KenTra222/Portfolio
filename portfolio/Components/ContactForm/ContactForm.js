
import styles from './ContactForm.module.scss'
import { useState, useRef } from 'react';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import avatar from '/img/avataaars.png'

{/*needs to send information to my personal email*/}



export default function ContactForm() {
  const form = useRef()
  
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => {
    e.preventDefault();
    
  };
  console.log(errors);
  const sendEmail = (e) => {
    e.preventDefault();
    
    
    emailjs.sendForm('service_8gizhqi', 'template_b97bbqi', form.current, 'Mfd4LCYeJOiwD1XzY')
    .then((result) => {
        alert("Thank you Will be in touch soon" )
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <div className={styles.contactForm}>
        <div className={styles.contactDetails}>
          <p className={styles.ContactMessage}>
            Ready to solve a problem? please leave a message and I will gladly reach out withing 1-3 business days.
            </p>
          <span>or reach me personally @ my email Kentraviousc@gmail.com</span>
          <div className={styles.avatar}>
            <Image src={avatar}
            layout="responsive"
            objectFit='contain'
            
            width={100}
            height={100}/>
          </div>
      </div>

    <form ref={form} className={styles.form} onSubmit={handleSubmit(onSubmit) && sendEmail}>

      

        <label>Name</label>
        <input  name='user_name' className={styles.input} type="text"  placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
        <label>Email</label>
        <input name='user_email' className={styles.input} type="text"  placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <label>Message</label>
        <textarea name='message' className={styles.messageBox} placeholder='Message' {...register("Message", {})} />

        <input className={styles.submitBtn} type="submit" />
    </form>
    </div>
  );
}