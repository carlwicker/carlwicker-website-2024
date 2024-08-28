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
            video.style.opacity = `${0 + progress * 100}%`;
          },
        },
      });
    }
  }, []);

  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        className="w-full h-fit object-fit self-center"
        src="/webm/cybercortex.webm"
        muted
      />
    </div>
  );
}
