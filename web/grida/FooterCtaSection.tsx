import styled from "@emotion/styled";
import React from "react";
/**
 * `<FooterCtaSection>` ('footer-cta-section --width=50vh')
 * - [Open in Figma](https://figma.com/file/Gaznaw1QHppxvs9UkqNOb0?node-id=8266:64063)
 * - [Open in Grida](https://code.grida.co/files/Gaznaw1QHppxvs9UkqNOb0?node=8266:64063)
 *
 *
 * ---
 * @example
 * ```tsx
 * import React from "react";
 *
 * export default function () {
 *   return (
 *     <>
 *       👇 instanciate widget like below. 👇
 *       <FooterCtaSection/>
 *     </>
 *   )
 * }
 * ```
 * ---
 * @params {any} props - this widget does not requires props. you can pass custom dynamic props to the widget as you want (on typescript, it will raise type check issues).
 * ---
 * @preview
 * ![](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ccfbff5-0f8c-4c09-9755-6c4229851974)
 * ---
 * @remarks
 * @see {@link https://grida.co/docs} for more information.
 * ---
 * Code generated by grida.co | engine 0.0.1 (Apache-2.0) | Generated code under CC0 (public domain) *This code is free to use, modify, and redistribute. (aknowledgment is not required)*
 *
 *
 * ![Made with Grida](https://bridged-service-static.s3.us-west-1.amazonaws.com/branding/logo/32.png)
 * <!-- Info: Please do not remove this comment unless intended. removing this section will break grida integrations. -->
 * <!-- grida.meta.widget_declaration | engine : 0.0.1 | source : figma://Gaznaw1QHppxvs9UkqNOb0/8266:64063 -->
 */
export function FooterCtaSection({
  copyText = "npx grida init",
  onCopyClick,
  onStartClick,
}: {
  copyText?: string;
  onCopyClick?: (text: string) => void;
  onStartClick?: () => void;
}) {
  return (
    <RootWrapperFooterCtaSectionWidth50Vh>
      <HeadingAsH3>CI your design.</HeadingAsH3>
      <CtaContainer>
        <StartAsButton onClick={onStartClick}>Start Coding</StartAsButton>
        <CopyAsButton onClick={() => onCopyClick?.("npx grida init")}>
          {copyText}
        </CopyAsButton>
      </CtaContainer>
    </RootWrapperFooterCtaSectionWidth50Vh>
  );
}

const RootWrapperFooterCtaSectionWidth50Vh = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 51px;
  box-shadow: 0px 4px 48px 24px rgba(0, 0, 0, 0.04);
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-height: 60vh;
  background-color: white;
  box-sizing: border-box;
`;

const HeadingAsH3 = styled.h3`
  color: black;
  text-overflow: ellipsis;
  font-size: 74px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  text-align: center;
  align-self: stretch;
  flex-shrink: 0;
`;

const CtaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 16px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  box-sizing: border-box;
`;

const StartAsButton = styled.button`
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  padding: 10px 16px;
  color: white;
  font-size: 18px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.5;
  }

  :active {
    opacity: 1;
  }

  :focus {
  }
`;

const CopyAsButton = styled.button`
  background-color: rgba(0, 0, 0, 0.02);
  border: solid 1px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 10px 16px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 400;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.5;
  }

  :active {
    opacity: 1;
  }

  :focus {
  }
`;
