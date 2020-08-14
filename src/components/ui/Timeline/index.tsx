import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

function isEndDateEmpty(startDate:string, endDate:string){

  if(endDate===""){
    return (
      <Styled.Date> 
        {startDate}
      </Styled.Date>
      );
  }
  else{
    return (
      <Styled.Date> 
        {startDate} - {endDate}
      </Styled.Date>
    );
  }
}

const Timeline: React.FC<Props> = ({ title, subtitle, content, startDate, endDate }) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      {/* <Styled.Date>
        {startDate} - {endDate}
      </Styled.Date> */}
      {isEndDateEmpty(startDate, endDate)}
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Details>
    <Styled.Content>{content}</Styled.Content>
  </Styled.Timeline>
);

export default Timeline;
