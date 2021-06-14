import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer>
        <Nav justified>
          <NavItem
            eventKey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem
            eventKey={3}>
            Some other professional link
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © ReDI SCHOOL 2021
        </div>
    </footer>
  );
}

export default Footer;
