import * as React from 'react';
import BasicBody from '../components/body/BasicBody';

function HOME() {
  state = {
    appName: 'Home',
  };
  return (
    <>
      <BasicBody name={this.state.appName} />
    </>
  );
}

export default HOME;
