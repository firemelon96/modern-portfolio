import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pl-40"
      >
        <Image
          src="/images/realtor.png"
          alt="picture"
          className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]"
          width={235}
          height={197}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Realtor</h4>
        <p className="font-bold text-2xl mt-1">Company name</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="/images/jslogo.png"
            width={32}
            height={32}
            alt=""
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/images/jslogo.png"
            width={32}
            height={32}
            alt=""
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="/images/jslogo.png"
            width={32}
            height={32}
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended ...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Lorem ipsum lor</li>
          <li>Lorem ipsum lor</li>
          <li>Lorem ipsum lor</li>
          <li>Lorem ipsum lor</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
