import Post from "./Post";
import classes from "./posts.module.css";

export default function Posts() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Actualité:</p>
      <div className={classes.posts}>
        <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </div>
    </div>
  );
}
