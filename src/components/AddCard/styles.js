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

`;

export const TextArea = styled.textarea`

`;

export const InputNumber = styled.input`

`;

export const Select = styled.select`

`;

export const CheckBox = styled.input`

`;
