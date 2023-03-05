import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 78%;
  max-width: 78%;
  height: 100%;
  max-height: 100%;

  background: var(--white);
  box-shadow: 0px 3.89311px 18.4923px rgba(0, 0, 0, 0.25);
  border-radius: 9.73277px;
`;

export const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96%;
  height: 96%;

  background: var(--main-color);
  border-radius: 9.73277px;
`;

export const Card = styled.section`
  position: relative;
  width: 94%;
  height: 94%;

  border-radius: 9.73277px;

  display: flex;
  flex-direction: column;
`;

export const NameWrapper = styled.section`
  width: 100%;
  height: 20%;

  border-radius: 9.73277px 9.73277px 0px 0px;
  background-color: var(--secondary-color);

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Name = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 27.2518px;
  line-height: 28px;

  color: var(--white);
  margin-right: 0.8rem;
`;

export const Image = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 70%;
  
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 86%, 0 99%);
  clip-path: polygon(0 0, 100% 0, 100% 86%, 0 99%);
`;

export const SuperTrunfoImage = styled.img`
  position: absolute;
  top: 30%;
  left: 60%;
`;

export const Description = styled.p`
  z-index: 2;
  transform: rotate(-6deg);
  max-width: 360px;
  height: 200px;

  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;

  font-style: normal;
  font-weight: 300;

  color: var(--white);
`;

export const AttrWrapper = styled.section`
  height: 100%;
  background: var(--white);
  border-radius: 0px 0px 9.73277px 9.73277px;

  -webkit-clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);

  z-index: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AttrCards = styled.section`
  margin-top: 48px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Attr = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 10px 0;
  padding: 20px 0 20px 8px;

  background-color: var(--dark-white);
  border-radius: 9.73277px;
  width: 90%;
  height: 2rem;
  gap: 10px;
`;

export const AttrValue = styled.span`
  padding: 10px;
  background-color: var(--secondary-color);
  border-radius: 0px 9.73277px 9.73277px 0px;
  
  color: var(--white);
`;
