import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminPostsSection from "../components/AdminPostsSection/AdminPostsSection";
import { CreatorSwitcher } from "../components/CreatorSwitcher/CreatorSwitcher";
import { PostForm } from "../components/PostForm/PostForm";
import { StarterLayout } from "../layout/StarterLayout/StarterLayout";

export const AddPostView = () => {
  const posts = useSelector((state) => state.posts);
  const [showCreator, setShowCreator] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  
  const refPosts = [...posts];
  return (
    <StarterLayout>
      
      <PostForm
        currentId={currentId}
        setCurrentId={setCurrentId}
        showCreator={showCreator}
      />
      <CreatorSwitcher
        onClick={() => {
          setCurrentId(null);
          setShowCreator(!showCreator);
        }}
      >
        +
      </CreatorSwitcher>
      <AdminPostsSection
        posts={refPosts}
        setCurrentId={setCurrentId}
        setShowCreator={setShowCreator}
        
      />
    </StarterLayout>
  );
};
