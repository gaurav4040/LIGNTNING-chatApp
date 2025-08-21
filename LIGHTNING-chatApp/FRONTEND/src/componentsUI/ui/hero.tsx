"use client";

import { SplineScene } from "./splite-hero.tsx";
import { Card } from "./card-hero.tsx";
import { Spotlight } from "./spotlight-hero.tsx";
import { motion } from "framer-motion";

export function SplineSceneBasic() {
  const imageData = [
    {
      src: "/ss1.webp",
      alt: "Fast Messaging UI",
      text: "Experience ultra-fast messaging with zero lag. Designed for smooth and immediate communication, even in large groups.",
    },
    {
      src: "/ss3.webp",
      alt: "Streamlined Interface",
      text: "An elegant, user-friendly interface that allows you to focus on what matters.",
    },
    {
      src: "/ss2.webp",
      alt: "Secure Conversations",
      text: "End-to-end encryption ensures that your messages are private, secure, and only accessible to intended recipients.",
    },
  ];

  return (
    <div>
      <Card className="w-[100vw] h-[100vh] bg-black/[0.96] relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-5xl py-5 md:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Lightning
            </h1>
            <h4 className="text-2xl ml-5  md:text-2xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Chat at the speed of light
            </h4>
            <p className="mt-4 text-neutral-300 max-w-lg">
              stay connected like never before with Lightning, the speed,
              security, and ease of real-time chat designed specifically for
              speed, security, and effortless communication. Chat one-on-one or
              in groups and enjoy instant messaging with no lag. With a
              streamlined interface and robust features, Lightning keeps your
              conversations running smoothly. Join the future of
              communication—fast, dependable, and designed for you!
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
      <div>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
        {imageData.map((item, index) => (
          <div key={index} className="bg-black py-10 px-5">
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center justify-center`}
            >
              <motion.img
                src={item.src}
                alt={item.alt}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease:"easeOut" }}
                viewport={{ once: false }}
                className="w-[60vw] h-[60vh] rounded-xl shadow-lg"
                style={{ willChange: "transform, opacity" }}
              />
              <motion.div
                className="md:w-1/2 text-left px-8 text-neutral-200"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <h2 className="text-2xl font-bold mb-4">{item.alt}</h2>
                <p className="text-lg">{item.text}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
