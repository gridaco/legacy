import styled from "@emotion/styled";
import React from "react";
/**
 * `<SectionConfiguration>` ('section-configuration')
 * - [Open in Figma](https://figma.com/file/Gaznaw1QHppxvs9UkqNOb0?node-id=8266:64062)
 * - [Open in Grida](https://code.grida.co/files/Gaznaw1QHppxvs9UkqNOb0?node=8266:64062)
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
 *       <SectionConfiguration/>
 *     </>
 *   )
 * }
 * ```
 * ---
 * @params {any} props - this widget does not requires props. you can pass custom dynamic props to the widget as you want (on typescript, it will raise type check issues).
 * ---
 * @preview
 * ![](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a03de4f-fb68-4ed8-91c9-c4b559db2b8c)
 * ---
 * @remarks
 * @see {@link https://grida.co/docs} for more information.
 * ---
 * Code generated by grida.co | engine 0.0.1 (Apache-2.0) | Generated code under CC0 (public domain) *This code is free to use, modify, and redistribute. (aknowledgment is not required)*
 *
 *
 * ![Made with Grida](https://bridged-service-static.s3.us-west-1.amazonaws.com/branding/logo/32.png)
 * <!-- Info: Please do not remove this comment unless intended. removing this section will break grida integrations. -->
 * <!-- grida.meta.widget_declaration | engine : 0.0.1 | source : figma://Gaznaw1QHppxvs9UkqNOb0/8266:64062 -->
 */
export function SectionConfiguration({
  onSeeTheDocsClick,
}: {
  onSeeTheDocsClick?: () => void;
}) {
  return (
    <RootWrapperSectionConfiguration>
      <LeftContainer>
        <Contents>
          <ContentsHeader>
            <FitsIntoYourConfiguration>
              Fits into your configuration.
            </FitsIntoYourConfiguration>
            <Description>
              Configure grida with grida.confg.js. You can define plugins,
              output code styles and customize the behaviour deep down to AST
              level.
            </Description>
          </ContentsHeader>
          <ContentsList>
            <FeatureListItem>
              <Check />
              <Label>secure, runs locally</Label>
            </FeatureListItem>
            <FeatureListItem>
              <Check />
              <Label>zero dependency by default</Label>
            </FeatureListItem>
            <FeatureListItem>
              <Check />
              <Label>works with svelte</Label>
            </FeatureListItem>
            <FeatureListItem>
              <Check />
              <Label>works with solid-js</Label>
            </FeatureListItem>
            <FeatureListItem>
              <Check />
              <Label>works with vanilla html/css</Label>
            </FeatureListItem>
            <FeatureListItem>
              <Check />
              <Label>works with react & react-native</Label>
            </FeatureListItem>
            <FeatureListItem>
              <Check />
              <Label>works with flutter</Label>
            </FeatureListItem>
          </ContentsList>
          <StartAsButton onClick={onSeeTheDocsClick}>
            See the docs
          </StartAsButton>
        </Contents>
      </LeftContainer>
      {/* <RightContainer>
        <Src
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6bc8df7-dc04-435d-86d8-8e2b70214973"
          alt="image of Src"
        />
        <OverlayContainer>
          <GetStartedWithThis5MinuteGuide>
            Get started with this 5 minute guide.
          </GetStartedWithThis5MinuteGuide>
        </OverlayContainer>
        <VideoPlayDefaultArtwork
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/839ad44e-858a-47fb-93ef-cd3bf85a4e1d"
          alt="image of VideoPlayDefaultArtwork"
        />
      </RightContainer> */}
    </RootWrapperSectionConfiguration>
  );
}

const Check = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_8393_56954)">
        <path
          d="M6.5001 11.2799L3.7201 8.4999L2.77344 9.43989L6.5001 13.1666L14.5001 5.16656L13.5601 4.22656L6.5001 11.2799Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_8393_56954">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const RootWrapperSectionConfiguration = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  min-height: 100vh;
  background-color: black;
  box-sizing: border-box;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  width: 720px;
  height: 659px;
  box-sizing: border-box;
  padding: 0px 80px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 56px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  box-sizing: border-box;
`;

const ContentsHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  align-self: stretch;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const FitsIntoYourConfiguration = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 48px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 95%;
  text-align: left;
  width: 417px;
`;

const Description = styled.span`
  color: rgba(255, 255, 255, 0.6);
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
  line-height: 167%;
  max-width: 500px;
  text-align: left;
  align-self: stretch;
  flex-shrink: 0;
`;

const ContentsList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 24px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  box-sizing: border-box;
`;

const FeatureListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: black;
  box-sizing: border-box;
`;

const IconsMdiCheck = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

const Label = styled.span`
  color: rgba(255, 255, 255, 0.9);
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
  text-align: left;
`;

const StartAsButton = styled.button`
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  padding: 10px 16px;
  color: white;
  font-size: 18px;
  font-family: "Roboto Mono", monospace !important;
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

const RightContainer = styled.div`
  width: 720px;
  overflow: hidden;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  position: relative;
  align-self: stretch;
  flex-shrink: 0;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Src = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 1px;
`;

const OverlayContainer = styled.div`
  overflow: hidden;
  background: linear-gradient(-180deg, rgba(0, 0, 0, 0), black);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 1px;
`;

const GetStartedWithThis5MinuteGuide = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 32px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 700;
  line-height: 95%;
  text-align: left;
  width: 311px;
  position: absolute;
  left: 48px;
  top: calc((calc((50% + 270px)) - 30px));
`;

const VideoPlayDefaultArtwork = styled.img`
  width: 112px;
  height: 112px;
  object-fit: cover;
  position: absolute;
  left: calc((calc((50% + 0px)) - 56px));
  top: calc((calc((50% + -132px)) - 56px));
`;
