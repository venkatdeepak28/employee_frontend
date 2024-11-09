import styled from "styled-components"

export const MainContainer = styled.div`
  background-color: #1a1a19;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`
export const LabelEl = styled.label`
  color: #dff2eb;
  margin-right: 10%;
  margin-bottom: 1%;
`
export const InputEl = styled.input`
  margin-bottom: 1%;
  width: 15%;
  height: 5%;
  padding-left: 1%;
`
export const ButtonEl = styled.button`
  background-color: #31511e;
  margin-top: 2%;
  color: #dff2eb;
  border: 0;
  height: 25px;
  width: 65px;
`
export const ErrPara = styled.p`
  color: #c62e2e;
  text-align: center;
`