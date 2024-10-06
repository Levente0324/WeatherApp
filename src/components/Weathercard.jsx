import "../App.css";
import { useGlobalState } from "./Globalstate.jsx";

export default function Card() {
  const [defaultCity] = useGlobalState("city");
  const [defaultWeather] = useGlobalState("current");

  return (
    <div className="card">
      <div className="cardName">
        <h1 className="h">{defaultCity}</h1>
        <p>{defaultWeather.datetime}</p>
      </div>

      <div className="cardMain">
        <div className="mainImg">
          <i class="fa-solid fa-cloud fa-9x"></i>
        </div>
        <div className="mainInfo">
          <h1 className="temp">{defaultWeather.temp} °C</h1>
          <p>{defaultWeather.conditions}</p>
        </div>
      </div>

      <div className="cardItemek">
        <div className="visibility">
          <i class="fa-solid fa-eye"></i>
          <p>{defaultWeather.visibility} KM</p>
        </div>
        <div className="wind">
          <i class="fa-solid fa-wind"></i>
          <p>{defaultWeather.windspeed} KM/H</p>
        </div>
        <div className="uv">
          <i class="fa-solid fa-sun"></i>
          <p>{defaultWeather.uvindex}</p>
        </div>
        <div className="rain">
          <i class="fa-solid fa-droplet"></i>
          <p>{defaultWeather.precipprob} %</p>
        </div>
      </div>
    </div>
  );
}
