import './styles.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="https://github.com/aleksandramuraveva"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          AM
        </a>
        <span className="footer-text"> © 2024 All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
