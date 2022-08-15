import Header from "../Components/Header/Header"
import ContactForm from "../Components/ContactForm/ContactForm"

function Contact(){
    return(
        <div>
            <Header/>
            <h2>Get in Contact with me</h2>
            <p>Thank you for choosing to contact me please leave a message and I will gladly reach out withing 1-3 business days.</p>
            <ContactForm/>
        </div>
    )
}

export default Contact