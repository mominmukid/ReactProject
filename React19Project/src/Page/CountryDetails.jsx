import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loder";
import { getCountryIndData } from "../Api/CountryDataApi";
export default function CountryDetails() {
   const params = useParams();
   const navigate = useNavigate();

   const [isPending, startTransition] = useTransition();
   const [country, setCountry] = useState();

   useEffect(() => {
      startTransition(async () => {
         const res = await getCountryIndData(params.id);

         if (res.status === 200) {
            setCountry(res.data[0]);
            // console.log(res.data[0]);
         }
      });
   }, []);

   if (isPending) return <Loader />;
   return (
      <section className="w-full min-h-screen text-white  flex justify-center items-center mt-5 md:mt-0 p-4 md:p-0">
        {
         country && (
            <div className="w-[100%] min-h-full md:h-[80vh] mx-auto my-10  rounded-xl flex flex-col md:flex-row p-4 justify-center items-center gap-2 px-4 md:px-0">


            <div className="w-[70%] md:w-[30%] h-[40%]">
               <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
            </div>

            <div className="w-[50%] mb-10  h-auto flex flex-col justify-center items-center gap-4 md:gap-5">
               <p className="text-2xl font-bold"> {country.name.official} </p>
               <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(country.name.nativeName)
                     .map((key) => country.name.nativeName[key].common)
                     .join(", ")}
               </p>
               <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>

                <button
                onClick={()=>navigate('/country')}
                className="bg-slate-500 text-white px-14 font-bold hover:bg-slate-600 py-2 rounded-md mt-4">
                  Back
                </button>

            </div>



         </div>
         )
        }


      </section>
   );
};