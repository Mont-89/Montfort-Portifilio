const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid email address' 
            });
        }

        // Configure nodemailer transporter
        // Note: You'll need to configure this with your email service
        // For Gmail, you'll need an App Password
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'sayamikamont53@gmail.com',
                pass: process.env.EMAIL_PASS || '' // Use App Password for Gmail
            }
        });

        // Email content
        const mailOptions = {
            from: email,
            to: 'sayamikamont53@gmail.com',
            subject: `Portfolio Contact Form: Message from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><small>Sent from Montfort Sayamika Portfolio Website</small></p>
            `,
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ 
            success: true, 
            message: 'Thank you for your message! I will get back to you soon.' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later or contact me directly at sayamikamont53@gmail.com' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Portfolio server is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Portfolio server is running on http://localhost:${PORT}`);
    console.log(`📧 Contact form endpoint: http://localhost:${PORT}/api/contact`);
    console.log(`💡 To enable email functionality, set EMAIL_USER and EMAIL_PASS environment variables`);
});
