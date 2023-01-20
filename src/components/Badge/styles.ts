import {type} from "os";
import styled from "styled-components";

type BadgeProps ={
    fontSize?:number,
}

export const StyledBadge = styled.span<BadgeProps>`
  clip-path: polygon(calc(100% - 25px) 0, 100% 50%, calc(100% - 25px) 100%, 0 100%, 0 0);
  background-color:#09346B;
  text-transform: uppercase;
  padding: 5px 25px 5px 5px;
  color: #fff;
  font-weight: 600;
  font-size: ${(props) => props.fontSize? props.fontSize : 24 }px;
  width: fit-content;
  margin-bottom: 0.5em;
  display: block;
`;