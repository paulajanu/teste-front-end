import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 187px;
  padding-top: 32px;
  padding-left: 106px;
  background-color: ${props => props.theme.colors.primary};

  & > * + * {
    margin-top: 12px;
  }
`

export const HeaderOptions = styled.div`
  display: flex;
`

export const Space = styled.div`
  color: ${props => props.theme.colors.background};
  margin-right: 5px; 
  margin-left: 5px;
`