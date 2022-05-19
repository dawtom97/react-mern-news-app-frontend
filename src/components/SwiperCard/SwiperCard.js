import React, { memo } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";
import moment from "moment";
import { Button } from "../Button/Button";

export const SwiperCard = memo(({ post }) => {
  console.log(post);
  return (
    <Link to={`/post/${post._id}`}>
      <Styled.Wrapper image={post.selectedFile}>
        <div>
          <div>
            <p>{moment(post.createdAt).fromNow()}</p>
            <p>{post.creator}</p>
          </div>
          <h2>{post.title}</h2>
          <h3>{post.area}</h3>
          <Button>Read more</Button>
        </div>
      </Styled.Wrapper>
    </Link>
  );
});
