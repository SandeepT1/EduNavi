// Six-Month Java Learning Plan Enhanced Renderer
// This script creates an enhanced visual representation of the six-month Java learning plan

function createSixMonthJavaLearningPlan() {
  // Create the enhanced Java learning plan structure
  const javaLearningPlan = {
    elements: [
      // Introduction Card
      {
        type: "card",
        title: "6-Month Java Learning Path",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Embarking on a six-month journey to learn Java is an exciting endeavor! This structured plan is tailored to build your skills step-by-step and includes various online resources to ensure you have everything you need along the way.",
        buttons: [
          {
            text: "Start Your Java Journey",
            url: "https://docs.oracle.com/javase/tutorial/"
          }
        ]
      },

      // Month 1 Header
      {
        type: "text",
        text: "<h2 style='margin-top: 24px; color: #4f46e5; font-size: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;'>Month 1: Java Fundamentals</h2>"
      },

      // Month 1 Card
      {
        type: "card",
        title: "Java Fundamentals",
        description: "Understand basic Java syntax and structure. Learn about variables, data types, and operators.",
        buttons: [
          {
            text: "Begin Month 1",
            url: "#month1"
          }
        ]
      },

      // Month 1 Resources
      {
        type: "list",
        title: "Resources:",
        ordered: false,
        items: [
          "<strong>Pluralsight Course</strong>: \"Java Fundamentals: The Java Language\" - A comprehensive course that will guide you through the basics.",
          "<strong>YouTube</strong>: \"Java Programming Tutorial for Beginners\" by Programming with Mosh - An engaging series that covers fundamentals.",
          "<strong>Book/PDF</strong>: \"Head First Java\" by Kathy Sierra & Bert Bates - A downloadable and interactive book for beginners."
        ]
      },

      // Month 2 Header
      {
        type: "text",
        text: "<h2 style='margin-top: 24px; color: #4f46e5; font-size: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;'>Month 2: Object-Oriented Programming (OOP) with Java</h2>"
      },

      // Month 2 Card
      {
        type: "card",
        title: "Object-Oriented Programming (OOP) with Java",
        description: "Master the concepts of classes, objects, inheritance, polymorphism, and encapsulation. Write simple OOP programs.",
        buttons: [
          {
            text: "Begin Month 2",
            url: "#month2"
          }
        ]
      },

      // Month 2 Resources
      {
        type: "list",
        title: "Resources:",
        ordered: false,
        items: [
          "<strong>Coursera</strong>: \"Object Oriented Programming in Java\" by UC San Diego - Offers a certificate and deep dive into OOP concepts.",
          "<strong>FreeCodeCamp YouTube</strong>: \"Java OOP Course\" - Free, detailed video lessons.",
          "<strong>Oracle Tutorials</strong>: Java Documentation for OOP - Clear examples and explanations."
        ]
      },

      // Month 3 Header
      {
        type: "text",
        text: "<h2 style='margin-top: 24px; color: #4f46e5; font-size: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;'>Month 3: Java Collections and Data Structures</h2>"
      },

      // Month 3 Card
      {
        type: "card",
        title: "Java Collections and Data Structures",
        description: "Understand collections (List, Set, Map) and when to use them. Learn basic data structures (Arrays, LinkedLists, Stacks, Queues).",
        buttons: [
          {
            text: "Begin Month 3",
            url: "#month3"
          }
        ]
      },

      // Month 3 Resources
      {
        type: "list",
        title: "Resources:",
        ordered: false,
        items: [
          "<strong>Pluralsight</strong>: \"Java Collections Framework\" - Focused course on collections.",
          "<strong>GeeksforGeeks</strong>: Data Structure Tutorials - A detailed explanation of Java data structures.",
          "<strong>YouTube</strong>: \"Java Collections Framework Full Course\" by Telusko - Free video course."
        ]
      },

      // Month 4 Header
      {
        type: "text",
        text: "<h2 style='margin-top: 24px; color: #4f46e5; font-size: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;'>Month 4: Exception Handling, I/O, and File Handling</h2>"
      },

      // Month 4 Card
      {
        type: "card",
        title: "Exception Handling, I/O, and File Handling",
        description: "Understand exception handling mechanisms. Learn file handling in Java and basics of input/output processing.",
        buttons: [
          {
            text: "Begin Month 4",
            url: "#month4"
          }
        ]
      },

      // Month 4 Resources
      {
        type: "list",
        title: "Resources:",
        ordered: false,
        items: [
          "<strong>Udacity</strong>: \"Java Programming Basics\" - Covers exception handling and I/O basics.",
          "<strong>Oracle Java Tutorials</strong>: Exception Handling and Java I/O - Official and authoritative resources.",
          "<strong>YouTube</strong>: \"Java Beginner Tutorial - Exception Handling\" series by Derek Banas."
        ]
      },

      // Month 5 Header
      {
        type: "text",
        text: "<h2 style='margin-top: 24px; color: #4f46e5; font-size: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;'>Month 5: Advanced Java Concepts</h2>"
      },

      // Month 5 Card
      {
        type: "card",
        title: "Advanced Java Concepts",
        description: "Explore multithreading, concurrency, and networking. Understand Java development tools and debugging techniques.",
        buttons: [
          {
            text: "Begin Month 5",
            url: "#month5"
          }
        ]
      },

      // Month 5 Resources
      {
        type: "list",
        title: "Resources:",
        ordered: false,
        items: [
          "<strong>Pluralsight</strong>: \"Java Multithreading and Concurrency\" - A dedicated course for advanced topics.",
          "<strong>Java Code Geeks PDFs</strong>: Download technical PDFs on advanced Java topics.",
          "<strong>Medium Articles</strong>: Search for articles on Java concurrency and best practices."
        ]
      },

      // Month 6 Header
      {
        type: "text",
        text: "<h2 style='margin-top: 24px; color: #4f46e5; font-size: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;'>Month 6: Practical Application and Project Development</h2>"
      },

      // Month 6 Card
      {
        type: "card",
        title: "Practical Application and Project Development",
        description: "Apply what you've learned by creating a real-world Java project. Understand basics of Java frameworks like Spring Boot for backend development.",
        buttons: [
          {
            text: "Begin Month 6",
            url: "#month6"
          }
        ]
      },

      // Month 6 Resources
      {
        type: "list",
        title: "Resources:",
        ordered: false,
        items: [
          "<strong>Udemy</strong>: \"Spring & Hibernate for Beginners (includes Spring Boot)\" - Gain familiarity with a popular Java framework.",
          "<strong>GitHub</strong>: Explore repositories with Java projects to learn from real code.",
          "<strong>Java Communities</strong>: Participate in forums like Stack Overflow and Reddit's r/learnjava to share progress, get feedback, and seek help."
        ]
      },

      // Momentum-Building Tips
      {
        type: "text",
        text: "<h3 style='margin-top: 24px; color: #10b981; font-size: 18px;'>Momentum-Building Tips</h3>"
      },

      {
        type: "list",
        title: "",
        ordered: false,
        items: [
          "<strong>Daily Practice</strong>: Allocate time every day for coding to build strong habits.",
          "<strong>Join Communities</strong>: Engage with communities like LeetCode for coding challenges.",
          "<strong>Set Small Goals</strong>: Break down learning into manageable tasks and celebrate small victories."
        ]
      },

      // Conclusion
      {
        type: "card",
        title: "Your Java Journey Awaits",
        description: "By following this plan, not only will you learn Java from scratch but also gain confidence to build your own Java projects. Stay persistent, and don't hesitate to reach out for help when needed. Happy coding!",
        buttons: [
          {
            text: "Begin Your Journey",
            url: "https://docs.oracle.com/javase/tutorial/getStarted/index.html"
          }
        ]
      }
    ]
  };

  return javaLearningPlan;
}

// Function to display the enhanced six-month Java learning plan
function showSixMonthJavaLearningPlan() {
  const javaLearningPlan = createSixMonthJavaLearningPlan();
  processResponse(javaLearningPlan);
}
