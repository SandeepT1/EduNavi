# EduNavi

**Personalized AI Assistant for Learning Pathways**

EduNavi is an AI-driven platform designed to guide learners through customized study journeys. Leveraging Retrieval-Augmented Generation (RAG) within an n8n workflow, EduNavi dynamically adapts to each user’s goals, performance data, and preferences to deliver precise, actionable learning roadmaps.

## Table of Contents
1. [🚀 Utility](#-utility)
2. [📥 Installation & Setup](#-installation--setup)
3. [💡 Usage](#-usage)
4. [🤝 Contributing](#-contributing)

---

## 🚀 Utility
- **Adaptive Learning Paths**: Automatically generates study sequences tailored to individual strengths, gaps, and pace.
- **Conversational Onboarding**: Uses a chat interface to understand learner objectives and constraints before recommending modules.
- **Performance-Aware Roadmapping**: Parses uploaded score reports (e.g., XLSX) and updates the roadmap in real time based on evolving performance.
- **Scalable Integration**: Easily plugs into existing EdTech platforms (LMS, apps) thanks to n8n’s low-code orchestration.

---

## 📥 Installation & Setup
1. **Clone the repo:**
   ```bash
   git clone <repo-url>
   ```
2. **Install dependencies for parser and agent modules.**
3. **Import n8n workflows.**
4. **Start your n8n server.**
5. **In the Editor UI, import each JSON file from `n8n-workflows/`.**
6. **Configure environment variables.**

---

## 💡 Usage
- **As a Service:** Trigger workflows via REST endpoints exposed by n8n.
- **Embedded Chat:** Use the web UI or embed your own chat client to collect user context and display roadmaps.

---

## 🤝 Contributing
1. Fork the repo and create a feature branch.
2. Write tests in `tests/` for new functionality.
3. Submit a pull request with clear description and testing steps.
