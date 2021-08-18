import React from 'react';
import sp7 from "../images/img7.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="card home-card" >
          <h5>saurabh</h5>
          <img className="card-img-top" src={sp7} alt="" />
          <div className="card-body">
            <FavoriteIcon className="material-icons" style={{color:"red"}}/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/signup" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card home-card" >
          <h5>saurabh</h5>
          <img className="card-img-top" src={sp7} alt="" />
          <div className="card-body">
            <FavoriteIcon className="material-icons" style={{color:"red"}} />
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/signup" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card home-card" >
          <h5>saurabh</h5>
          <img className="card-img-top" src={sp7} alt="" />
          <div className="card-body">
            <FavoriteIcon className="material-icons" style={{color:"red"}}/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/signup" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </>
  )
}
export default Home