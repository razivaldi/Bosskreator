import Image from "next/image";
import CTA from "@/components/servicepage/CTA";
import Pricing from "@/components/servicepage/Pricing";
import Support from "@/components/servicepage/Support";

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "development" } },
//       { params: { slug: "design" } },
//       { params: { slug: "brand-strategy" } },
//     ],
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params }) {
//   const url = process.env.SERVICE_URL
//   const res = await fetch(`${url}/${params.slug}`)
//   const data = await res.json()
//   return {
//     props: { article: data }
//   }
// }

export default function Service({ article }) {
  return (
    <div className="mt-[87px]">
      {/* <div className="w-full h-[468px] flex items-center relative">
        <Image
          src="/bg-service.png"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className=" w-screen md:w-[960px] mx-auto text-center -mt-24">
          <h6 className="font-semibold text-sm md:text-base">SERVICES</h6>
          <h1 className="font-monument text-2xl md:text-[48px] mb-6 mt-3">
            {article.title}
          </h1>
          <p className="w-screen md:w-[768px] px-5 md:mx-auto md:text-xl">
            Introduction to Wireframing and its Principles. Learn from the best
            in the industry with tips, tools, and best practices from those in
            the know.
          </p>
        </div>
      </div>
      <section className="w-[90%] mx-auto lg:flex items-end gap-12 -mt-24 space-y-8">
        <div className="rounded-[20px] mx-auto overflow-hidden w-[354px] h-[356px] md:w-[508px] md:h-[512px] lg:w-[656px] lg:h-[674px] relative">
          <Image
            src={article.image.src}
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
            alt="laptop"
          />
        </div>
        <div className="w-full lg:w-[44%] text-sm md:text-lg text-justify">
          <p>
            {article.paragraph[0]}
          </p>
          <h3 className="font-semibold text-accent text-3xl my-4 md:my-6">
            Why we&apos;re better
          </h3>
          <p>
            {article.paragraph[1]}
          </p>
          <p className="mt-6">
            {article.paragraph[2]}
          </p>
        </div>
      </section> */}
      <CTA />
      <Pricing />
      <Support />
    </div>
  );
}
