import React from "react"
import Band from "./Band"

const BandList=({bands, changeBand})=>{
    const allBands=bands.map((band)=>{
        return <Band band={band} changeBand={changeBand}/>
    })
    return(
        <div className="container">
            <div className="row">
            {allBands}
            </div>
          
        </div>
        
    )

}


export default BandList;