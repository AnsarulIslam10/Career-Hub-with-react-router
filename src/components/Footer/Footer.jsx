import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-10">
      <aside> 
        <p className="text-4xl font-bold">
          CareerHub
        </p>
        <p className="text-gray-400">
        There are many variations of passages of Lorem Ipsum, <br /> but the majority have suffered alteration in some form.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Work</a>
        <a className="link link-hover">latest News</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Prototype</a>
        <a className="link link-hover">Plans & Pricing</a>
        <a className="link link-hover">Customers</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Help Desk</a>
        <a className="link link-hover">Sales</a>
        <a className="link link-hover">Become a Partner</a>
        <a className="link link-hover">Developers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">524 Broadway , NYC</a>
        <a className="link link-hover">+1777-978-5570</a>
      </nav>
    </footer>
  );
};

export default Footer;
