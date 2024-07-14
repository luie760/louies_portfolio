import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";
import BellaBeautiesImg from "../../../public/BellaBeautiesMain.png"
import EllipseImg from "../../../public/Ellipse.png"
import LogoImg from "../../../public/Logo.png"

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="text-white my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-white">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-full w-full">
      <Image className="" src={featureInView.image} alt={featureInView.imageAlt} />
    </div>
  );
};

export default SwapColumnFeatures;

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  image: StaticImageData;
  imageAlt: string;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Supabase, PostgreSQL, Next.js, TypeScript",
    title: "Resume API",
    description:
      "Experience my portfolio in a unique way through a custom-built Resume API. Leveraging Supabase, PostgreSQL, and Next.js, I've transformed static resume content into a dynamic API endpoint. Now, accessing detailed information about my skills, projects, and experience is as simple as sending a GET request. Explore and interact with my professional journey effortlessly, whether you're browsing through a browser or testing endpoints with tools like Postman. This project not only showcases my technical skills but also demonstrates my creativity in presenting traditional resume data in a modern, accessible format.",
    contentPosition: "r",
    image:EllipseImg,
    imageAlt:"API Resume",
  },
  {
    id: 2,
    callout: "SquareUp.com API, Next.js, TypeScript",
    title: "Esthetician Site with API Integration",
    description:
      "I crafted an online presence for an esthetician business using Next.js and TypeScript, delivering a seamless user experience and robust functionality. By integrating the Square Up API, I enabled customers to effortlessly schedule appointments directly on the website. Collaborating closely with the client, I meticulously curated their service offerings and product catalog within Square Up, ensuring accurate pricing, detailed descriptions, and precise service durations for smooth appointment bookings. Moreover, I extended their online reach by integrating the Square Up solution across their social media platforms. This project not only showcases my technical expertise in web development but also demonstrates my ability to enhance business operations through effective digital solutions.",
    contentPosition: "l",
    image:BellaBeautiesImg,
    imageAlt:"Esthetician",
  },
  {
    id: 3,
    callout: "AWS Stuff here",
    title: "AWS Work",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    contentPosition: "r",
    image:LogoImg,
    imageAlt:"testLogoOne",
  },
  {
    id: 4,
    callout: "GoLang, C#, ....",
    title: "Internal Applications",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto quaerat qui, illo incidunt suscipit fugiat distinctio officia earum eius quae officiis quis harum animi.",
    contentPosition: "l",
    image:EllipseImg,
    imageAlt:"testEllipseTwo",
  },
];