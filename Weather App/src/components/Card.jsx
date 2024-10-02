import Loder from './Loder';

function Card({
  Data,
  image,
  loader,
  hidden,
}) {

  // Check if the loader is active
  if (loader) return <Loder />;

  // If no data or hidden, return nothing
  if (!Data || hidden) return null;
if(Data.cod==='404'){
   return  <div className="w-[95%] md:w-[32%] min-h-20 bg-[#E9EBF8] rounded-b-md flex flex-col justify-center items-center shadow-xl shadow-gray-900 p-5  text-2xl text-gray-500">Data Not Found</div>
}

  return (
    <div className="w-[95%] md:w-[32%] min-h-20 bg-[#E9EBF8] rounded-b-md flex flex-col justify-center items-center shadow-xl shadow-gray-900 p-5 ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[80%] md:w-[60%] h-36 mt-5 rounded-md">
          <img src={image} alt="Weather Icon" className="w-full h-full object-contain" />
        </div>
        <h1 className="font-bold text-xl mt-2">{Data?.name}</h1>

        <div className="w-full mt-1 flex flex-col md:flex-row gap-2 justify-evenly items-center">
          <p className="text-2xl font-semibold">
            <span>{Data?.main?.temp_max}°C</span>
          </p>
        </div>

        <div className="w-full mt-5 flex flex-col md:flex-row gap-2 justify-evenly items-center">
          <p className="font-semibold">
            Humidity: <span>{Data?.main?.humidity}%</span>
          </p>
          <p className="font-semibold">
            Wind Speed: <span>{Data?.wind?.speed} km/h</span>
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Card;
