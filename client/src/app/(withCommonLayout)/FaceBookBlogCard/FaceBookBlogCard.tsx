"use client";
import React, { useEffect, useRef } from "react";

export type FaceBookBlogCardProps = {
  facebookUrl: string;
  title?: string;
  image?: string;
};

const FaceBookBlogCard: React.FC<FaceBookBlogCardProps> = ({
  facebookUrl,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  let actualUrl = facebookUrl;
  let isVideo = false;

  // 🧩 Detect iframe or video URL
  if (facebookUrl.includes("<iframe")) {
    isVideo = facebookUrl.includes("plugins/video.php");
    const hrefMatch = facebookUrl.match(/href=([^&\s"]+)/);
    if (hrefMatch && hrefMatch[1]) {
      actualUrl = decodeURIComponent(hrefMatch[1]);
    }
  } else {
    isVideo = actualUrl.includes("/videos/");
  }

  // 🧠 Load Facebook SDK dynamically
  useEffect(() => {
    if (!(window as any).FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
      };
    } else {
      (window as any).FB.XFBML.parse();
    }
  }, [actualUrl]);

  if (!facebookUrl) return null;

  return (
    <div className=" rounded-md overflow-hidden">
      <div
        ref={containerRef}
        className="
          rounded 
          w-full 
          sm:max-w-[340px] 
          md:max-w-[360px] 
          lg:max-w-[410px]
          xl:max-w-[500px]
          mx-auto
        "
        style={{
          maxWidth: "100%",
        }}
      >
        {isVideo ? (
          <div
            className="fb-video"
            data-href={actualUrl}
            data-width="100%"
            data-show-text="true"
          ></div>
        ) : (
          <div
            className="fb-post"
            data-href={actualUrl}
            data-width="100%"
            data-show-text="true"
          ></div>
        )}
      </div>
    </div>
  );
};

export default FaceBookBlogCard;
