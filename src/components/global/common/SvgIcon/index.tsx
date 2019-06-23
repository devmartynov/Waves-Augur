import React from 'react';
import {
  StyledSvgIcon
} from './styled';

type SvgIconProps = {
  icon: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, ...restProps }) => (
  <StyledSvgIcon 
    dangerouslySetInnerHTML={{ __html: icon }} 
    {...restProps}
  />
)

export default SvgIcon;