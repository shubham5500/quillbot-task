import styled from 'styled-components';
export const Text = styled.div`
  font-size: ${props => props.fontSize || '16px'};
  margin: 0;
  color: ${props => props.color || 'inherit'}
`;

export const SmallText = styled.div`
  font-size: 14px;
  margin: 0;
`;

export const Heading = styled.h1`
  font-size: 42px;
  margin: 0;
`;

export const SubHeading = styled.h2`
  font-size: 29px;
  margin: 0;
`;

export const SmallHeading = styled.h3`
  font-size: 24px;
  margin: 0;
`;

export const MediumHeading = styled.h5`
  font-size: 16px;
  margin: 0;
`

