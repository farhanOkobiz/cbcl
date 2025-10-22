"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BannerImageProps {
  image: string;
}

const BannerImage: React.FC<BannerImageProps> = ({ image }) => {
  return (
    <motion.div
      initial={{ z: 200, y: -100, scale: 1.3, opacity: 0 }}
      animate={{
        z: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { duration: 2, ease: "easeOut" },
      }}
      className="relative w-full h-[300px] md:h-[500px] xl:h-[calc(50vh-100px)] overflow-hidden"
    >
      <Image
        src={image}
        alt="History Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </motion.div>
  );
};

export default BannerImage;
