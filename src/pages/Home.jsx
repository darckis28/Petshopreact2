import { ListPosts } from "../components/ListPosts";
import { ListCategories } from "../components/listCategories";
export const Home = () => {
  return (
    <main>
      <ListCategories/>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListPosts url={"/posts"} />
    </main>
  );
};
