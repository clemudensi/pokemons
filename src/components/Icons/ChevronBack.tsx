import { FC } from 'react';
import { IconWrapper } from '@/components';
import { SVGProps } from '@/types';

export const ChevronBack: FC<SVGProps> = props => {
  return (
    <IconWrapper {...props}>
      <svg fill="currentColor" width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <title>ionicons-v5-a</title>
        <polyline fill="currentColor" points="328 112 184 256 328 400" />
      </svg>
    </IconWrapper>
  )
};
