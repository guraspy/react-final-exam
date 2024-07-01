import React from "react";
import ContactForm from "../components/ContactForm";
import "../assets/styles/ContactPage.css";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  return (
    <div>
      <div className="back-color">
        <div className="page-content">
          <div className="header">
            <a className="header-a" href="/">
              Home
            </a>
            <a className="header-a" href="/contact">
              Contact
            </a>
            <a className="header-a" href="/about">
              About
            </a>
          </div>
          <br />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="center">Contact Us</h1>
            <br />
            <ContactForm />
            <br />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
