import { FC } from 'react';
import { IconWrapper } from '@/components';
import { SVGProps } from '@/types';

export const SarIcon: FC<SVGProps> = props => {
  return (
    <IconWrapper {...props}>
      <svg fill="currentColor" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           viewBox="0 0 473.486 473.486" xmlSpace="preserve">
        <polygon fill="currentColor" points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257
          237.732,386.042 384.416,460.829 357.032,298.473 "/>
      </svg>
    </IconWrapper>
  )
};

