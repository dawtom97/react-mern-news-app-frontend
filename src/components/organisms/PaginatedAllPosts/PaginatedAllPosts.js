import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SectionTitle from "../../molecules/SectionTitle/SectionTitle";
import { SwiperCard } from "../../molecules/SwiperCard/SwiperCard";
import * as Styled from "./styles";

export const PaginatedAllPosts = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <Styled.Wrapper>
      <SectionTitle title="All news" subtitle="See all posts on this website."/>
      <Styled.InnerWrapper>
        {currentItems &&
          currentItems.map((item) => <SwiperCard key={item._id} post={item} />)}
      </Styled.InnerWrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
      />
    </Styled.Wrapper>
  );
};
