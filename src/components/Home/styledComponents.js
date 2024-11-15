import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #1a1a19;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const ListContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    color: #dff2eb;
    margin-top: 3%;
`

export const ButtonEl = styled.button`
  background-color: transparent;
  color: #dff2eb;
  border: 0;
`

export const Para = styled.p`
  color: #dff2eb;
  font-size: 24px;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`