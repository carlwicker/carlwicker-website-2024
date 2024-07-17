import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // `once: true` ensures the animation only plays once

  // Variants for the container to stagger the children animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Stagger the animation of children by 0.1 second
      },
    },
  };

  // Variants for each child (span)
  const child = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="flex gap-10 lg:gap-20 text-md flex-col lg:flex-row font-thin">
      <div>
        <div>UX/UI</div>
        <div className="font-semibold">Adobe Cloud</div>
        <div className="font-semibold">Figma</div>
      </div>
      <div>
        <div>Front End Development</div>
        <div className="font-semibold">NextJS</div>
        <div className="font-semibold">TypeScript</div>
        <div className="font-semibold">JavaScript</div>
        <div className="font-semibold">CSS</div>
      </div>
      <div>
        <div>Cloud</div>
        <div className="font-semibold">Google Cloud Architecture</div>
        <div className="font-semibold">Vercel Architecture</div>
      </div>
      <div>
        <div>Contact</div>
        <div className="flex flex-col">
          <a className="font-semibold" href="mailto:hello@carlwicker.co.uk">
            hello@carlwicker.co.uk
          </a>
          <a className="font-semibold" href="tel:44 7810 830237">
            44 7810 830237
          </a>
        </div>
      </div>
    </div>
  );
}
