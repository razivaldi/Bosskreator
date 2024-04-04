import Image from "next/image";
import Link from "next/link";

export default function ArticleContent({ content }) {
  switch (content.type) {
    case "heading":
      return (
        <h1 className="font-monument text-center mb-10 text-xl md:text-4xl">
          {content.text}
        </h1>
      );
    case "createdAt":
      return (
        <p className="text-sm mt-2">
          Published{" "}
          {new Date(content.text).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      );
    case "paragraph":
      return (
        <p className="my-4 indent-7 text-sm md:text-base md:indent-12 text-justify">
          {content.text}
        </p>
      );
    case "image":
      return (
        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden my-5">
          <Image
            src={content.src}
            fill
            alt={content.alt}
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    case "link":
      return (
        <Link
          href={content.href}
          className="my-4 inline-block font-medium italic underline text-accent"
        >
          {content.text}
        </Link>
      );
    case "images":
      return (
        <>
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              <figure className="relative w-full h-60">
                <Image
                  fill
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={content.href[0]}
                  alt={content.alt}
                />
              </figure>
              <figure className="relative w-full h-60">
                <Image
                  fill
                  className="size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={content.href[1]}
                  alt="Image Description"
                />
              </figure>
            </div>
            <figure className="relative w-full h-72 sm:h-96 lg:h-full">
              <Image
                fill
                className="size-full absolute top-0 start-0 object-cover rounded-xl"
                src={content.href[2]}
                alt="Image Description"
              />
            </figure>
          </div>
          <p className="text-sm text-center text-zinc-300 col-span-2 mt-3">
            {content.alt}
          </p>
        </>
      );
  }
}
