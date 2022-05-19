import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import StarterBanner from "../components/StarterBanner/StarterBanner";
import { StarterLayout } from "../layout/StarterLayout/StarterLayout";

const StarterView = () => {
  const posts = useSelector((state) => state.posts);
  const refPosts = [...posts];
  
  return (
    <StarterLayout>
      <StarterBanner posts={refPosts.splice(0,6)}/>
    </StarterLayout>
  );
};

export default StarterView;
