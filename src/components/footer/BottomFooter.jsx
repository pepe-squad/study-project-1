import React from 'react';

import {
  BottomDiv1,
  BottomDiv2,
  BottomDiv3,
  BottomDivColLeft,
  BottomDivColRight,
  BottomParagraphLeft,
  BottomParagraphRight
} from './footer-styled';

const BottomFooter = () => {
  return (
    <BottomDiv1>
      <BottomDiv2>
        <BottomDiv3>
          <BottomDivColLeft>
            <BottomParagraphLeft>© Pepe Squad. All Rights Reserved.</BottomParagraphLeft>
          </BottomDivColLeft>
          <BottomDivColRight>
            <BottomParagraphRight>Designed by Oris</BottomParagraphRight>
          </BottomDivColRight>
        </BottomDiv3>
      </BottomDiv2>
    </BottomDiv1>
  );
};

export default BottomFooter;
