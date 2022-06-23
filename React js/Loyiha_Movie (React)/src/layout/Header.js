export default function Header() {
  return (
    <nav className="navbar text-bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">
          React
        </a>
        <form className="d-flex" role="search">
          <a className="href_movie rgiht white" href="#!" type="submit">
            Movies
          </a>
        </form>
      </div>
    </nav>
  );
}
