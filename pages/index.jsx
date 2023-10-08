import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="container">
      <div className="header">
        <img
          src="https://github.com/JaySaints.png"
          alt="Logo"
          width="150"
          height="150"
        />
      </div>
      <div className="under-construction">
        <p>
          This is my piece of the internet, which for now is in the process of
          being construction. 🚀
        </p>
      </div>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/pablo-j-santos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} color="rgb(0, 119, 181)" />
        </a>
        <a
          href="https://github.com/JaySaints"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} color="rgb(43, 49, 55)" />
        </a>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 90vh;
        }

        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 30px;
          background-color: #f2f2f2;
          box-shadow: 2px 5px 5px rgb(43, 49, 55);
        }

        .under-construction {
          text-align: center;
          margin: 20px;
          box-shadow: 2px 5px 5px rgb(43, 49, 55);
          padding: 20px;
          border-radius: 10px;
          background-color: #f2f2f2;
        }

        .under-construction p {
          margin: 0;
        }

        .links {
          display: flex;
          gap: 20px;
        }

        img {
          max-width: 100%;
          height: auto;
          border-radius: 30px;
        }
      `}</style>
    </div>
  );
}

export default Home;
