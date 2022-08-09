import * as React from 'react';
import BasicBody from '../components/body/BasicBody';

function Library() {
  state = {
    appName: 'Library',
  };
  return (
    <>
      <BasicBody name={this.state.appName} />
    </>
  );
}

export default Library;
