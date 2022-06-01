import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../../actions/posts";
import { Input} from "../../atoms/Input";
import { Textarea } from "../../atoms/Textarea";
import { Submit } from "../../atoms/Submit";
import * as Styled from "./styles";

export const PostForm = ({ currentId, setCurrentId,showCreator }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find(p => p._id === currentId) : null)
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    area: "",
    lon: "",
    lat: "",
    selectedFile: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && !currentId) {
      dispatch(createPost(postData));
    } else {
      currentId && dispatch(updatePost(currentId, postData));
    }
  }, [formErrors]);

  useEffect(()=>{
    if(post) setPostData(post)
    return () => setPostData({
      title: "",
      message: "",
      creator: "",
      tags: "",
      area: "",
      lon: "",
      lat: "",
      selectedFile: "",
    })
  },[post])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validatePost(postData));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const validatePost = (values) => {
    const errors = {};
    if (!values.title) errors.title = "Title is required";
    if (!values.message) errors.message = "Message is required";
    if (!values.creator) errors.creator = "Creator is required";
    if (!values.tags) errors.tags = "Tags is required";
    if (!values.area) errors.area = "Area is required";
    if (!values.lon) errors.lon = "Lon is required";
    if (!values.lat) errors.lat = "Lat is required";
    return errors;
  };

  return (
    <Styled.Wrapper showCreator={showCreator}>
      <form onSubmit={handleSubmit}>
        <h2>{currentId ? 'Edit Post': 'Add new post'}</h2>

        <Input
          name="title"
          type="text"
          placeholder="Post title"
          value={postData.title}
          onChange={handleChange}
        />
        <Input
          name="creator"
          type="text"
          placeholder="Post creator"
          value={postData.creator}
          onChange={handleChange}
        />
        <Input
          name="tags"
          type="text"
          placeholder="Post tags"
          value={postData.tags}
          onChange={handleChange}
        />
        <Input
          name="area"
          type="text"
          placeholder="Post area"
          value={postData.area}
          onChange={handleChange}
        />
        <Input
          name="lon"
          type="number"
          placeholder="Post lon"
          value={postData.lon}
          onChange={handleChange}
        />
        <Input
          name="lat"
          type="number"
          placeholder="Post lat"
          value={postData.lat}
          onChange={handleChange}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Textarea
          name="message"
          type="text"
          placeholder="Post message"
          value={postData.message}
          onChange={handleChange}
        />

        <Submit type="submit" value={currentId ? "Edit post": "Create post"} />
      </form>
    </Styled.Wrapper>
  );
};
