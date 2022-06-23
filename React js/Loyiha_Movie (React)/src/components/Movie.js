export default function Movie(props) {
  const { Title, Poster, Year, imdbID, Type } = props;

  return (
    <div className="card" key={imdbID}>
      <img src={Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Year}</p>
      </div>
      <div className="card-body">
        <a href="#!" className="card-link">
          Card link
        </a>
        <span className="card-link right">{Type}</span>
      </div>
    </div>
  );
}
