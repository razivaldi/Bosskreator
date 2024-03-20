// Assuming this is your JSON data stored directly in this file for simplicity
const articles = [
  {
    "slug": "design",
    "title": "Embracing the Convergence: The Future of Design",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "content": [
      {
        "paragraph": "In the evolving narrative of design, the harmonious convergence of art and technology marks a pivotal chapter. This fusion is not merely about aesthetic innovation; it represents a broader shift towards creating more immersive, intuitive, and impactful user experiences. Traditional boundaries between disciplines blur as designers draw upon a rich palette of digital tools and artistic principles, crafting solutions that resonate on both functional and emotional levels. The journey of design, from the tactile brushstrokes of the past to the sleek digital interfaces of the future, reflects our enduring quest to merge beauty with utility, vision with reality."
      },
      {
        "paragraph": "As we forge ahead, the role of design transcends aesthetics, becoming a fundamental driver of innovation and problem-solving in an increasingly complex world. Designers are now challenged to think deeply about the user's journey, embedding sustainability, accessibility, and ethical considerations into the fabric of their creations. This holistic approach to design emphasizes not just the product but the process—encouraging a dialogue between creator and consumer, technology and nature, tradition and innovation. As this dialogue continues to evolve, it will undoubtedly shape the contours of our built environment, digital experiences, and societal frameworks for generations to come."
      }
    ],
    "image": {
      "description": "The Fusion of Art and Technology in Design",
      "url": "/articleimage/design.webp"
    }
  },
  {
    "slug": "brand-strategy",
    "title": "Mastering Brand Strategy: Creating Lasting Connections",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "content": [
      {
        "paragraph": "Brand strategy is the blueprint of how a brand sets itself apart in the competitive landscape, defining its purpose, promise, and the experience it delivers to its audience. At its core, it's about understanding and aligning with the customer's needs and values, crafting a narrative that resonates deeply with them. This strategic foundation enables brands to navigate market changes, innovate consistently, and build a loyal community. It's not just about the visual identity or the products; it's about creating a meaningful relationship between the brand and its consumers, one that endures through changing trends and market dynamics."
      },
      {
        "paragraph": "A successful brand strategy is built on a deep understanding of the market environment, including competitors, trends, and consumer behavior. It involves meticulous planning and execution across all touchpoints of the brand experience, from product development to marketing, ensuring a cohesive and compelling brand presence. Through strategic differentiation and focused messaging, brands can carve out a unique position in the market that speaks directly to their target audience, fostering engagement and loyalty. In today's digital age, where consumers are more informed and discerning, a well-crafted brand strategy is indispensable for connecting with audiences in meaningful ways and driving long-term growth."
      }
    ],
    "image": {
      "description": "Concept of Brand Strategy",
      "url": "/articleimage/brand.webp"
    }
  },
  {
    "slug": "development",
    "title": "The Art and Science of Software Development",
    "createdAt": "2022-01-01T00:00:00.000Z",
    "content": [
      {
        "paragraph": "Software development embodies the perfect blend of artistry and engineering, a discipline where meticulous coding meets creative problem solving. At its heart, development is about bringing ideas to life, turning concepts into functional applications that serve user needs and solve real-world problems. The process is both intricate and collaborative, involving teams of developers, designers, and project managers working in concert to iterate on designs, code, and user feedback. It's a dynamic field driven by innovation, where developers continuously learn and adapt to new technologies and methodologies to build better, more efficient software solutions."
      },
      {
        "paragraph": "The evolution of software development methodologies, from Waterfall to Agile and DevOps, reflects the industry's shift towards more adaptive, collaborative, and customer-centric approaches. These methodologies emphasize rapid iteration, continuous delivery, and a high degree of automation, allowing teams to respond quickly to market changes and customer feedback. As technology advances, the role of a developer evolves, requiring not just technical skills but also a keen understanding of the end users and the business landscape. In this environment, the key to successful software development lies in a commitment to quality, a passion for learning, and the ability to work effectively within diverse teams."
      }
    ],
    "image": {
      "description": "Essence of Software Development",
      "url": "/articleimage/development.webp"
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
