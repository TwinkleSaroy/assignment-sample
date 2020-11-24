import React from 'react'
import { Link } from 'react-router-dom';

function Page1() {
    return (
        <div>
             <h2>Order Management</h2>
      <div className="card ">
     <div className="card-body">
     <h6  className="text-primary">Active(10)</h6>
    <h6 className="text-right">Complete</h6>
    
    </div>
</div>
<h2> 18th November,20</h2>
<div className="card card w-75 mr-5">
  
  <div className="card-body">
  <p className="text-muted text-sm-right ">#AB234A</p>

    <h4 className="card-title">Valmil Mirani, Kemang Jakarta</h4>
    <h5>Summer white shirt</h5>
    <h5>Recieved: 5:30pm</h5><br></br><br/>

    <a href="#" className="card-link">Standard delivery</a>
    <h5 className="text-right text-primary">Rp.525.000</h5>

    <h6  className="text-right "><a href="#"> See details</a></h6>
  </div>
  <div className="card-footer text-muted">
  <Link to ="/pickup in progress" className="text-center" >Pickup in progress</Link>
 
  </div>
</div>
<div><br/></div>

<div className="card card w-75 ">

  
  <div className="card-body">
  <p className="text-muted text-sm-right">#AB234A</p>

    <h4 className="card-title">Valmil Mirani, Kemang Jakarta</h4>
    <h5>Summer white shirt</h5>
    <h5>Recieved: 5:30pm</h5><br/><br/>

    <a href="#" className="card-link">Delivery for tomarrow</a>
    <h5 className="text-right text-primary">Rp.500.000</h5>

<h6  className="text-right "><a href="#"> See details</a></h6>
    
  </div>
  <div className="card-footer text-muted">
  <a href="#"className="text-justify ">Pickup in progress</a>
  </div>
</div><br></br>
<div className="card w-75">
  
  
  <div className="card-body ">
  <p className="text-muted text-sm-right ">#AB234A</p>

    <h4 className="card-title">Valmil Mirani, Kemang Jakarta</h4>
    <h5>Summer white shirt</h5>
    <h5>Recieved: 5:30pm</h5><br/><br/>

    <a href="#" className="text-danger">for instant Delivery</a>
    <h5 className="text-right text-primary">Rp.500.000</h5>

<h6  className="text-right "><a href="#"> See details</a></h6>
    
  </div>
  <div className="card-footer text-muted">
  <a href="#" className="  text-success text-center" >Delivery in progress</a>
  </div>
</div><br/>
      <h2> 17th November,20</h2>
            
        </div>
    )
}

export default Page1;
