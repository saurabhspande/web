import React from 'react';
import sp from "../images/saurabh1.jpg";
import sp1 from "../images/img1.jpg";
import sp2 from "../images/img2.jpg";
import sp3 from "../images/img3.jpg";
import sp4 from "../images/img4.jpg";
import sp5 from "../images/img5.jpg";
import sp6 from "../images/img6.jpg";


const Profile = () => {
  return (
    <>
      <div className='parent_profile'>
        <div style={{
          display: "flex", justifyContent: "space-around", margin: "18px 0px", borderBottom: "1px solid gray"
        }}>
          <div>
            <img src={sp} alt="" style={{ width: '160px', height: '160px', borderRadius: '80px' }} />
          </div>
          <div>
            <h4>saurabh pande</h4>
            <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
              <h6>40 posts</h6>
              <h6>900 followers</h6>
              <h6>20 following</h6>

            </div>
          </div>
        </div>

        <div className="gallery">
          <img className="item" alt="" src={sp1} />
          <img className="item" alt="" src={sp2} />
          <img className="item" alt="" src={sp3} />
          <img className="item" alt="" src={sp4} />
          <img className="item" alt="" src={sp5} />
          <img className="item" alt="" src={sp6} />


        </div>
      </div>

    </>
  )
}
export default Profile