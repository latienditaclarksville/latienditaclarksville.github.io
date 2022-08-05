import React from 'react';

const GMap = () => {
  {
    if (window.innerHeight >= 500 && window.innerHeight < 799) {
      return ( 
        <div className="mapouter">
        <div className="gmap_canvas">
          <iframe  height="200" width="200" id="gmap_canvas" src="https://maps.google.com/maps?q=3862%20Trenton%20Rd,%20Clarksville%20TN&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>
      );
    }
    else {
      return(
        <div className="mapouter">
        <div className="gmap_canvas">
          <iframe  height="200" width="300" id="gmap_canvas" src="https://maps.google.com/maps?q=3862%20Trenton%20Rd,%20Clarksville%20TN&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>
      );
    }
  }
}

export default GMap;


// <div className="mapouter">
//       <div className="gmap_canvas">
//         <iframe  height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=3862%20Trenton%20Rd,%20Clarksville%20TN&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
//         </iframe>
//       </div>
//     </div>