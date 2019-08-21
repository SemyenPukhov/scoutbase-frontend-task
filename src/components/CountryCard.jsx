import styled from 'styled-components';

export const CountryCard = styled.div`
  padding: 30px;
  color: #282828;
  background: #fff;
  width: 100%;
  height: auto;
  position: relative;
  margin: 15px;
  max-width: 320px;
  box-shadow: 0 4px 8px rgba(14, 51, 76, 0.252689);
  border-radius: 8px;
`;

export const CountryCardTitle = styled.div`
  height: 75px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  h3 {
    line-height: 1.2222222222;
  }
`;

export const CountryCardText = styled.div`
  min-height: 155px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  width: 100%;
  color: #1c272b;
`;

export const CountryCardButton = styled.a`
  border: 1px solid #1c272b;
  background-color: #1c272b;
  padding: 0 25px;
  border-radius: 50px;
  width: auto;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  ont-size: 16px;
  font-weight: 700;
  outline: 0;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, background 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  :hover {
    background-color: #3a5159;
    cursor: pointer;
  }
  :hover,
  :focus,
  :active {
    outline: 0 !important;
    text-decoration: none;
  }
`;

export const CountryCardProps = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CountryCardProp = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 20px;
  margin: 5px 0;
`;

export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #1c272b;
  position: fixed;
  top: 92%;
  left: 92%;
  cursor: pointer;
`;
