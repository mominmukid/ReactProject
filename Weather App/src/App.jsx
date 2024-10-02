import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import SearchBox from './components/SearchBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);

  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState('');
  const [hidden, setHidden] = useState(true);
  const [dataPresent, setDataPresent] = useState(false);

  const fetchApi = async (name) => {
    setLoader(true);
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a53b7fc9e49116fc6e8b6419c6349684&units=metric`);
      const result = await res.json();
      setData(result);
      setData(result)
      setLoader(false);
      setHidden(false);

    } catch (error) {

      setLoader(false);

      // Stop loader even if there’s an error
    } finally {
      if (data.cod === '404') {
        toast.error("city not found")
        setData(null)
      }
    }
  };

  // Automatically set the image based on weather conditions when `data` changes
  useEffect(() => {
    if (data && data.weather && data.weather.length > 0) {
      setDataPresent(true);
      switch (data.weather[0].main) {
        case 'Clouds':
          setImage('/images/cloud.png');
          break;
        case 'Clear':
          setImage('/images/sun.png');
          break;
        case 'Haze':
          setImage('/images/mist.png');
          break;
        case 'Snow':
          setImage('/images/snow.png');
          break;
        case 'Rain':
          setImage('/images/rain_cloud.png');
          break;
        default:
          setImage(''); // If weather type isn't handled, set it to an empty string
      }
    }
  }, [data]);

  return (<>
    <ToastContainer />
    <div className='w-full bg-[#B4B8C5] h-screen flex flex-col justify-center items-center'>
      <SearchBox Search={search} setSearch={setSearch} feachApi={fetchApi} />

      {/* Conditionally render the Card or Templet component if data is present */}
      {dataPresent && (
        <Card Data={data} loader={loader} hidden={hidden} image={image} />
      )}
    </div>
  </>
  );
}

export default App;
