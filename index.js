import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

// Resolve the current directory path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Security and performance middleware
app.use(helmet());
app.use(compression());
app.use(cors());

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname));

// Routes
// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Services page
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

// Portfolio page
app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/portfolio.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Blog page
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/blog.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'));
});

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// API Routes
// Contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    // Log the contact form submission
    console.log('📧 New Contact Form Submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('─────────────────────────────');
    
    // Here you would typically save to database or send email
    res.json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
    });
});

// Newsletter subscription
app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    
    console.log(`📬 Newsletter Subscription: ${email}`);
    
    res.json({ 
        success: true, 
        message: 'Successfully subscribed to our newsletter!' 
    });
});

// Project inquiry
app.post('/api/project-inquiry', (req, res) => {
    const { name, email, projectType, budget, description } = req.body;
    
    console.log('💼 New Project Inquiry:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Project Type: ${projectType}`);
    console.log(`Budget: ${budget}`);
    console.log(`Description: ${description}`);
    console.log('─────────────────────────────');
    
    res.json({ 
        success: true, 
        message: 'Project inquiry received! We will contact you within 24 hours.' 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!', 
        message: 'Internal server error' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 CodeDev.Official Server Started!');
    console.log('═══════════════════════════════════════');
    console.log(`💻 Website: http://localhost:${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📅 Started: ${new Date().toLocaleString()}`);
    console.log('═══════════════════════════════════════');
    console.log('📊 Available Routes:');
    console.log('   GET  /           - Homepage');
    console.log('   GET  /about      - About Us');
    console.log('   GET  /services   - Our Services');
    console.log('   GET  /portfolio  - Portfolio');
    console.log('   GET  /blog       - Blog');
    console.log('   GET  /contact    - Contact');
    console.log('   GET  /admin      - Admin Panel');
    console.log('   POST /api/contact - Contact Form');
    console.log('   POST /api/newsletter - Newsletter');
    console.log('   POST /api/project-inquiry - Project Inquiry');
    console.log('═══════════════════════════════════════');
});

export default app;
