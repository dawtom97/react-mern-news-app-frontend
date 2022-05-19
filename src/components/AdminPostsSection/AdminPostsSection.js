import React, { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import PostEditCard from '../PostEditCard/PostEditCard';
import * as Styled from './styles'
import {useDispatch} from 'react-redux';


const AdminPostsSection = ({posts, setCurrentId, setShowCreator}) => {

  return (
    <Styled.Wrapper>
       
       <h1>Admin dashboard</h1>
       <Styled.Posts>
           {posts.map(post => <PostEditCard key={post._id} post={post} setCurrentId={setCurrentId} setShowCreator={setShowCreator}/>)}
       </Styled.Posts>
      
    </Styled.Wrapper>
  )
}

export default AdminPostsSection;