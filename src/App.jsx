import "./App.css";
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";
import { setGlobalState, useGlobalState } from "./components/Globalstate.jsx";

function App() {
  const [defaultCity] = useGlobalState("city");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${defaultCity}/today?unitGroup=metric&include=current&key=ZUJKSFFP8NXZJGQFLKD5285C6&contentType=json`,
        {
          method: "GET",
          headers: {},
        }
      );
      const result = await response.json();
      setGlobalState("current", result.currentConditions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="herodiv">
          <h1 className="herotext">Weather App</h1>
        </div>
        <div className="searchalldiv">
          <div className="searchdiv">
            <input
              className="searchinput"
              type="text"
              placeholder="Search for the city..."
              onChange={(e) => {
                setGlobalState("city", e.target.value.toLowerCase());
              }}
            />
          </div>
        </div>
        <div className="searchbtndiv">
          <Link to="/find">
            <button className="searchbtn" onClick={handleSearch}>
              Search
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
