import styled from 'styled-components'

export const StyledCard = styled.div`
  grid-area: ${props => props.gridArea};
  border-radius: 20px;
  border: 1px solid lightgray;
  background-color: white;
  padding: 2px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
`
export const CardBody = styled.div`
  margin-top: -20px;
  border-radius: 17px;
  background-color: white;
  padding: 21px;
`

export const Header = styled.header`
  padding: 12px;
  padding-bottom: 30px;
  color: white;
  line-height: 1.5;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
  font-size: 15px;
  text-transform: uppercase;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
`
