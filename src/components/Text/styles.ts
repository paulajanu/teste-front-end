import styled from "styled-components";

interface TextStylesProps {
  color?: string
  fontSize?: string
  fontWeight?: string
}

export const StylesText = styled.p<TextStylesProps>`
    color: ${(props) => props.color || props.theme.colors.background};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
`
