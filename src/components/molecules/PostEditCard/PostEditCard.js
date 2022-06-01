import moment from "moment";
import React, { useState } from "react";
import * as Styled from "./styles";
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import { useDispatch } from "react-redux";
import DeleteModal from "../DeleteModal/DeleteModal";
import { deletePost } from "../../../actions/posts";


const PostEditCard = ({ post, setCurrentId, setShowCreator }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const confirmDelete = () => {
    setModalVisible(true);
  }

  return (
    <Styled.Wrapper>
     {modalVisible && <DeleteModal confirm={()=>dispatch(deletePost(post._id))} reject={()=>setModalVisible(false)}/>}
      <MdDelete onClick={confirmDelete}/>
      <FiEdit onClick={()=> {
          setShowCreator(true)
          setCurrentId(post._id)}}
        />
      <img src={post.selectedFile}/>
      <div>
        <div>
          <p>{moment(post.createdAt).fromNow()}</p>
          <p>{post.creator}</p>
        </div>
        <h2>{post.title}</h2>
        <h3>{post.area}</h3>
      </div>
    </Styled.Wrapper>
  );
};

export default PostEditCard;
