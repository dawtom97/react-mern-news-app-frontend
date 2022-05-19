import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSinglePost, resetSinglePost } from '../actions/posts';
import SinglePostBanner from '../components/SinglePostBanner/SinglePostBanner';
import { StarterLayout } from '../layout/StarterLayout/StarterLayout';

const PostsView = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);

  useEffect(()=>{
     dispatch(getSinglePost(id));
     return () => dispatch(resetSinglePost());  
  },[dispatch])

  console.log(post)
  return (
    <StarterLayout>
       <SinglePostBanner post={post}/>
  </StarterLayout>
  )
}

export default PostsView