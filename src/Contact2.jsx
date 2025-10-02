// src/Contact2.jsx
import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import "./Contact.css";

//Criamos um estado (formData) para armazenar os dados do formulário
// useState vai receber um objeto inicial com nome e email vazios
// formData -> contém os valores atuais do formulário
// setFormData -> função que nos permite atualizar o estado
function Contact2() {
    const [formData, setFormData] = useState({ name: "", lastname: "", email: "", number: "", text: "" });

    // estado de validação 
    const [errors, setErrors] = useState({});



    // estado para controlar se o formulário foi submetido
    const [submitted, setSubmitted] = useState(false);

    // estado para simular o envio dos dados
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Efeito para lidar coma submissão do formulário com useeffect
    useEffect(() => {
        const saved=localStorage.getItem("contactForm");
        if (saved) {
            setFormData(JSON.parse(saved));// converte a string para objeto
        }
    }, []);//array vazio para correr só uma vez

    //useEffect que corre sempre formdara muda e guarda no localstorage
    useEffect(() => {
        localStorage.setItem("contactForm", JSON.stringify(formData));
    }, [formData]);// array com formData para correr sempre que formData muda

    // Função para lidar com as mudanças nos inputs (onchange)
    // Extrair o nome do campo (name) e o valor escrito (value)
    // Atualizar o estado mantendo os outros campos intactos (..prev)
    const handleChange = (e) => { // e -> evento do input
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    //Função de validação do formulário
    // Cria um objeto de erros; se vazio no fim -> formulário válido
    const validateForm = () => {
        const newErrors = {};

        // Validação do nome
        if (!formData.name) newErrors.name = "Nome é obrigatório";
        if (!formData.lastname) newErrors.lastname = "Sobrenome é obrigatório";

        // Validação do email
        if (!formData.email) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email está em formato inválido";
        }

        // Validação do número
        if (!formData.number) {
            newErrors.number = "Number is required";
        } else if (!/^\d{9}$/.test(formData.number)) {
            newErrors.number = "Numero deve conter 9 digitos";
        }

        // Validação da mensagem
        if (!formData.text) {
            newErrors.text = "Messagem obrigatória";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Função chamada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // previne o comportamento padrão do formulário (recarregar a página)
        setSubmitted(true); // marca que o formulário foi submetido
        setIsSubmitting(true); // ativa o estado de envio

        if (validateForm()) {
            // Simula um envio assíncrono (exemplo: API)
            setTimeout(() => {
                alert(`Nome: ${formData.name}\nSobrenome: ${formData.lastname}\nEmail: ${formData.email} \nNúmero: ${formData.number}\nMensagem: ${formData.text}\nObrigado por enviar o formulário!`);
               console.log("Formulário válido, enviando dados...", formData);
                setIsSubmitting(false); // desativa o estado de envio
                // Aqui você pode adicionar a lógica para enviar os dados do formulário
            }, 1000);
        } else {
            setIsSubmitting(false); // desativa o estado de envio se houver erros
            console.log("Formulário inválido, corrigir erros", errors);
        }
    };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '8px' }}>Contacte-nos</p>
                {/* Campo Nome */}
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                {/* Campo Sobrenome */}
                <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last name" />
                {/* Campo Email */}
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                {/* Campo Número (apenas números, máximo 9 dígitos) */}
                <input
                    name="number"
                    type="tel"
                    value={formData.number}
                    onChange={(e) => {
                        // Permite apenas números e até 9 dígitos
                        const value = e.target.value.replace(/\D/g, "");
                        handleChange({ target: { name: "number", value: value.slice(0, 9) } });
                    }}
                    maxLength={9}
                    pattern="[0-9]{0,9}"
                    inputMode="numeric"
                    placeholder="Number"
                />
                {/* Campo Mensagem */}
                <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Your message" />
                {/* Botão de envio */}
                <input type="submit" value={isSubmitting ? "Enviando..." : "Enviar"} disabled={isSubmitting} />

                {/* Exibe erros apenas após tentar enviar */}
                {submitted && (
                    <div>
                        <p style={{ fontWeight: 'bold', fontSize: '16px', marginTop: '12px' }}>Erros:</p>
                        {Object.values(errors).length === 0 ? (
                            <p style={{ color: "green" }}>Nenhum erro encontrado!</p>
                        ) : (
                            Object.values(errors).map((error, index) => (
                                <p key={index} style={{ color: "red", margin: "4px 0" }}>{error}</p>
                            ))
                        )}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Contact2;