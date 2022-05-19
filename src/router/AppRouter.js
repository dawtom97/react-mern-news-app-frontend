import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddPostView } from "../views/AddPostView";
import PostsView from "../views/PostsView";
import StarterView from "../views/StarterView";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarterView />} />
        <Route path="/post/:id" element={<PostsView />} />
        <Route path="/admin/add-post" element={<AddPostView />} />
      </Routes>
    </BrowserRouter>
  );
};
