import ArticleContent from "@/components/ArticleContent";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://bosskreator.vercel.app/api/article/${slug}`);
  const data = await res.json();

  return {
    props: { article: data },
  };
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
        {article.content.map((item, index) => (
          <ArticleContent key={index} content={item} />
        ))}
      </div>
    </main>
  );
}
