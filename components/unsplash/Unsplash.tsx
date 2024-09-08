import { useEffect, useState } from "react";

interface UnsplashData {
  color: string;
  user: {
    first_name: string;
  };
}

export default function Unsplash() {
  const unsplashApi = `https://api.unsplash.com/photos/random`;
  const headers = {
    Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
  };

  const [imageUrl, setImageUrl] = useState("");

  const [data, setData] = useState<UnsplashData>({} as any);

  useEffect(() => {
    fetch(unsplashApi, { headers })
      .then((response) => response.json())
      .then((data) => {
        if (data?.urls?.full) {
          setImageUrl(data.urls.full);
        }
        setData(data);
        console.log(data?.color);
      });
  }, []);

  return (
    <>
      {imageUrl !== "" && (
        <div
          className="w-screen h-screen object-cover"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto">
            {/* <div
              className={`w-1/6 h-1/6 bg-white bottom-10 absolute text-[${
                data?.color || "text-black"
              }] p-4`}
            >
              {data?.user?.first_name}
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
