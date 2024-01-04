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

import {TbTemperatureCelsius} from 'react-icons/tb'
import {ImSpinner8} from 'react-icons/im'


const APIkey = '7478ace9dbf0d1f0e01be727c41388c6'

function App() {

  const [data, setData] = useState([])
  const [location,setLocation] = useState('')


  return <div className="bg-red-200">Hello World</div>;
}

export default App;
