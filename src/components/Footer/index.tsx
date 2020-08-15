import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/verma-ananya" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/ananya-verma-548626b6/" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
        <Styled.Link href="https://twitter.com/ananyav06" rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
        {/* <Styled.Link href="https://www.hackerrank.com/lincolnav829" rel="noreferrer noopener" target="_blank">
          Hackerrank
        </Styled.Link> */}
        <Styled.Link href="https://www.instagram.com/ms.vama/" rel="noreferrer noopener" target="_blank">
          Instagram
        </Styled.Link>
        <Styled.Link href="https://www.facebook.com/ananya.verma06" rel="noreferrer noopener" target="_blank">
          Facebook
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
