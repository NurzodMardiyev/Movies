export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright1">
        <div className="container1">
          © {new Date().getFullYear()} Copyright Text
        </div>
        <a className="footer_movie" href="#!">
          Movies
        </a>
      </div>
    </footer>
  );
}
