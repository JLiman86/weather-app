import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";

import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs";

const iconSwitcher = (cloud_type: string) => {
  let icon = <IoMdSunny />;

  switch (cloud_type) {
    case "Clouds":
      icon = <IoMdCloudy className="text-blue-500" />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill className="text-white" />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-blue-500" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-yellow-300" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-blue-500" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-white" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm className="text-gray-900" />;
      break;
  }

  return icon;
};

export default iconSwitcher;
