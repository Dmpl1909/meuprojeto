// encontrei este exemplo de forms em https://react-hook-form.com
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import "./Contact.css";

function Contact() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <p style={{fontWeight:'bold',fontSize:'20px',marginBottom:'8px'}}>Contact</p>
                <input {...register("firstName")} placeholder="First name" />
                <input {...register("lastname", { required: true })} placeholder="Last name" />
                <input {...register("email")} placeholder="Email" />
                <input type="submit" value="Enviar" />
                <p>{data}</p>
            </form>
        </div>
    );
}

export default Contact;