import styled from "styled-components";

interface ButtonStylesProps {
  color: string
  backgroundColor: string
  border: string
  fontSize: string
  fontWeight?: string
  height: string
  width: string
  borderRadius?: string
}

export const StylesButton = styled.button<ButtonStylesProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || "500"};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
`