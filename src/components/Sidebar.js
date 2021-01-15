import React, { Component } from 'react'
import DataJson from '../json/data.json';
import { connect, useStore } from 'react-redux';
import { ToogleSidebar, TOGGLE_SIDEBAR, GET_LAYOUT, GetLayout } from '../redux/action/userAction';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setDropDown: false,
            data: 0,
            setActive: false,
            activeName: null
        };
   }

   handleDropDown(index) {
       this.setState(prevState => ({
           setDropDown: !prevState.setDropDown,
           data: index
       }))
   }

   handleActiveModules(name) {
     this.setState({
       activeName: name
     })
     this.props.dispatch(GetLayout(name))
   }

   componentDidMount() {
     this.setState({
       activeName: "dashboard"
     })
      this.props.dispatch(GetLayout("dashboard"));
   }
   render() {
     return (
       <>
         <div className="wrap-sidebar-element">
           <div className="text-center">
             <h3
               style={{ cursor: "pointer" }}
               onClick={() => this.props.dispatch(ToogleSidebar(false))}
               className="text-warning"
             >
               avana
             </h3>
             <div className="wrap-profil mt-4">
               <img  className="img-fluid w-25" alt="" srcSet="https://library.kissclipart.com/20180930/qaw/kissclipart-avatar-circle-clipart-computer-icons-avatar-clip-a-ba6ab788c79ed1b8.png" />
               <p className="text-white font-weight-bold">Avriza Bramantyo</p>
             </div>
           </div>
           <div className="wrapp-section-modules">
             {DataJson.map((dts, index) => {
               return (
                 <div
                   onClick={() => this.handleActiveModules(dts.id)}
                   className="dashboard align-items-center"
                   key={index}
                 >
                   <div
                     style={
                       dts.id === this.props.ActiveModules
                         ? { borderRight: "3px solid yellow" }
                         : { borderRight: "none" }
                     }
                     className={
                       dts.id === this.props.ActiveModules
                         ? "pl-3 pt-2 bg-secondary  d-flex justify-content-between align-item-between align-items-center"
                         : "pl-3 pt-2   d-flex justify-content-between align-item-between align-items-center"
                     }
                   >
                     <p className="text-white">{dts.id}</p>
                     <p
                       className="mr-4"
                       onClick={() => this.handleDropDown(dts.id)}
                     >
                       <i
                         className={
                           !dts.childs
                             ? ""
                             : "text-white fas fa-arrow-circle-down"
                         }
                       ></i>
                     </p>
                   </div>
                   {!dts.childs ? (
                     ""
                   ) : this.state.setDropDown ? (
                     <div className="d-flex justify-content-end  flex-column">
                       {dts.childs?.map((dt, index) => {
                         return this.state.data === dts.id ? (
                           <p
                             key={index}
                             className="p-4 child-of-text text-secondary"
                           >
                             {dt.id}
                           </p>
                         ) : (
                           ""
                         );
                       })}
                     </div>
                   ) : (
                     ""
                   )}
                 </div>
               );
             })}
           </div>
         </div>
       </>
     );
   }
 }

 const getMapToState = (state) => {
  return {
    togle: state.users.toogle,
    ActiveModules: state.users.layout
  };
 }
 const mapDispathToProps = (dispatch) => ({
   ToogleSidebar: () => dispatch({type: TOGGLE_SIDEBAR}),
   GetLayout: () => dispatch({type: GET_LAYOUT }),
   dispatch
 })

export default connect(getMapToState, mapDispathToProps) (Sidebar);
