import React from "react";
import * as Styled from "./styles";
import { TileLayer, Marker, Popup } from "react-leaflet";
import moment from "moment";
import { likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Button } from "../../atoms/Button";
import { Title } from "../../atoms/Title";

export const SinglePostBanner = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const likes = () => {
    if (post.legitCount?.length >= 0) {
      return post.legitCount.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <Button
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <AiFillDislike /> {post.legitCount?.length}{" "}
            {post.legitCount?.length === 1 ? "confirm" : "confirms"}
          </Button>
        </>
      ) : (
        <>
          <Button
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <AiFillLike /> {post.legitCount?.length}{" "}
            {post.legitCount?.length === 1 ? "confirm" : "confirms"}
          </Button>
        </>
      );
    }
  };

  return (
    <Styled.Wrapper>
      <main>
        <Title>{post.title}</Title>
        <div>
          <p>#{post.tags}</p>
          <p>{post.area}</p>
        </div>

        {post.lon && (
          <Styled.Map
            center={[post.lon, post.lat]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[post.lon, post.lat]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Styled.Map>
        )}
      </main>

      <Styled.InfoBox>
        <div>
          <div>{likes()}</div>

          <h3>{moment(post.createdAt).fromNow()}</h3>
          <h4>Source: {post.creator}</h4>
          <p>{post.message}</p>
        </div>
        <img src={post.selectedFile} alt={post.title} />
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};

