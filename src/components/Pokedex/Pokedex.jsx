import Search from "../Search/Search";

// CSS IMPORT
import "./Pokedex.css";
function Pokedex() {
  return (
    <div className="pokedex-wrapper">
      <h1>Pokedex</h1>
      <Search />
    </div>
  );
}

export default Pokedex;
