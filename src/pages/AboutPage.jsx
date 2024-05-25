// import React from 'react';

function AboutPage() {
  return (
    <div className="about-container">
      {/* <h1 className="about-title">About Us</h1> */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7448.0546930653545!2d105.83027763857612!3d21.031591772473334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.0277644!2d105.8341598!4m5!1s0x3135aba3847870db%3A0x3e6627a44ec34b3d!2zTmjDoCBRdeG7kWMgaOG7mWkgVmnhu4d0IE5hbQ!3m2!1d21.0372126!2d105.8371014!5e0!3m2!1svi!2s!4v1716653450294!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutPage;
