import * as React from 'react';
import BasicBody from '../components/body/BasicBody';

function Mypage() {
  state = {
    appName: 'Mypage',
  };
  return (
    <>
      <BasicBody name={this.state.appName} />
    </>
  );
}

export default Mypage;
