import { useEffect, useState } from 'react';
import './App.css';

function App() {
    //const [forecasts, setForecasts] = useState();

    useEffect(() => {
        //populateWeatherData();
    }, []);

    const [numero, setNumero] = useState(0);

    //async function populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    console.log(data)
    //    setForecasts(data);
    //}

    const enviar = async () => {
        const response = await fetch('https://localhost:7294/User/getUser');

        const data = await response.json();
        console.log(data);
        setNumero(0);
    }

    return (
        <div>
            <h1>Hola mundo</h1>

            <div className="">

                <button className="border" onClick={enviar}>
                    Obtener datos backend
                </button>
              
            </div>

            numero={numero }

        </div>
    );
    
}

export default App;