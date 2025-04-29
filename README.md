# AI-Powered Prompt Generator for Learning

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-13.x-black)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green)](https://nodejs.org/)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini-blue)](https://ai.google.dev/)

An intelligent web application that transforms how students interact with course materials by generating structured, AI-powered learning prompts and personalized quizzes.

</--- ![Project Demo Screenshot](link) --->

## ✨ Features

- **Course Structure Analysis**: AI-generated breakdown of key learning units based on course names
- **Intelligent Prompt Generation**: Thoughtful, structured prompts for deeper learning and better AI interactions
- **Personalized Weakness-Based Quizzes**: Custom assessments focused on challenging topics
- **Modern Tech Stack**: Built with Next.js, Node.js/Express, and Gemini AI
- **Clean, Minimal Interface**: Distraction-free learning environment with intuitive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Google Cloud account (for Gemini AI API access)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ai-prompt-generator.git
   cd ai-prompt-generator
   ```

2. Install dependencies
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up environment variables
   ```bash
   # In the backend directory
   cp .env.example .env
   ```
   Edit the `.env` file and add your Google Cloud API credentials

4. Start the development servers
   ```bash
   # Start backend server (from backend directory)
   npm run dev
   
   # Start frontend server (from frontend directory)
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 🔧 Architecture

### Frontend
- **Next.js**: React framework with server-side rendering
- **Responsive UI**: Mobile-friendly interface with dichromatic color scheme
- **API Integration**: Seamless communication with backend services

### Backend
- **Node.js/Express**: RESTful API endpoints
- **Gemini AI Integration**: Using `@google-cloud/aiplatform` for intelligent prompt generation
- **Security**: Proper API key handling and request validation

## 📊 Project Structure

```
learn-pgt/
├── public/                # Static assets
│   └── (fonts, images)
├── src/
│   ├── app/               # App Router (Next.js 13+)
│   │   ├── (root layout)
│   │   ├── api/           # API routes (if needed)
│   │   ├── components/    # Reusable UI components
│   │   │   ├── CourseInputForm.jsx
│   │   │   ├── PromptDisplay.jsx
│   │   │   ├── WeaknessInput.jsx
│   │   │   └── QuizGenerator.jsx
│   │   ├── lib/           # Utility functions & services
│   │   │   ├── aiService.js   # Gemini API calls
│   │   │   └── prompts.js     # Prompt templates
│   │   ├── styles/        # Global CSS
│   │   │   └── globals.css
│   │   └── page.jsx       # Main page
│   └── models/            # Data models (if needed)
├── next.config.js         # Next.js config
├── package.json
└── README.md
```

## 🔮 Future Roadmap

- **User Accounts**: Save prompts, track progress, and maintain history
- **Multiple LLM Support**: Integration with additional AI models (OpenAI, Claude, Ollama)
- **Community Features**: Sharing and rating effective prompts
- **Advanced Analytics**: Topic weighting based on exam relevance
- **Mobile App**: Native mobile experience

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Google Gemini AI](https://ai.google.dev/) for providing the AI capabilities
- [Next.js](https://nextjs.org/) for the frontend framework
- [Express](https://expressjs.com/) for the backend server
- All the contributors and supporters of this project

---

Built with ❤️ for students. Enhance your learning journey with AI-powered prompts!
