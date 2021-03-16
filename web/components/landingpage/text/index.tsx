import styled from "@emotion/styled";
import { Heading, Text } from "rebass";
const h1FontSizes = ["32px", "64px", "64px", "80px"];
const h2FontSizes = ["32px", "64px", "64px", "64px"];
const body1FontSizes = ["21px", "21px", "21px", "25px"];
export default function LandingpageText(props: {
  variant: "h1" | "h2" | "body1";
  color?: string;
  className?: string;
  textAlign?:
    | "center"
    | "end"
    | "justify"
    | "left"
    | "match-parent"
    | "right"
    | "start";
  children: string;
}) {
  const { variant, textAlign, color } = props;
  switch (variant) {
    case "h1":
      return (
        <Heading
          className={props.className}
          color={color}
          textAlign={textAlign}
          fontSize={h1FontSizes}
          letterSpacing={"-0.03em"}
          lineHeight={"97.1%"}
        >
          {props.children}
        </Heading>
      );
    case "h2":
      return (
        <Heading
          className={props.className}
          letterSpacing={"0em"}
          lineHeight={"98.1%"}
          color={color}
          textAlign={textAlign}
          fontSize={h2FontSizes}
        >
          {props.children}
        </Heading>
      );
    case "body1":
      return (
        <Text
          fontWeight={400}
          lineHeight={"38px"}
          letterSpacing={"0em"}
          className={props.className}
          color={color ?? "#444545"}
          textAlign={textAlign}
          fontSize={body1FontSizes}
        >
          {props.children}
        </Text>
      );
  }

  return <p>{props.children}</p>;
}
