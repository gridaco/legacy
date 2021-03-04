import React from "react";
import Image from "next/image";
import { Flex, Button, Text, Box } from "rebass";
import styled from "@emotion/styled";
import Link from "next/link";
import Icon from "components/icon";
import CodeFrameworks from "./code-framework";
import DesignPlatforms from "./design-platform";
import ActionItem from "components/action-item";

const Onair = () => {
  return <OnairButton>ON AIR</OnairButton>;
};

const OnairButton = styled.button`
  margin-left: 20px;

  // region gradient animation
  background: linear-gradient(318deg, #f537ff, #ff6565, #ff379f, #ff373e);
  background-size: 800% 800%;
 
  animation: AutoGradient 3s ease infinite;

  @keyframes AutoGradient {
    0% {
      background-position: 0% 42%;
    }
    50% {
      background-position: 100% 59%;
    }
    100% {
      background-position: 0% 42%;
    }
  }
  // endregion gradient animation

  box-shadow: 0px 4px 32px rgba(255, 0, 0, 0.25);
  width: 140px;
  padding: 12px;
  border: none;
  border-radius: 19px;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

const BridgedIntroduce = () => {
  return (
    <IntroduceWrapper alignItems="center" justifyContent="center">
      <Flex
        width={["320px", "730px", "985px", "1040px"]}
        mx="20px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box mr="auto">
          <Text fontSize={["36px", "36px", "64px"]} fontWeight="bold">
            Designs,
          </Text>
          <Text fontSize={["36px", "36px", "64px"]} fontWeight="bold">
            come to live.
          </Text>

          <Desc mr="auto" mt="30px">
            Keep you design live, not as a prototype, but as a product.
            Instantly convert your design to code, prototype, product within a
            click. No coding required
          </Desc>
        </Box>
        <AbsoulteImageArea>
          <DesignPlatforms />
          <CodeFrameworks />
        </AbsoulteImageArea>
        <Flex width="100%" justifyContent="space-between">
          <Box>
            <Text fontSize="24px" mb="17px">
              What you’ve just sketched?
            </Text>
            <Flex>
              <Text
                fontSize={["36px", "36px", "64px"]}
                fontWeight="bold"
                mb="35px"
                style={{ display: "flex", alignItems: "center" }}
              >
                That just got <Onair />
              </Text>
            </Flex>

            <LiveAreaMobile className="no-drag">
              <Image
                className="app"
                src="/simluator.png"
                width="390"
                height="788"
              />
              <GradientView>
                <Image src="/gradient-live.png" width="478" height="814" />
              </GradientView>
            </LiveAreaMobile>

            <Desc mr="auto" mb="70px">
              Design to Code Feature supports Major design tools including
              Sketch, Figma and Adobe XD. Code is converted to Major Platforms /
              Languages / Frameworks with various coding styles. These lines of
              code is ready to use.
            </Desc>

            <ActionItem label="How do Design to code work?" href="/" />
            <ActionItem label="That just got ON AIR" href="/" />
          </Box>
          <LiveAreaDesktop className="no-drag">
            <IphoneView className="app">
              <Image src="/simluator.png" width="auto" height="auto" />
            </IphoneView>
            <GradientView>
              <Image src="/gradient-live.png" width="1440" height="1040" />
            </GradientView>
          </LiveAreaDesktop>
        </Flex>
      </Flex>
    </IntroduceWrapper>
  );
};

export default BridgedIntroduce;

const PlatformMotions = styled(Box)`
  width: 280px;
  height: 350px;
  background: #f3f3f3;
  border-radius: 12px;
  position: absolute;
  left: -5.5%;
  top: 15%;
`;

const Platforms = styled(Flex)`
  height: 36px;

  span {
    width: 24px;
    height: 24px;
    background-color: #000;
    margin-left: 24px;
  }
`;

const IntroduceWrapper = styled(Flex)`
  height: 2000px;

  @media (max-width: 768px) {
    height: 2500px;
  }
`;

const Desc = styled(Text)`
  max-width: 520px;
  font-size: 24px;
  color: #444545;

  @media (max-width: 800px) {
    max-width: 455px;
  }
`;

const AbsoulteImageArea = styled(Flex)`
  height: 750px;
  position: relative;
  width: 100%;
  margin-bottom: 150px;

  @media (max-width: 720px) {
    flex-direction: column;
    height: 1050px;
    margin-bottom: 100px;
  }
`;

const LiveAreaDesktop = styled(Box)`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IphoneView = styled(Flex)`
  img {
    width: 325px !important;
    height: 657px !important;
  }
`;

const LiveAreaMobile = styled(Flex)`
  position: relative;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 720px) {
    align-items: center;
    justify-content: center;
    img {
      width: 280px !important;
      height: 566px !important;
    }
  }
`;

const GradientView = styled(Box)`
  position: absolute;
  width: 2080px !important;
  height: 1765px;
  top: -75%;
  left: -170%;
  filter: blur(600px);
  z-index: -1;

  @media (max-width: 720px) {
    width: 768px !important;
    height: 1297px !important;

    img {
      width: 768px !important;
      height: 1297px !important;
    }
  }
`;
