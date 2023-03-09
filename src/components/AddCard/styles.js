import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  padding: 3rem 0;
  margin: auto;

  background-color: var(--white);
  border-radius: 2%;
  width: 50%;
  max-width: 50%;
  height: 860px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 80%;
  max-height: 80%;
`;

export const FormTitle = styled.h2`
  font-style: italic;
  font-weight: 800;
  font-size: 28px;
  line-height: 29px;
  text-transform: uppercase;

  color: var(--accent-color);
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
`;

export const PreviewTitle = styled.h2`
  font-style: italic;
  font-weight: 800;
  font-size: 28px;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;

  color: var(--accent-color);
`;

export const Label = styled.label`
  color: var(--grey);

  display: flex;
  gap: 6px;
`;

export const InputText = styled.input`
  color: var(--grey);
  border-bottom-color: var(--grey);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: .009375em;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 16px 6px;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 3px solid;
  border-radius: 4px 4px 0 0;
  height: 56px;

  &:hover{
      border-bottom-color: var(--grey);
      background: #ececec;
  }
  &:focus{
      outline: none;
  }
`;

export const TextArea = styled.textarea`
  color: var(--grey);
  border-bottom-color: var(--grey);
  box-sizing: border-box;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 3px solid;
  border-radius: 4px 4px 0 0;
  padding: 20px 16px 6px;

  &:hover{
      border-bottom-color: var(--grey);
      background: #ececec;
  }
  &:focus{
      outline: none;
  }
`;

export const InputNumber = styled.input`
  color: var(--grey);
  box-shadow: inset var(--grey) 0 0 0 2px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  appearance: none;
  width: 100%;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  transition: all .2s ease;
  
  &:hover{
      /* box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px; */
  }
  &:focus{
      background: #fff;
      outline: 0;
      /* box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px; */
  }
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Select = styled.select`

`;

export const CheckBox = styled.input`

`;

export const ErrorIcon = styled.img`
  width: 14px;
`;

export const CompleteIcon = styled.img`
  width: 14px;
`;

export const InputWrapper = styled.section`
  display: flex;
  gap: 6px;
`;
