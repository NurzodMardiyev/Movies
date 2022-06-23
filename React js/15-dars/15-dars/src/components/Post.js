import PostList from "./PostList";

export default function Post(props) {
  return (
    <div>
      {props.count.map((post) => {
        <PostList name={post.name} key={post.id} />;
      })}
    </div>
  );
}
