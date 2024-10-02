



function App() {
  const [Search, setSearch] = useState('');
  const [image, setImage] = useState('');
  const [Data, setData] = useState('');
  const [loder, setloder] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [datapresent,setdatapresent]=useState(false);

  const feachApi = async (name) => {
    setloder(true)
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a53b7fc9e49116fc6e8b6419c6349684&units=metric`);
      const data = await res.json();
      console.log(data);
      setData(data)
      console.log(Data);
      setloder(false)
      setimage()
      setHidden(false);
      setdatapresent(true);

    } catch (error) {
      // console.log(error);
    }
  }

  const setimage = () => {
    if (Data.length !== 0) {
      if (Data.weather[0].main === 'Clouds') {
        setImage('../../public/images/cloud.png')

      } else if (Data.weather[0].main === 'Clear') {
        setImage('../../public/images/sun.png')
      }
      else if (Data.weather[0].main === 'Haze') {
        setImage('../../public/images/mist.png')
      }
      else if (Data.weather[0].main === 'Snow') {
        setImage('../../public/images/snow.png')
      }
      else if (Data.weather[0].main === 'Rain') {
        setImage('../../public/images/rain_cloud.png')

      }
    }
    console.log(Data);
  }
  return (
    <div className='w-full bg-[#B4B8C5] h-screen flex flex-col justify-center items-center'>
      <SearchBox Search={Search} setSearch={setSearch} feachApi={feachApi} />
{/*       
      {datapresent && <Templet Data={Data} loder={loder} hidden={hidden} image={image}  />} */}
    </div>
  )
}

export default App