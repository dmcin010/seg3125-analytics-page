import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">David McIntyre-Garcia • 300241605</p>

        <div className="footer-icons">
          <a
            href="https://github.com/dmcin010"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
