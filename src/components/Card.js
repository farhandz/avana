import React from 'react'

function Card() {
    return (
      <>
        <div className="wrap-card-component">
          <div className="row">
            <div className="col-md-6 mt-2">
              <div className=" text-right text-card-wrapper">
                <h4 className="text-white">100.000</h4>
                <h5 className="text-white">Total Order</h5>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="text-right text-card-wrapper">
                <h4 className="text-white">1000.000.000</h4>
                <h5 className="text-white">Uang Masuk</h5>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="text-right text-card-wrapper">
                <h4 className="text-white">1.000.000</h4>
                <h5 className="text-white">Produk Terjual</h5>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="text-right text-card-wrapper">
                <h4 className="text-white">200.000.000</h4>
                <h5 className="text-white">Uang Keluar</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Card
