import React from 'react';
import {wp2, hp2} from '../theme';
import {SkypeIndicator} from 'react-native-indicators';

export default function GlobalLoader(props) {
  return (
    <SkypeIndicator
      style={{
        width: wp2(100),
        height: hp2(100),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      color={'white'}
    />
  );
}
