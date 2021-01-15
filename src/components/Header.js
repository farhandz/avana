import React from 'react'
import Card from './Card'

function Header() {
    return (
      <>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="text-center text-date text-secondary font-weight-bold">
              14/01/2021
            </h4>
            <h4 className="overall-sales font-weight-bold">
              Total Penjualan : 20.000.000
            </h4>
          </div>
          <div className="col-md-6">
            <h4 className="font-weight-bold text-center text-date text-secondary">
              Total
            </h4>
            <h4 className="font-weight-bold overall-orders">
              Total Order Hari ini: 2000x
            </h4>
          </div>
        </div>
      </>
    );
}

export default Header
