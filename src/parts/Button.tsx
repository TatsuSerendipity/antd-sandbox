import React from "react";
import { Button as AntdButton } from "antd";

type ButtonProps = {
  word: string;
  type?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
};

const Button: React.FC<ButtonProps> = (props) => (
  <AntdButton type={props.type}>{props.word}</AntdButton>
);

export default Button;
