import Movie from "./Movie";
export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <div>
          <img
            className="notFound"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
            alt="404 Image"
          />
        </div>
      )}
    </div>
  );
}
