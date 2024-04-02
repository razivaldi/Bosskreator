import Image from "next/image";

const logos = [
  {
    name: "Lattice",
    src: "/companylogo/lattice.svg",
  },
  {
    name: "Home Property",
    src: "/companylogo/homeproperty.svg",
  },
  {
    name: "Kik",
    src: "/companylogo/kik.svg",
  },
  {
    name: "Airbnb",
    src: "/companylogo/airbnb.svg",
  },
  {
    name: "Light Flow",
    src: "/companylogo/lightflow.svg",
  },
];

export default function InfiniteSlider () {
  return (
    <section className="w-full md:w-11/12 mx-auto h-14">
      <div className="group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        {Array.from({ length: 2 }, (_, i) => (
          <div
            key={i}
            className="animate-slide-left-infinite inline-block w-max"
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                className="mx-3 md:mx-11 inline h-16"
                width={160}
                height={64}
                src={logo.src}
                alt={logo.name}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
