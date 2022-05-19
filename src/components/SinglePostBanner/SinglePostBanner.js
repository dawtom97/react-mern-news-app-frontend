import React from "react";
import * as Styled from "./styles";
import { TileLayer, Marker, Popup } from "react-leaflet";
import moment from 'moment'

const SinglePostBanner = ({ post }) => {
  return (
    <Styled.Wrapper>
      <main>
        <h2>{post.title}</h2>
        <div>
           <p>#{post.tags}</p>
           <p>{post.area}</p>
        </div>
     
        {post.lon && <Styled.Map
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
}
      </main>

      <Styled.InfoBox>
        <div>

          <h3>{moment(post.createdAt).fromNow()}</h3>
          <h4>Source: {post.creator}</h4>
          <p>{post.message}</p>
        </div>
        <img src={post.selectedFile} alt={post.title} />
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};

export default SinglePostBanner;
