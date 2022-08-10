import * as React from 'react';
import BasicBody from '../components/body/BasicBody';
import CalendarApp from '../components/body/CalendarApp';

function Mypage(props) {
  return (
    <>{props.route.name !== 'CALENDAR' ? <BasicBody name={props.route.name} /> : <CalendarApp />}</>
  );
}

export default Mypage;
