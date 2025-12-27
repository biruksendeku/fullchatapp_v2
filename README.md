# FullChatApp_v2

**Customer Support Chat Application** built with **Node.js**, **Express**, **Passport.js**, **Socket.IO**, **Nodemailer**, and **Node-Cron**.

A real-time support/chat system that allows users to communicate, with email notifications and scheduled background tasks.

---

## 🚀 Features

- 🔑 User authentication with Passport.js  
- 💬 Real-time messaging using Socket.IO  
- 📧 Email notifications via Nodemailer  
- ⏱️ Scheduled jobs using Node-Cron  
- 👀 Dynamic pages rendered with EJS  
- 📁 Static assets served from `public/`

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express  
- **Authentication:** Passport.js  
- **Realtime:** Socket.IO  
- **Email:** Nodemailer  
- **Scheduling:** Node-Cron  
- **Templating:** EJS  

---

## 📁 Project Structure
fullchatapp_v2/ ├── models/ ├── public/ ├── views/ ├── app.js ├── package.json └── .gitignore

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/biruksendeku/fullchatapp_v2.git
cd fullchatapp_v2

## Install Dependencies

npm install

## Environment variables
## Create a .env file in the project root:

PORT=3000
SESSION_SECRET=your-secret-key

EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password

## Run the app
npm start

## Open your browser at:
http://localhost:3000

## Contributing
Pull requests are welcome.
For major changes, please open an issue first to discuss what you’d like to change.

## License
MIT License

👤 Author
Biruk Sendeku
GitHub: https://github.com/biruksendeku
