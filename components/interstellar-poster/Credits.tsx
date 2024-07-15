export default function Credits() {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-20 text-sm">
      <div style={{ color: "rgb(58, 54, 53)" }}>
        <div>Story by</div>
        <div className="font-bold">Jonathan Nolan</div>
        <div className="font-bold">Christopher Nolan</div>
      </div>

      <div style={{ color: "rgb(58, 54, 53)" }}>
        <div>Directed by</div>
        <div className="font-bold">Christopher Nolan</div>
      </div>

      <div style={{ color: "rgb(58, 54, 53)" }}>
        <div>Starring</div>
        <div className="font-bold">Matthew McConaughey</div>
        <div className="font-bold">Anne Hathaway</div>
        <div className="font-bold">Jessica Chastain</div>
        <div className="font-bold">Mackenzie Foy</div>
        <div className="font-bold">Michael Caine</div>
      </div>

      <div style={{ color: "rgb(58, 54, 53)" }}>
        <div>Music by</div>
        <div className="font-bold">Hans Zimmer</div>
      </div>
    </div>
  );
}
