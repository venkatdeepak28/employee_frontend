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

export const MainHeading = styled.h1`
  color: #7ed4ad;
  margin-left: 10%;
  margin-top: 3%;
  margin-bottom: 4%;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dff2eb;
  height: 50vh;
`
export const LabelEl = styled.p`
  margin-right: 5%;
`

export const ButtonSubmitEl = styled.button`
  background-color: #31511e;
  margin-top: 2%;
  color: #dff2eb;
  border: 0;
  padding: 10px;
`