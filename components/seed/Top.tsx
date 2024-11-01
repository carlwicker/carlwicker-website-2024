interface storeData {
  name: string;
  website: string;
  location: string;
}

export default function Top({ storeData }: { storeData: storeData }) {
  return (
    <div
      data-scroll-container
      className="bg-[#556B2F] w-full min-h-screen py-20 px-5"
    >
      <div className="text-9xl font-bold uppercase w-1/2">{storeData.name}</div>
      <div className="text-lg font-bold uppercase">{storeData.website}</div>
      <div className="text-lg uppercase">{storeData.location}</div>
    </div>
  );
}
