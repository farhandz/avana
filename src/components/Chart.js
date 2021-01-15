import React from 'react'

function Chart() {
    return (
      <>
        <div className="wrap-chart mt-4">
          <p>
            <img className="img-fluid" srcSet="./assets/Chart.svg" alt="" />
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
           <div className="donut-chart">
               <div className="image-wrapper-chart">
                    <img srcSet="./assets/icons8-doughnut-chart-64.png" alt="" />
               </div>
           </div>
          </div>
          <div className="col-md-6 mt-2">
           <div className="donut-chart">
               <div className="image-wrapper-chart">
                    <img srcSet="./assets/icons8-doughnut-chart-64.png" alt="" />
               </div>
           </div>
          </div>
        </div>
      </>
    );
}

export default Chart
