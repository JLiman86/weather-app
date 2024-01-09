import { useState, useEffect } from "react";
import axios from "axios";

import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

const APIkey = "7478ace9dbf0d1f0e01be727c41388c6";

type WeatherTypes = {
  [key: string]: unknown;
  wind: {
    speed: number;
  };
  visibility: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
  weather: { description: string; icon: string; id: number; main: string }[];
};

function App() {
  const [data, setData] = useState<null | WeatherTypes>(null);
  const [location, setLocation] = useState("Warsaw");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    axios.get(url).then((res) => {
      setTimeout(() => {
        setData(res.data);
      }, 1000);
    });
  }, [location]);

  if (!data) {
    return (
      <div className="h-screen bg-gradientBg bg-center bg-no-repeat bg-cover flex justify-center items-center">
        <div>
          <ImSpinner8 className="text-5xl animate-spin text-white" />
        </div>
      </div>
    );
  }

  let icon = <IoMdSunny />;
  let celsius: number | string = data.main.temp - 273.15;
  celsius = celsius.toFixed(1);

  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-yellow-300" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill />;
      break;
    case "Snow":
      icon = <IoMdSnow />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }

  const date = new Date();

  return (
    <div className="h-screen bg-gradientBg bg-center bg-no-repeat bg-cover flex justify-center items-center p-4">
      <div className="max-w-[450px] h-[500px] w-full   ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/20 rounded-full mb-4 p-2 flex items-center"
        >
          <input
            className="placeholder:text-gray-300 placeholder:text-sm outline-none bg-transparent px-4 flex-1"
            placeholder="Search by city or country"
            type="text"
            name=""
            id=""
          />
          <button className="px-7 py-3 bg-blue-500 rounded-3xl text-2xl active:scale-95">
            <IoMdSearch />
          </button>
        </form>
        <div className="bg-black/20 rounded-2xl px-4 py-8">
          <div className="flex gap-6 items-center">
            <div className="text-8xl">{icon}</div>
            <div className="flex-1 ">
              <div className="text-2xl font-semibold">
                {data.name},{data.sys.country}
              </div>
              <div>
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                {date.getUTCFullYear()}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-[300px]">
            <div className="flex items-center">
              <div className="font-light text-9xl">{celsius}</div>
              <div className="text-2xl">
                <TbTemperatureCelsius />
              </div>
            </div>
            <div>{data.weather[0].main}</div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
            <div className="flex items-center gap-3">
              <div>
                <BsEye />
              </div>
              <div>
                Visibility <span>{data.visibility / 1000} km</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <BsThermometer />
              </div>
              <div>
                Feels like
                <span className="relative ml-2">
                  {(data.main.feels_like - 273.15).toFixed(0)}
                  <div className="absolute top-0 left-[20px]">
                    <TbTemperatureCelsius />
                  </div>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <BsWater />
              </div>
              <div>
                Humidity <span>{data.main.humidity} %</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <BsWind />
              </div>
              <div>
                Wind <span>{data.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
