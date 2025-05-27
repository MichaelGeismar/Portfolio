const Footer = () => (
  <footer className="TabContentFooter">
    <div className="FooterContent px-20 flex flex-col md:flex-row">
      <div>
        <h3 className="FooterHeaders mb-4">Contact</h3>
        <p> Email: Michael.L.Geismar@gmail.com </p>
        <p> Phone: 917-623-4478 </p>
        <p> Based in Arvada, CO </p>
      </div>
      <div>
        <h3 className="FooterHeaders md:ms-2 mb-3">Links:</h3>
        <div className="flex flex-row gap-10">
          <a
            href="https://github.com/MichaelGeismar"
            className="FooterLinks block"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/michael-geismar"
            className="FooterLinks block"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div className="FooterFooter">
      © 2025 Michael Geismar. All rights reserved.{" "}
    </div>
  </footer>
);
export default Footer;
