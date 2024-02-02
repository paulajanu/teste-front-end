import styled from "styled-components";

interface ImageStylesProps {
  width?: string
  height?: string
}

export const StyledImage = styled.img<ImageStylesProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
`