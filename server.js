require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configurar o transporte de e-mail (usando Gmail como exemplo)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS  // Sua senha ou App Password
    }
});
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS ? '*******' : 'Não definido');

// Rota para enviar e-mail
app.post('/enviar-email', async (req, res) => {
    const { nome, email, celular, complemento } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'matheusparizoti00@gmail.com',
        subject: 'Novo Contato do Portfólio',
        text: `Nome: ${nome}\nE-mail: ${email}\nCelular: ${celular}\nMensagem: ${complemento}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao enviar e-mail' });
    }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
