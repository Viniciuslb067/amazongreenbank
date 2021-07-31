import styled from 'styled-components';
import { motion } from "framer-motion";
import { AiOutlineCar } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 40px;
  min-height: 52px;

`

export const Logo = styled(AiOutlineCar)`
  height: 17px;
  cursor: pointer;

  transform: scale(2.5);

`

export const Burger = styled(GiHamburgerMenu)`
  width: 24px;
  height: 24px;
  cursor: pointer;

  transform: scale(2);

  padding-right: 5px;

`

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;

      font-size: 14px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000;
      }
    }
  }
}

margin-bottom: 30px;

@media (min-width: 600px) {
  margin-bottom: 38px;
  ul {
    flex-direction: row;

    li + li {
      margin: 0 0 0 30px;
    }

  }
}
  
`