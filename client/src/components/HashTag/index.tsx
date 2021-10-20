/** @jsxImportSource @emotion/react */
import React, { VFC } from 'react';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { Theme } from '../../lib/styles/Theme';

interface PropsTypes {
  text: string[];
}

const HashTag: VFC<PropsTypes> = ({ text }) => {
  const theme = useTheme();
  return (
    <HashTagContainer css={HashTagContainerStyles(theme)}>
      {text.map((item, idx) => (
        <div key={idx} className="hashtag">
          #{item}
        </div>
      ))}
    </HashTagContainer>
  );
};

export default HashTag;

const HashTagContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .hashtag {
    border-radius: 10px;
    margin-right: 0.75rem;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const HashTagContainerStyles = (theme: Theme) => css`
  .hashtag {
    border: 1px solid ${theme.input};
    color: ${theme.input};
  }
`;
