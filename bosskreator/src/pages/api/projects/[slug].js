// Assuming this is your JSON data stored directly in this file for simplicity
const articles = [
  {
    "slug": "mobile-dev",
    "title": "Navigating the Future: The Evolution of Mobile Development",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "content": [
      {
        "paragraph": "The realm of mobile development has undergone a seismic shift over the past decade, evolving from simple applications designed for basic smartphones to complex ecosystems that power a significant portion of our daily digital interactions. Today, mobile development stands at the forefront of innovation, embracing new technologies like augmented reality (AR), machine learning (ML), and the Internet of Things (IoT) to create more immersive and personalized user experiences. Developers are tasked with the challenge of designing apps that are not only visually appealing and user-friendly but also optimized for performance across a wide range of devices and operating systems."
      },
      {
        "paragraph": "As we look to the future, the importance of mobile development is set to grow even further. The advent of 5G technology promises to unlock new possibilities for mobile apps, from real-time data analytics to enhanced streaming capabilities, paving the way for applications we can hardly imagine today. Meanwhile, the focus on security and privacy continues to intensify, pushing developers to adopt more robust measures to protect user data. In this ever-evolving landscape, staying abreast of the latest trends and technologies is crucial for developers aiming to create impactful and engaging mobile experiences."
      }
    ],
    "image": {
      "description": "The Dynamic World of Mobile Development",
      "url": "/articleimage/mobiledev.webp"
    }
  },
  {
    "slug": "web-dev",
    "title": "The Art and Science of Web Development",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "content": [
      {
        "paragraph": "Web development, a field that sits at the crossroads of creativity and technology, continues to evolve at an unprecedented pace. It encompasses a wide range of disciplines, from front-end design that deals with the user interface and experience, to back-end programming that focuses on the server-side functionality and database management. Developers must navigate a complex landscape of programming languages, frameworks, and tools to build websites and applications that are not only visually compelling but also performant, accessible, and secure. This dynamic domain demands a blend of artistic vision and technical prowess, as the digital experiences crafted today set the stage for the future of online interaction."
      },
      {
        "paragraph": "As we forge ahead, the importance of responsive design, user-centric approaches, and accessibility considerations becomes increasingly paramount. The rise of progressive web apps (PWAs), single-page applications (SPAs), and API-driven architectures highlights the industry's shift towards more interactive and seamless web experiences. Moreover, the integration of emerging technologies like artificial intelligence (AI) and the Internet of Things (IoT) into web development opens new avenues for innovation, pushing the boundaries of what's possible on the web. For aspiring and seasoned developers alike, staying updated with the latest trends, best practices, and emerging technologies is essential for crafting digital solutions that resonate with users across the globe."
      }
    ],
    "image": {
      "description": "Visual Representation of Web Development",
      "url": "/articleimage/webdev.webp"
    }
  },
  {
    "slug": "landing-page",
    "title": "Designing the Perfect Landing Page: A Project Overview",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "content": [
      {
        "paragraph": "The creation of a landing page is an art and science that blends aesthetics, psychology, and marketing strategies to produce a powerful tool for business growth. A well-designed landing page serves as the cornerstone of any successful online marketing campaign, offering a focused platform that showcases a product or service's value proposition. It's more than just an entry point; it's an invitation to explore, a promise of value, and a guide towards taking an action—be it subscribing to a newsletter, making a purchase, or downloading a resource. The best landing pages are those that can captivate visitors with compelling visuals and concise messaging, all while making the path to conversion as seamless as possible."
      },
      {
        "paragraph": "The development process of a landing page project requires meticulous planning, creativity, and technical proficiency. Starting with a clear understanding of the target audience, the project revolves around crafting a narrative that resonates with potential customers. Key elements such as a compelling headline, persuasive call-to-actions (CTAs), engaging visuals, and user testimonials are strategically placed to build trust and encourage engagement. With the rise of mobile browsing, responsiveness and speed optimization also play critical roles in ensuring accessibility and a positive user experience across all devices. By focusing on these aspects, a landing page can significantly increase conversion rates, turning visitors into leads and customers."
      }
    ],
    "image": {
      "description": "Design and Development of a Landing Page",
      "url": "/articleimage/landingpage.webp"
    }
  }

];

export default function handler(req, res) {
  const { slug } = req.query; // Access the slug from the URL

  // Find the article in the JSON data that matches the slug
  const article = articles.find(article => article.slug === slug);

  if (article) {
    // If an article is found, return it
    res.status(200).json(article);
  } else {
    // If no article is found, return a 404 not found status
    res.status(404).json({ message: 'Article not found' });
  }
}
