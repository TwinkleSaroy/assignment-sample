import React from 'react';
//import { Link } from 'react-router-dom';
import box_2 from './images/box_2.png';
import email from './images/email.png';
import Phone from './images/Phone.png';
import locationbox from './images/locationbox.png'


import './PickupProgress.css';

function PickupProgress() {
    return (
        <div className="py-2">
            <div className="card   ">
                <div className="card-header bg-primary  text-white ">
                
                <img   src ={box_2} alt='' ></img>  
                <div className="ml-4">
                     <h5 >OrderID: #AB234A</h5>
                    <h5>18th November,20, 5:30pm</h5>
                    <a href ="/" className="  text-success text-center" >Pickup  in progress</a>
                    
                     <select class="select"></select>
                     
                </div>
              
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
                    <img align="right"  src ={email} alt='' ></img>  
                    <img  className="mr-1" align="right"  src ={Phone} alt='' ></img>  

                    <h5 className="">Delivery</h5>
                    <p className="text-muted text-sm-right ">instant delivery<br />Purchase protection enabled</p>

                </div>  
                <hr></hr>
                <h6  className="text-right mr-3 py-2"><a href="#"> Refund</a></h6>
                <div className="step step-active  ml-3">

  <div>
    <div className="circle"><i className="fa fa-check"></i></div>
  </div>
  <div>
    <h5 className="title">Payment recieved via Gopay</h5>
    <p className="text-muted ">18th November 5:30pm</p>

  </div>
</div>
<div className="step   step-active ml-3">
  <div>
    <div className="circle "><i className="fa fa-check"></i></div>
  </div>
  <img  align="right"  className="mr-4" src ={locationbox} alt='' ></img>  
  <div>
  <h5 className="title">Driver assigned(Go Send,Willy Ong)</h5>
  <p className="text-muted ">18th November 5:30pm</p>


  </div>
</div>
<div className=" step ml-3">
  <div>
    <div className="circle step-active  "><i className="fa fa-check"></i></div>
  </div>
  <div>
  <h5 className="text-bl">Pickup complete</h5>
 
  </div>
</div>
<div className=" step ml-3">
  <div>
    <div className="circle "><i className="fa fa-check"></i></div>
  </div>
  <div>
  <h5 className="text-bl">Delivery completed</h5>
 
  </div>
</div>

<div className=" step ml-3">
  <div>
    <div className="circle "><i className="fa fa-check"></i></div>
  </div>
  <div>
  <h5 className="text-bl">Delivery confirmed</h5>
 
  </div>
</div>

<div className=" step ml-3">
  <div>
    <div className="circle "><i className="fa fa-check"></i></div>
  </div>
  <div>
  <h5 className="text-bl">Payout complete</h5>
 
  </div>
</div>


            </div>
           


        </div>





    )
}

export default  PickupProgress;
