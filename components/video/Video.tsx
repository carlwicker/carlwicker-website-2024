import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      gsap.to(video, {
        currentTime: video.duration || 0,
        ease: "sine.out",
        scrollTrigger: {
          trigger: video,
          start: "top bottom",
          end: "bottom 75%",
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentTime = progress * video.duration;
            video.currentTime = currentTime;

            // Update clip-path based on scroll progress
            const clipPathValue = `inset(${(1 - progress) * 50}% ${
              (1 - progress) * 50
            }% ${(1 - progress) * 50}% ${(1 - progress) * 50}%)`;
            video.style.clipPath = clipPathValue;
          },
        },
      });
    }
  }, []);

  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        className="w-full h-screen object-fill self-center"
        src="/webm/synctest.mp4"
        muted
        style={{ clipPath: "inset(50% 50% 50% 50%)" }} // Initial clip-path
      />
    </div>
  );
}
