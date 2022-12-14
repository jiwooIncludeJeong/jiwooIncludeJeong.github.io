import React from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import { EmailIcon, GithubIcon, LinkedinIcon, VelogIcon } from '@assets/icons';
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  VELOG_URL,
} from '@constants/introduce';
import IntroduceButtonItem from '@components/Introduce/IntroduceButtons/IntroduceButtonItem';

interface Props {}

const IntroduceButtons: React.FC<Props> = props => {
  const {} = props;
  return (
    <Wrapper>
      <IntroduceButtonItem
        href={GITHUB_URL}
        renderIcon={() => <GithubIcon width={32} height={32} />}
      />
      <IntroduceButtonItem
        href={LINKEDIN_URL}
        renderIcon={() => <LinkedinIcon width={32} height={32} />}
      />
      <IntroduceButtonItem
        href={`mailto:${EMAIL}`}
        renderIcon={() => <EmailIcon width={32} height={32} />}
      />
      <IntroduceButtonItem
        href={VELOG_URL}
        renderIcon={() => <VelogIcon width={32} height={32} />}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  path {
    fill: ${({ theme }) => theme.color.white};
  }
`;

export default IntroduceButtons;
