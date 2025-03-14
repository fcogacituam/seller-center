import Image, { ImageProps } from 'next/image';
import React from 'react';
import LogoColor from '../../public/logoColor.svg';
import LogoNeutral from '../../public/logoNeutral.svg';
import LogoWhite from '../../public/logoWhite.svg';
import LogoTransparent from '../../public/logoTransparent.svg';
import LogoIso from '../../public/iso.svg';

export enum LogoVariant {
  COLOR = 'color',
  NEUTRAL = 'neutral',
  WHITE = 'white',
  TRANSPARENT = 'transparent',
  ISO = 'iso',
}
export interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  variant?: LogoVariant;
  height?: number;
}

const Logo = ({ variant = LogoVariant.COLOR, ...props }: LogoProps) => {
  switch (variant) {
    case 'neutral':
      return <Image src={LogoNeutral} alt="Logo" {...props} />;
    case 'white':
      return <Image src={LogoWhite} alt="Logo" {...props} />;
    case 'transparent':
      return <Image src={LogoTransparent} alt="Logo" {...props} />;
    case 'iso':
      return <Image src={LogoIso} alt="Logo" {...props} />;
    case 'color':
    default:
      return <Image src={LogoColor} alt="Logo" {...props} />;
  }
};

export default Logo;
