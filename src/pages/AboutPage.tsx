import "../assets/styles/AboutPage.css";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
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
            <h1>About Us</h1>
            <div className="about">
              <p>შეიცავს 3 გვერდს: /, /contact და /about.</p>
              <p>ჰოუმზე არის ორი ღილაკი სესიის და ლოკალური სთორეჯისთვის.</p>
              <p>axios-ის და custom hook-ის დახმარებით მომაქვს json.</p>
              <p>ვიყენებ Framer Motion-ს სამივე გვერდზე.</p>
              <p>კონტაქტის გვერდზე React Hook Form-ს და Yup-ს ვიყენებ. </p>
            </div>
          </motion.div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
