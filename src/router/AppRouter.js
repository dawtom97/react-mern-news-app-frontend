import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { AddPostView } from "../views/AddPostView";
import AuthView from "../views/AuthView";
import PostsView from "../views/PostsView";
import StarterView from "../views/StarterView";

export const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarterView />} />
        <Route path="/auth" element={<AuthView />} />
        <Route path="/post/:id" element={<PostsView />} />
        <Route path="/admin/add-post" element={user?.result?._id === process.env.REACT_APP_ADMIN_ID ?<AddPostView /> : <Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
};
