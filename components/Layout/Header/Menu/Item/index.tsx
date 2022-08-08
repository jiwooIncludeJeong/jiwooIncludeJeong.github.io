import React from 'react';
import styled from 'styled-components';
import { Btn } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import Color from '@assets/color';

interface Props {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

const Item: React.FC<Props> = props => {
  const { title, onClick, isSelected } = props;
  return (
    <Wrapper onClick={onClick}>
      <Typo
        fontType={isSelected ? 'EN/Body/L/Bold' : 'EN/Body/L/Medium'}
        color={Color.black}
      >
        {title}
      </Typo>
    </Wrapper>
  );
};

const Wrapper = styled(Btn)`
  margin-right: 24px;
  :last-child {
    margin-right: 0;
  }
`;

export default Item;
