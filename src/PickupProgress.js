import React from 'react';
//import { Link } from 'react-router-dom';
//import box_2 from './box_2.png';
import './PickupProgress.css';

function PickupProgress() {
    return (
        <div className="py-2">
            <div className="card   ">
                <div className="card-header bg-primary  text-white ">
                <img src={window.location.origin + '/src/images/box_2.png'} />                    <h5>OrderID: #AB234A</h5>
                    <h5>18th November,20, 5:30pm</h5>
                    <a href ="/" className="  text-success text-center" >Pickup  in progress</a>
                </div>
               
                 <div className="card-body">
                    <div>
                        <h5 className="text-md-left">Order description</h5>

                        <p className="text-muted text-sm-right ">Summer white shirt</p>
                    </div>


                    <h5 className="">Amount</h5>
                    <p className="text-muted text-sm-right ">Rs.500 via Gopay</p>

                    <h5 className="">Customer details</h5>
                    <p className="text-muted text-sm-right ">Valmik Mirani<br />55D,Arkadia Reisdence<br />Kemang Jakarta 12960</p>
                    <h5 className="">Customer contact</h5>
                    <p className="text-muted text-sm-right ">9560000264<br />valmikm@gmail.com</p>
                    <h5 className="">Delivery</h5>
                    <p className="text-muted text-sm-right ">instant delivery<br />Purchase protection enabled</p>

                </div> 
                <div className="step ml-3">
  <div>
    <div className="circle"><i className="fa fa-check"></i></div>
  </div>
  <div>
    <div className="title">First Step</div>
    <div className="caption">Optional</div>
  </div>
</div>
<div className="step step-active  ml-3">
  <div>
    <div className="circle">2</div>
  </div>
  <div>
    <div className="title">Second Step</div>
  </div>
</div>
<div className="step  ml-3">
  <div>
    <div className="circle">3</div>
  </div>
  <div>
    <div className="title">Third Step</div>
  </div>
</div>


            </div>
           


        </div>





    )
}

export default  PickupProgress;
