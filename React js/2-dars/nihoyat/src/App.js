import "./App.css";
import Book from "./Book";
import Loader from "./Loader";

function App(props) {
  return props.isLoading ? (
    <Loader />
  ) : (
    <div>
      <Book name="JS for beginners" year="2012" price="50">
        Extra inform
      </Book>
      <Book name="JS for beginners" year="2012" price="50" />
      <Book name="JS for beginners" year="2012" price="50" />
    </div>
  );
}

export default App;
