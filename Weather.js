import React, { useEffect, useState } from 'react';
import "./Weather.css";

const Weather = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Sikar")

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b54e2a91aadbf1b377c1937c0a96f382`;
            const response =  await fetch(url)
            const resJson = await response.json();
            setCity(resJson.main);
        }
       fetchApi();
    },[search])
  return (
      <div>
    <div className='box'>
        <div className='inputData'>
            <input type='search' className='inputFeild' value={search}
             onChange={(e) => {setSearch(e.target.value)}}/>
             </div>
             {!city ? (
                 <p className='errormsg'>No Data Found</p>
             ):
             <div>
             <div className='info'>
                 <h2 className='location'><i class="fa-solid fa-street-view"></i>{search}</h2>
                 <h1 className='temp'>
                     {city.temp}°celicus
                 </h1>
                 <h3 className='tempmin_max'>min :{city.temp_min}°celicus | max : {city.temp_max}°celicus</h3>
                 </div>
                 <div className='wave -one'></div>
                 <div className='wave -two'></div>
                 <div className='wave -three'></div>
               </div>
             }
             </div>
    </div>
  )
}

export default Weather