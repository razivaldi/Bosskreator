// Assuming this is your JSON data stored directly in this file for simplicity
const articles = [
  {
    "slug": "design",
    "content": [
      { type: "heading", text: "Essential Design Principles for Effective Web Development" },
      { type: "createdAt", text: "2022-05-25T00:00:00.000Z" },
      { type: "image", src: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Design Principles" },
      { type: "paragraph", text: "Design is not just about aesthetics; it's about solving problems and communicating ideas effectively. In the context of web development, adhering to essential design principles is crucial for creating user-friendly, visually appealing websites and applications. These principles include simplicity, consistency, hierarchy, and emphasis, among others. By embracing simplicity, designers can eliminate clutter and distractions, ensuring that users can navigate and understand content with ease. Consistency fosters familiarity and predictability, making it easier for users to interact with different parts of a website or application. Hierarchy and emphasis help guide users' attention and prioritize information, enhancing usability and comprehension." },
      { type: "paragraph", text: "Furthermore, understanding the principles of typography, color theory, and whitespace enables designers to craft compelling visual experiences that resonate with users on an emotional level. Typography establishes hierarchy and conveys tone, while color evokes mood and communicates brand identity. Whitespace, or negative space, provides breathing room and enhances readability, allowing content to shine. By applying these design principles thoughtfully and purposefully, developers can create websites and applications that not only look great but also deliver seamless and intuitive user experiences, driving engagement and satisfaction." },
      { type: "link", href: "/article/brand-strategy", text: "Crafting a Successful Brand Strategy for the Digital Age" },
      { type: "images", href: ["https://images.unsplash.com/photo-1587355760421-b9de3226a046?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"], alt: "Design Principles Showcase" },
      { type: "paragraph", text: "Incorporating these design principles into web development projects not only enhances aesthetics but also improves usability and user satisfaction. By prioritizing simplicity, consistency, hierarchy, and emphasis, designers can create intuitive and engaging experiences that resonate with users and drive business objectives. Moreover, ongoing usability testing and iteration are essential for refining design decisions and ensuring that websites and applications continue to meet user needs and expectations over time. By embracing a user-centric approach to design, developers can elevate their creations from functional to exceptional, forging meaningful connections with users and fostering long-term success." },
    ],
  },
  {
    "slug": "brand-strategy",
    "content": [
      { type: "heading", text: "Crafting a Successful Brand Strategy for the Digital Age" },
      { type: "createdAt", text: "2022-06-30T00:00:00.000Z" },
      { type: "image", src: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { type: "paragraph", text: "Moreover, a robust brand strategy goes beyond visual identity to encompass brand storytelling, customer experience, and community engagement. By crafting authentic and compelling narratives that resonate with their audience's values and aspirations, brands can establish emotional connections and foster brand affinity. Investing in exceptional customer experiences at every touchpoint, from browsing and purchasing to post-purchase support, cultivates trust and loyalty among consumers. Additionally, building a community around the brand, whether through social media, events, or online forums, enables brands to engage with their audience on a deeper level and drive advocacy and word-of-mouth referrals." },
      { type: "link", href: "/article/development", text: "Maximizing Frontend Performance and Optimization" },
      { type: "images", href: ["https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1587955415524-bb264e518428?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1587612049655-c1030366a74a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"], alt: "Brand Strategy Showcase" },
      { type: "paragraph", text: "By developing and executing a comprehensive brand strategy, businesses can differentiate themselves from competitors, build trust and loyalty among consumers, and drive sustainable growth and success in the digital age. From defining the brand's purpose and values to cultivating meaningful relationships with customers, every aspect of the brand strategy plays a crucial role in shaping the brand's identity and perception in the marketplace. By investing in brand building and nurturing authentic connections with their audience, businesses can create lasting impact and achieve their strategic objectives in an increasingly competitive and dynamic business landscape." },
    ],
  },
  {
    "slug": "development",
    "content": [
      { type: "heading", text: "Maximizing Frontend Performance and Optimization" },
      { type: "createdAt", text: "2022-04-10T00:00:00.000Z" },
      { type: "image", src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Frontend Optimization" },
      { type: "paragraph", text: "Frontend optimization is a critical aspect of web development, influencing user experience, search engine rankings, and conversion rates. By optimizing frontend assets such as HTML, CSS, and JavaScript, developers can reduce page load times, improve responsiveness, and enhance overall performance. Techniques like minification, compression, and lazy loading help streamline asset delivery and reduce bandwidth consumption, resulting in faster page rendering and smoother user interactions. Moreover, optimizing images, fonts, and multimedia content further accelerates load times and improves the overall browsing experience across devices and network conditions." },
      { type: "paragraph", text: "In addition to technical optimizations, developers must prioritize accessibility, usability, and mobile responsiveness to ensure a seamless experience for all users. Implementing responsive design principles, semantic HTML markup, and keyboard navigation enhances accessibility and inclusivity, catering to users with diverse needs and preferences. Furthermore, performance monitoring, A/B testing, and continuous optimization are integral to maintaining frontend performance over time and adapting to evolving user expectations and technological advancements. By embracing a proactive approach to frontend optimization, developers can create websites and applications that not only delight users but also deliver tangible business results, driving engagement, conversions, and brand loyalty in today's competitive digital landscape." },
      { type: "link", href: "/article/web-dev", text: "The Power of Continuous Improvement in Web Development" },
      { type: "images", href: ["https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"], alt: "Frontend Optimization Showcase" },
      { type: "paragraph", text: "Frontend optimization is not merely about improving technical performance but also about enhancing the overall user experience and achieving business objectives. By prioritizing frontend optimization, businesses can reduce bounce rates, increase user engagement, and ultimately drive conversions and revenue. Moreover, optimized websites are better equipped to rank higher in search engine results, attracting more organic traffic and expanding the reach and visibility of the brand. As user expectations continue to evolve and technology advances, frontend optimization remains a continuous journey of refinement and innovation, empowering businesses to stay competitive and deliver value to their audiences in today's digital-first world." },
    ],
  },
  {
    "slug": "web-dev",
    "content": [
      { type: "heading", text: "The Power of Continuous Improvement in Web Development" },
      { type: "createdAt", text: "2022-08-15T00:00:00.000Z" },
      { type: "image", src: "https://images.unsplash.com/photo-1711097383282-28097ae16b1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Continuous Improvement" },
      { type: "paragraph", text: "Continuous improvement is not just a methodology; it's a mindset that drives growth, innovation, and excellence in web development. Embracing a culture of continuous improvement empowers teams to challenge the status quo, identify opportunities for enhancement, and iterate on their processes and products iteratively. By fostering a learning-oriented environment where feedback is valued, developers can accelerate their personal and professional growth, deepen their expertise, and stay ahead of evolving technologies and best practices." },
      { type: "paragraph", text: "The cornerstone of continuous improvement lies in data-driven decision-making and experimentation. By leveraging analytics, user feedback, and performance metrics, developers can gain insights into user behavior, preferences, and pain points, informing iterative enhancements and optimizations. A/B testing, usability testing, and user interviews provide valuable qualitative and quantitative data that guides decision-making and validates hypotheses. Moreover, embracing agile methodologies, such as Scrum and Kanban, enables teams to adapt quickly to changing requirements and market dynamics, fostering a culture of agility and responsiveness." },
      { type: "link", href: "/article/design", text: "Essential Design Principles for Effective Web Development" },
      { type: "images", href: ["https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1555077292-22a4489e5897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"], alt: "Continuous Improvement Showcase" },
      { type: "paragraph", text: "By embracing a culture of continuous improvement, web development teams can drive innovation, enhance quality, and deliver greater value to stakeholders and end-users. From optimizing development workflows and refining coding practices to enhancing user experiences and addressing technical debt, there are endless opportunities for improvement in web development. By fostering collaboration, transparency, and a growth mindset, organizations can create an environment where every team member feels empowered to contribute ideas, experiment with new approaches, and drive positive change. Ultimately, continuous improvement is not just about making incremental gains; it's about fostering a culture of excellence and innovation that propels teams and businesses towards long-term success in a rapidly evolving digital landscape." },
    ],
  },

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
