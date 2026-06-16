import SpotifyEmbedPlayer from "./components/SpotifyEmbedPlayer";

function App() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px"
      }}
    >
      <h1>TuneVault</h1>

      <h2>KOHRA</h2>

      <p>Artist: Seedhe Maut</p>

      <SpotifyEmbedPlayer />
    </div>
  );
}

export default App;