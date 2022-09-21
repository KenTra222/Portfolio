
import styles from './ContactForm.module.scss'

import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.ContactMessage}>
        Ready to solve a problem? please leave a message and I will gladly reach out withing 1-3 business days. 
      </p>
      <p>or reach me personally @ Kentraviousc@gmail.com</p>
      <input className={styles.input} type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input className={styles.input} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <textarea className={styles.messageBox} placeholder='Message' {...register("Message", {})} />

      <input className={styles.submitBtn} type="submit" />
    </form>
  );
}