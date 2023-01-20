import React from 'react'
import {StyledBadge} from './styles'

interface badgeProps{
    children: React.ReactElement[] | React.ReactElement | string,
    fontSize?: number,
}

const Badge: React.FC<badgeProps> = ({children, fontSize}) => {
  return (
    <StyledBadge fontSize={fontSize}>{children}</StyledBadge>
  )
}

export default Badge