import React from "react";

const Main = () => {
  return (
    <div className="row main-page">
      <img
        src="https://avatars1.githubusercontent.com/u/29682663?s=400&u=1b6f0eb98c5f80db05541167834983cdcdcdd468&v=4"
        alt="jayburbygaAvatar"
        id="avatar-img"
      />
      <header>Hi There! I'm Jay</header>
      <div className="banner-text">
        <h1>Web Developer</h1>
        <p>HTML/CSS | JavaScript | ReactJs | Express | Ruby/Rails </p>
        <div className="social-links">
          {/*fcc */}
          <a
            href="https://www.freecodecamp.org/jaybur1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-free-code-camp" />
          </a>
          {/*linkedin */}
          <a
            href="https://www.linkedin.com/in/jay-burbyga-b21409156/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          {/*github */}
          <a
            href="https://github.com/Jaybur1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
