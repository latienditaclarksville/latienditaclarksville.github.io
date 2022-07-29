import React from 'react';

const GMap = () => {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe  height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=3862%20Trenton%20Rd,%20Clarksville%20TN&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
      </div>
    </div>
  );
}

export default GMap;