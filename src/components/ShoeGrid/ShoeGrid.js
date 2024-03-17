import React from 'react';
import styled from 'styled-components/macro';
import Spacer from '../Spacer';
import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 32px;
& img {
  width: 100%;
}
& > * {
  flex: 1 1 344px;
}
`

export default ShoeGrid;
