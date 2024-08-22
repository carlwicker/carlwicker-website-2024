import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const duration = video.duration || 0;

      gsap.to(video, {
        currentTime: duration || 0,
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top bottom",
          end: "bottom 25%",
          scrub: true,
          //   markers: true,
          onUpdate: (self) => {
            const progress = self.progress;
            video.style.width = `${50 + progress * 50}%`; // Animate width from 50% to 100%
            video.style.height = `${50 + progress * 50}%`; // Animate height from 50% to 100%
          },
        },
      });
    }
  }, []);

  return (
    <div className="flex align-middle justify-center py-40">
      <video
        ref={videoRef}
        className="w-full h-fit object-fit"
        src="/webm/cybercortex.webm"
        muted
      />
    </div>
  );
}
