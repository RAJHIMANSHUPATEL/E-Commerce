import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ stars, reviews }) => {
  // 

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    //index 0-4
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ?
          <BsStarFill />
          : stars >= number ?
            <BsStarHalf />
            : <BsStar />}
      </span>
    )
  });
  console.log(tempStars)
  return (
    <Wrapper>
      <div className="stars">
        {/* star */}
            {tempStars}
        {/* End of star */}
      </div>
      <div className="reviews">
        ({reviews} customer reviews)
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
