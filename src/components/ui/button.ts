import styled from "styled-components";

const accentColor = "rgb(var(--color-nodepop))";

interface ButtonProps {
  $variant: "primary" | "secondary";
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 9999px;
  background-color: ${(props) =>
    props.$variant === "primary" ? accentColor : "white"};
  border-style: solid;
  color: ${(props) => (props.$variant === "primary" ? "white" : accentColor)};
  border-width: 1px;
  border-color: ${accentColor};
  display: inline-flex;
  align-items: center;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  padding: 0 30px;
  text-decoration: none;
  transition: background-color 0.2s;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "rgb(64, 224, 208)"
        : "rgba(var(--color-nodepop), 0.1)"};
  }
`;

Button.displayName = "Button";

export default Button;
