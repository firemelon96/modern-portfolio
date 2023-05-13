import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
      >
        <Image
          src="/images/estong.png"
          height={400}
          width={400}
          priority
          alt="Author image"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">You should know about me</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          perspiciatis, sint reprehenderit quo nihil rerum necessitatibus magni
          dolorem modi perferendis ex consequatur natus voluptates distinctio
          similique fugiat quia molestias provident. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum laudantium, alias velit
          molestiae, quo cupiditate numquam minima eveniet voluptates tenetur
          iusto harum soluta magnam! Veniam numquam optio impedit vero quis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          doloremque qui non repudiandae pariatur officiis explicabo, neque
          accusantium alias, iure reiciendis at eveniet doloribus ipsum officia
          eum magni quidem? Dicta!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
