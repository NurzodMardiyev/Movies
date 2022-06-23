const Book = (props) => {
  return (
    <div>
      <h2>{props.name ? <span>{props.name} </span> : "Defoult Book"}</h2>
      <p>{props.year ? <span>{props.year}</span> : "Second Book"}</p>
      <p>{props.price}</p>
      <i>{props.children}</i>
    </div>
  );
};

export default Book;
