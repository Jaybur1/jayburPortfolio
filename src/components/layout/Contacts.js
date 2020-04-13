import React from "react";

const Contacts = () => {
  return (
    <div className="contact-page">
      <h1 className="center" style={{ fontWeight: "bold" }}>
        Contact me
      </h1>
      <div className="contacts">
        <span className="contacts">
          <i class="fas fa-phone-square"></i>
          <span className="contact-content"> +1(343)-204-5511</span>
        </span>
        <span className="contacts">
          <i class="fas fa-envelope-square"></i>
          <a
            href="mailto:jayburbyga@gmail.com"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold"
            }}
          >
            <span className="contacts-content"> jayburbyga@gmail.com</span>
          </a>
        </span>
        <span className="contacts">
        <i class="fab fa-skype"></i>
        <span className="contacts-content" style={{ fontWeight: "bold" }}>
          jekaburbyga
        </span>
        </span>
        <span className="contacts">
        <i class="fab fa-facebook-messenger"></i>
        <span className="contacts-content" style={{ fontWeight: "bold" }}>
          Jay Burbyga
        </span>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
