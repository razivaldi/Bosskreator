import Image from 'next/image';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`http://localhost:3000/api/services/${slug}`);
  const data = await res.json();

  return {
    props: { article: data },
  };
}

const Article = ({ article }) => {
  return (
    <main className="w-full mb-20 pt-[119px]" style={{ backgroundImage: 'linear-gradient(180deg, #1E1E1E 12.88%, rgba(0, 0, 0, 0) 100%)', backgroundSize: '100% 860px', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-monument text-4xl">{article.title}</h1>
        <p className='text-sm mt-2'>Published  {new Date(article.createdAt).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <div className='relative w-full h-[350px] rounded-3xl overflow-hidden my-5'>
          <Image src={article.image.url} fill alt={article.title} style={{ objectFit: "cover" }} />
        </div>
        {article.content.map((item, index) => <p key={index} className="my-4 indent-12 text-justify">{item.paragraph}</p>)}
      </div>
    </main>
  );
};

export default Article;