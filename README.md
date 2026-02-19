# Montfort Sayamika - Portfolio Website

A modern, responsive portfolio website built with Node.js and Express, showcasing skills, projects, education, and contact information.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Interactive Elements**: Hover effects, animations, and dynamic interactions
- **Contact Form API**: Backend API endpoint for handling contact form submissions
- **Email Integration**: Nodemailer integration for sending emails (configurable)
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3 (with CSS Variables and Flexbox/Grid), Vanilla JavaScript (ES6+)
- **Email**: Nodemailer
- **Fonts**: Google Fonts (Inter)

## Project Structure

```
portfolio/
├── server.js          # Express server and API routes
├── package.json        # Node.js dependencies and scripts
├── public/            # Static files directory
│   ├── index.html     # Main HTML file
│   ├── styles.css     # All styling and responsive design
│   └── script.js      # JavaScript for interactivity
├── .env               # Environment variables (create this)
└── README.md          # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone or download this repository**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure email (optional)**:
   
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   ```
   
   **Note**: For Gmail, you'll need to:
   - Enable 2-Factor Authentication
   - Generate an App Password (not your regular password)
   - Use the App Password in `EMAIL_PASS`

   If you don't configure email, the contact form will still work but emails won't be sent. The API will return an error message.

## Running the Application

### Development Mode (with auto-reload):

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when files change.

### Production Mode:

```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### POST `/api/contact`

Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Portfolio server is running",
  "timestamp": "2025-02-19T20:00:00.000Z"
}
```

## Customization

### Colors

Edit the CSS variables in `public/styles.css` to change the color scheme:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary accent */
    --text-primary: #1e293b;     /* Main text color */
    --text-secondary: #64748b;  /* Secondary text */
    /* ... */
}
```

### Content

- Edit `public/index.html` to update your information
- Modify sections, projects, skills, etc. directly in the HTML
- Update contact information in the contact section

### Server Configuration

- Edit `server.js` to modify server settings
- Change port in `.env` file or `server.js`
- Configure email settings in `.env` file

## Deployment

### Deploying to Heroku:

1. Create a `Procfile`:
   ```
   web: node server.js
   ```

2. Set environment variables in Heroku dashboard:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   ```

3. Deploy:
   ```bash
   git push heroku main
   ```

### Deploying to other platforms:

- **Vercel**: Use the Vercel CLI or connect your GitHub repository
- **Railway**: Connect your repository and set environment variables
- **DigitalOcean**: Use App Platform or deploy to a Droplet
- **AWS**: Use Elastic Beanstalk or EC2

## Sections

1. **Hero**: Introduction with name, title, and call-to-action buttons
2. **About**: Professional profile and career objective
3. **Skills**: Programming languages, technologies, and tools
4. **Projects**: Featured projects with descriptions and technologies
5. **Education**: Academic qualifications and certifications timeline
6. **Contact**: Contact information and contact form with API integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight Express server
- Fast loading times
- Optimized animations
- Efficient CSS and JavaScript
- Static file serving for optimal performance

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 3000 |
| `EMAIL_USER` | Email address for sending emails | No | sayamikamont53@gmail.com |
| `EMAIL_PASS` | Email password/app password | No | (empty) |

## Troubleshooting

### Contact form not sending emails:

1. Check that `.env` file exists and has correct credentials
2. For Gmail, ensure you're using an App Password, not your regular password
3. Check server logs for error messages
4. Verify that `EMAIL_USER` and `EMAIL_PASS` are set correctly

### Port already in use:

Change the port in `.env` file or modify `server.js`:
```javascript
const PORT = process.env.PORT || 3001; // Use different port
```

## Future Enhancements

Potential additions you might consider:
- Database integration for storing contact form submissions
- Blog section with dynamic content
- Dark mode toggle
- Multi-language support
- Portfolio gallery with images
- Downloadable CV/resume link
- Admin dashboard for managing content
- Analytics integration

## License

This portfolio is personal and proprietary. Feel free to use it as inspiration for your own portfolio!

## Contact

**Montfort Sayamika**
- Email: sayamikamont53@gmail.com
- Phone: +265 994 465 061 / +265 881 063 719
- Location: Blantyre, Malawi

---

Built with ❤️ using Node.js and Express for showcasing digital transformation skills
