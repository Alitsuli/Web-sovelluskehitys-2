import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Kaupunkipyorat = () => {
    const [pyorat, setPyorat] = useState([])

    useEffect(() => {
        axios
        .get('https://services1.arcgis.com/sswNXkUiRoWtrx0t/arcgis/rest/services/Helsingin_ja_Espoon_kaupunkipy%C3%B6r%C3%A4asemat/FeatureServer/0/query?where=1%3D1&outFields=Kapasiteet,Osoite&outSR=4326&f=json')
        .then(response => {
            setPyorat(response.data.features);
            console.log(response.data.features);
        })
    }, [])
    console.log(pyorat);
    return (
        <>
        {pyorat.length > 0 ? <div>
           {pyorat.map((pyora, index) => {
                return (
                    <li key={index}>
                        Asema: {pyora.attributes.Osoite}<br/>
                        Kapasiteetti: {pyora.attributes.Kapasiteet}
                    </li>
                )
            })}
        </div> : <div>Loading...</div>}
        </>
    )
}

export default Kaupunkipyorat