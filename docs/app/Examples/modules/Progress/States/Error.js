import React from 'react';
import {Progress} from 'stardust';

const ProgressErrorExample = () => (
  <Progress percent={88} className='error'>
    There was an error
  </Progress>
);

export default ProgressErrorExample;
