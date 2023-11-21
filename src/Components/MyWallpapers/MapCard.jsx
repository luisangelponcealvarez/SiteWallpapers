import "../../Style/main.css";

export function MapCard({ wallpaper }) {
  const { NombreWallpaper, Resolution } = wallpaper;

  return (
    <div className="card-wallpaper">
      <div className="face front">
        <img
          className="card-img-top card-image"
          src={
            "https://github.com/luisangelponcealvarez/Wallpapers/blob/cab7288acdf2608cec08c9c8fc5278c840de7127/Wallpapers" +
            NombreWallpaper +
            ".jpg"
          }
          alt={NombreWallpaper}
        />
        <h5>{NombreWallpaper}</h5>
      </div>

      <div className="face back">
        <h5>Nombre: {NombreWallpaper}</h5>
        <p>Resolución: {Resolution}</p>
        <div className="link">
          <a
            href={
              "https://github.com/luisangelponcealvarez/Wallpapers/tree/main/Wallpapers/" +
              NombreWallpaper +
              ".jpg"
            }
            target="_blank"
            className="btn btn-outline-secondary
              m-2"
          >
            <i className="fa-brands fa-github GitHub" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
