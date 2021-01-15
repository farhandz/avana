import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar'
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Profile from '../../components/Profile';
import Chart from '../../components/Chart';
import Navbar from '../../components/Navbar';
import { connect, useSelector } from 'react-redux';
import Hq from '../Hq/Hq';
import Orders from '../Orders/Orders';
import Products from '../Products/Products';
import WebStore from '../WebStore/WebStore';
import Setting from '../Seetings/Setting';
import Modules from '../Modules/Modules';

function HomePage({match}) {
  const datas = useSelector((state) => state.users.toogle);
  const layout = useSelector((state) => state.users.layout)

  console.log(layout)

  const data = useLocation()
    return (
      <>
        <div className="row">
          <div
            className={
              datas
                ? "col-md-2 bg-dark slider "
                : "col-md-2 bg-dark wrap-sidebar-manis"
            }
          >
            <div className="wrap-sidebar">
              <Sidebar path={data.pathname} />
            </div>
          </div>
          <div className="col-md-10">
            <Navbar />
            <div className="container-fluid">
              <Header />
              {layout ===  "dashboard" ? <div className="row mt-5">
                <div className="col-md-6">
                  <Card />
                  <Chart />
                </div>
                <div className="col-md-6 mt-2">
                  <Profile />
                </div>
              </div> : (layout === "hq" ? <Hq /> : (layout === "orders" ? <Orders /> : (layout === "products" ? <Products /> : (layout === "webstore") ? <WebStore /> : (layout === "settings" ? <Setting /> : (layout === "modules" ? <Modules/> : "")))))}
            </div>
          </div>
        </div>
      </>
    );
}

export default connect() (HomePage)
