import React from "react";
import { useSelector } from "react-redux";
import { CharityCardsSection } from "../components/organisms/CharityCardsSection/CharityCardsSection";
import MostPopularPosts from "../components/organisms/MostPopularPosts/MostPopularPosts";
import { PaginatedAllPosts } from "../components/organisms/PaginatedAllPosts/PaginatedAllPosts";
import StarterBanner from "../components/organisms/StarterBanner/StarterBanner";
import { StarterLayout } from "../layout/StarterLayout/StarterLayout";

const StarterView = () => {
  const posts = useSelector((state) => state.posts);
  const refPosts = [...posts];

  const newPosts = refPosts.slice(0,6).sort().reverse();
  const filteredByLikes = refPosts.slice(0,10).sort((a,b)=> b.legitCount.length - a.legitCount.length);
  
  return (
    <StarterLayout>
      <StarterBanner posts={newPosts}/>
      <MostPopularPosts posts={filteredByLikes}/>
      <CharityCardsSection/>
      <PaginatedAllPosts itemsPerPage={5} items={refPosts}/>
    </StarterLayout>
  );
};

export default StarterView;
