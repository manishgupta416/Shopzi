import React from 'react'

const Footer = () => {
  return (
    <> <div className="footer-container">
    <div className="footer-links">
      <a target="_blank" rel="noreferrer" href="https://github.com/manishgupta416">
        <i class="fa-brands fa-github fa-2x" style={{ color: "white" }}></i>
      </a>
      <a href="https://www.linkedin.com/in/imanishgupta1/" target="_blank" rel="noreferrer">
        <i
          class="fa-brands fa-linkedin fa-2x"
          style={{ color: "white" }}
        ></i>
      </a>
      <a href="https://twitter.com/manish_gupta416" target="_blank" rel="noreferrer" >
        <i
          class="fa-brands fa-twitter fa-2x"
          style={{ color: "white" }}
        ></i>
      </a>
    </div>
    <div className="footer-text"><p>© 2023 Shopzi Ltd. All rights reserved</p></div>
  </div></>
  )
}

export default Footer