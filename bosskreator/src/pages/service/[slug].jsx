import Image from "next/image";
import CTA from "@/components/servicepage/CTA";
import Pricing from "@/components/servicepage/Pricing";
import Support from "@/components/servicepage/Support";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`http://localhost:3000/api/article/${slug}`);
  const data = await res.json();

  return {
    props: { article: data },
  };
}

const Service = () => {
  return (
    <div className="mt-[87px] ">
      <div className="w-full h-[468px] flex items-center relative">
        <Image
          src="/bg-service.png"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className=" w-screen md:w-[960px] mx-auto text-center -mt-24">
          <h6 className="font-semibold text-sm md:text-base">SERVICES</h6>
          <h1 className="font-monument text-2xl md:text-[48px] mb-6 mt-3">
            Development
          </h1>
          <p className="w-screen md:w-[768px] mx-auto md:text-xl">
            Introduction to Wireframing and its Principles. Learn from the best
            in the industry with tips, tools, and best practices from those in
            the know.
          </p>
        </div>
      </div>
      <section className="w-[90%] mx-auto lg:flex items-end gap-12 -mt-24 space-y-8">
        <div className="rounded-[20px] mx-auto overflow-hidden w-[354px] h-[356px] md:w-[508px] md:h-[512px] lg:w-[656px] lg:h-[674px] relative">
          <Image
            src="https://images.unsplash.com/photo-1606166325683-e6deb697d301?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
            alt="laptop"
          />
        </div>
        <div className="w-full lg:w-[44%] text-sm md:text-lg text-justify">
          <p>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla.
          </p>
          <h3 className="font-semibold text-accent text-3xl my-4 md:my-6">
            Why we're better
          </h3>
          <p>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>
          <p className="mt-6">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.{" "}
          </p>
        </div>
      </section>
      <CTA />
      <Pricing />
      <Support />
    </div>
  );
};

export default Service;
