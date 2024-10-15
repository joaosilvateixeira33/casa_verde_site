import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    AssinaturaNewsletterContainer, 
    AssinaturaNewsletterContent, 
    AssinaturaNewsletterContentText, 
    AssinaturaNewsletterTitle, 
    AssinaturaNewsletterTitleStrong,
    AssinaturaNewsletterParagraph,
    Form,
    FieldGroup,
    InputEmail,
    Button
} from './styles';

export default function AssinaturaNewsletter() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);

        if (!validateEmail(value)) {
            setError('Email inválido');
        } else {
            setError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            toast.error('Por favor, insira um email válido');
            return;
        }
    
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            if (response.ok) {
                toast.success('Inscrição realizada com sucesso!');
                setEmail('');
            } else {
                const errorMessage = await response.text();
                console.error('Erro ao enviar o e-mail:', errorMessage);
                toast.error('Erro ao enviar o e-mail de confirmação');
            }
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            toast.error('Erro ao enviar o e-mail de confirmação');
        }
    };
    

    return (
        <AssinaturaNewsletterContainer>
            <AssinaturaNewsletterContent>
                <AssinaturaNewsletterContentText>
                    <AssinaturaNewsletterTitle>
                        Sua casa com as
                        <br />
                        <AssinaturaNewsletterTitleStrong>
                            melhores <br /> plantas
                        </AssinaturaNewsletterTitleStrong>
                    </AssinaturaNewsletterTitle>
                    <AssinaturaNewsletterParagraph>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </AssinaturaNewsletterParagraph>
                </AssinaturaNewsletterContentText>

                <Form onSubmit={handleSubmit} action="/">
                    <FieldGroup>
                        <InputEmail 
                            placeholder='Insira seu E-mail'
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <Button type="submit">
                            Assinar Newsletter
                        </Button>
                    </FieldGroup>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </Form>
            </AssinaturaNewsletterContent>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </AssinaturaNewsletterContainer>
    );
}
