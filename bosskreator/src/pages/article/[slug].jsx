import Image from "next/image";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`http://localhost:3000/api/article/${slug}`);
  const data = await res.json();

  return {
    props: { article: data },
  };
}

const Article = ({ article }) => {
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
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-monument text-center mb-10 text-xl md:text-4xl">
          {article.title}
        </h1>
        <p className="text-sm mt-2">
          Published{" "}
          {new Date(article.createdAt).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden my-5">
          <Image
            src={article.image.url}
            fill
            alt={article.title}
            style={{ objectFit: "cover" }}
          />
        </div>
        {article.content.map((item, index) => (
          <p
            key={index}
            className="my-4 indent-7 text-sm md:text-base md:indent-12 text-justify"
          >
            {item.paragraph}
          </p>
        ))}
        <div className="text-center relative">
          <p className="my-4 font-medium italic underline text-accent">
            backlink description
          </p>
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              <figure className="relative w-full h-60">
                <Image
                  fill
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Image fill Description"
                />
              </figure>
              <figure className="relative w-full h-60">
                <Image
                  fill
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Image Description"
                />
              </figure>
            </div>
            <figure className="relative w-full h-72 sm:h-96 lg:h-full">
              <Image
                fill
                className="size-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                alt="Image Description"
              />
            </figure>
            <caption className="text-sm text-zinc-300">
              some image description
            </caption>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Article;
