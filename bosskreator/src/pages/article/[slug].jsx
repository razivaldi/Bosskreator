import ArticleContent from "@/components/ArticleContent";


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "development" } },
      { params: { slug: "design" } },
      { params: { slug: "brand-strategy" } },
      { params: { slug: "web-dev" } },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const url = process.env.ARTICLE_URL
  const res = await fetch(`${url}/${params.slug}`)
  const data = await res.json()
  return {
    props: { article: data }
  }
}

export default function Article({ article }) {
  return (
    <main
      className="w-full mb-20 pt-[119px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #1E1E1E 12.88%, rgba(0, 0, 0, 0) 100%)",
        backgroundSize: "100% 860px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl w-11/12 mx-auto px-6">
        {article?.content?.map((item, index) => (
          <ArticleContent key={index} content={item} />
        ))}
      </div>
    </main>
  );
}
