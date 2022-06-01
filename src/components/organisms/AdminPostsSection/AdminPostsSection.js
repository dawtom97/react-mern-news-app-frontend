import React from 'react';
import PostEditCard from '../../molecules/PostEditCard/PostEditCard';
import * as Styled from './styles'

export const AdminPostsSection = ({posts, setCurrentId, setShowCreator}) => {

  return (
    <Styled.Wrapper>
       
       <h1>Admin dashboard</h1>
       <Styled.Posts>
           {posts.map(post => <PostEditCard key={post._id} post={post} setCurrentId={setCurrentId} setShowCreator={setShowCreator}/>)}
       </Styled.Posts>
      
    </Styled.Wrapper>
  )
}
