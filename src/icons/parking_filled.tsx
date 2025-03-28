/* eslint-disable max-len,react/jsx-props-no-spreading */
import React from 'react';
import Icon from '@ant-design/icons';

function ParkingFilledSvg() {
  return (
    <svg viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor">
      <path
        d="M240 192H192v64h48c17.66 0 32-14.34 32-32S257.7 192 240 192zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM240 320H192v32c0 17.69-14.31 32-32 32s-32-14.31-32-32V160c0-17.69 14.31-32 32-32h80c52.94 0 96 43.06 96 96S292.9 320 240 320z"
      />
    </svg>
  );
}

export function ParkingFilledIcon(props: any) {
  return <Icon className="parking-filled-icon" component={ParkingFilledSvg} style={{ color: '#5578BC' }} {...props} />;
}
