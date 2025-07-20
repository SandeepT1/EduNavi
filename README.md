EduNavi
Personalized AI Assistant for Learning Pathways
EduNavi is an AI-driven platform designed to guide learners through customized study journeys. Leveraging Retrieval-Augmented Generation (RAG) within an n8n workflow, EduNavi dynamically adapts to each user’s goals, performance data, and preferences to deliver precise, actionable learning roadmaps.
🚀 Utility
Adaptive Learning Paths: Automatically generates study sequences tailored to individual strengths, gaps, and pace.
Conversational Onboarding: Uses a chat interface to understand learner objectives and constraints before recommending modules.
Performance-Aware Roadmapping: Parses uploaded score reports (e.g., XLSX) and updates the roadmap in real time based on evolving performance.
Scalable Integration: Easily plugs into existing EdTech platforms (LMS, apps) thanks to n8n’s low-code orchestration.
📥 Installation & Setup
Clone the repo:
Install dependencies for parser and agent modules:
Import n8n workflows:
Start your n8n server.
In the Editor UI, import each JSON file from n8n-workflows/.
Configure environment variables:
💡 Usage
As a Service: Trigger workflows via REST endpoints exposed by n8n.
Embedded Chat: Use the web UI or embed your own chat client to collect user context and display roadmaps.
🤝 Contributing
Fork the repo and create a feature branch.
Write tests in tests/ for new functionality.
Submit a pull request with clear description and testing steps.
