import React from "react";
import { useSelector } from "react-redux";
import { CharityCardsSection } from "../components/CharityCardsSection/CharityCardsSection";
import MostPopularPosts from "../components/MostPopularPosts/MostPopularPosts";
import StarterBanner from "../components/StarterBanner/StarterBanner";
import { StarterLayout } from "../layout/StarterLayout/StarterLayout";

const StarterView = () => {
  const posts = useSelector((state) => state.posts);
  const refPosts = [...posts];

  const newPosts = refPosts.slice(0,6).sort().reverse();
  const filteredByLikes = refPosts.slice(0,10).sort((a,b)=> b.legitCount.length - a.legitCount.length);
 
  console.log(newPosts,filteredByLikes)
  
  return (
    <StarterLayout>
      <StarterBanner posts={newPosts}/>
      <MostPopularPosts posts={filteredByLikes}/>
      <CharityCardsSection/>
    </StarterLayout>
  );
};

export default StarterView;
