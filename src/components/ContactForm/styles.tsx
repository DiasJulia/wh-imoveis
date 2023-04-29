import styled from "styled-components";

type DivProps = {
  justifyContent?: string;
  flexDirection?: string;
};

export const Container = styled.section`
  padding: 2em max(calc(100vw - 1100px) / 2, 1rem);
  margin-top: 115px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const FlexDiv = styled.div<DivProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
`;

export const Form = styled.form`
    button {
        background: #09346B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        color: #fff;
        align-self: flex-end;
        padding: 10px 20px;
        cursor: pointer;
        border: none;
    }
`;

export const InputContainer = styled.div`
  padding-top: 10px;
  label {
    position: absolute;
    margin-top: -8px;
    margin-left: 8px;
    color: #808080;
    font-weight: 400;
    font-size: 14px;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  }

  input:focus {
    border: 2px solid #7a7a7a;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 15px;
  min-height: 32px;
  padding: 5px;
  width: 40vw;

  &:focus {
    border: 0.2px solid #a6a6a6;
    outline: none;
  }
`;

export const TextField = styled.textarea`
  resize: none;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 5px;
  width: 40vw;

  :focus {
    border: 2px solid #7a7a7a;
  }
`;
