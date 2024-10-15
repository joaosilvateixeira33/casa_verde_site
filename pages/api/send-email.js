import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        const msg = {
            to: email,
            from: 'joaosilvamarcos2022@gmail.com',
            subject: 'Boas-vindas à Casa Verde!',
            text: `Olá, Usuário. \nBoas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!`,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'E-mail enviado com sucesso!' });
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            res.status(500).json({ message: 'Erro ao enviar o e-mail' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}