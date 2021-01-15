import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { GetLayout } from '../redux/action/userAction';

function Profile() {
    const dispatch = useDispatch()
    const handleStore = () => {
        dispatch(GetLayout("hq", true))
    }

    const handleProduk = () => {
        dispatch(GetLayout("products", true))
    }
    
    const handleSeeting = () => {
        dispatch(GetLayout("settings", true))
    }

    const handleOrders = () => {
        dispatch(GetLayout("orders", true));
    }

    const handleHq = () => {
        dispatch(GetLayout("hq", true))
    }
    return (
      <>
        <div className="wrap-profile">
          <div className="wrap-profile-info text-center">
            <p className="mt-3" style={{ borderBottom: "2px solid gray" }}>
              Account Info Detail
            </p>
            <div className="profile-image mt-4">
              <p className="text-dark font-weight-bold">@ammarjoz09</p>
              <img
                className="img-fluid w-25"
                src="https://logan-marshall.com/wp-content/uploads/2016/08/Circle-Profile-No-Background-PNG-120dpi-page001-768x768.png"
                alt=""
              />
              <p className="mt-1 font-weight-bold">Farhan Ammar Dzakwan</p>
              <div className="text-secondary">
                <p className="mb-5 font-italic">"Fullstack web developer"</p>
              </div>
            </div>
            <div className="text-profile">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dolores porro voluptatibus id eligendi ipsum veritatis quod unde
              ex ut optio et architecto sed iusto, consectetur eius ad
              repellendus rem.
            </div>
          </div>
          <div className="setting-profile mt-5">
            <div className="seetings">
              <div onClick={handleStore} className="icon-setting">
                <i className="fas fa-store"></i>
                <p>Store</p>
              </div>
            </div>
            <div className="seetings">
              <div onClick={handleProduk} className="icon-setting">
                <i className="fab fa-product-hunt"></i>
                <p>Produk</p>
              </div>
            </div>
            <div className="seetings">
              <div className="icon-setting">
                <i className="fas fa-users"></i>
                <p>agent</p>
              </div>
            </div>
            <div onClick={handleSeeting} className="seetings">
              <div className="icon-setting">
                <i className="fas fa-cog"></i>
                <p>setting</p>
              </div>
            </div>
          </div>
          <div className="setting-profile mt-3">
            <div className="seetings">
              <div className="icon-setting">
                <i className="fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </div>
            </div>
            <div onClick={handleOrders} className="seetings">
              <div className="icon-setting">
                <i className="fas fa-shopping-cart"></i>
                <p>Orders</p>
              </div>
            </div>
            <div className="seetings">
              <div onClick={handleHq} className="icon-setting">
                <i className="fas fa-truck"></i>
                <p>Hq</p>
              </div>
            </div>
            <div className="seetings">
              <div className="icon-setting">
                <i className="fas fa-cog"></i>
                <p>setting</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default connect()(Profile)
