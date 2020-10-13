import React from "react"
import style from "./Band.module.css"
 

const Band = ({ band,changeBand}) => {
    
    return (
        <div className="col-6 mt-3">
            <div className="card">
                <div className="card-header">{band.name}</div>
                <div className="card-body">
                  <div className="row">
                      <div className="col-6">
                          <img src={band.img_url} alt="/" className={style.bandImg} />
                      </div>
                      <div className="col-6">
                    <p >{band.info.substr(0,130)}...</p>
                      </div>
                  </div>
                  </div>
                <div className="card-footer text-center">
                    <button className="btn btn-primary text-center" onClick={()=>{changeBand(band)}} >Read more</button>
                </div>
            </div>
        </div>

    )

}


export default Band;