import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*EZwmSh-QJ7jJd0qbm4GlwA.png",
      title: "Set Up a Virtual Machine.",
      description:
        "This article is written as the simplest possible explanations of the Virtual Machines; keeping in mind the readers who are either new to the Data Science and Software Development.",
      locationText: "Rome, Italy",
      pricingText: "USD 39/Day",
      rating: 4.8,
      url: "https://medium.com/@rahulrathoreblr/virtual-machines-fundamentals-for-beginners-3200755b38c1",
    },
    {
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*eESiiWlF1OSpA4I1WWYfUw.png",
      title: "Install VirtualBox.",
      description:
        "Virtualization software allows you to virtualize a computer system on a host OS/machine. The host OS is the main operating system installed on your computer",
      locationText: "Ibiza, Spain",
      pricingText: "USD 50/Day",
      rating: 4.9,
      url: "https://medium.com/@rahulrathoreblr/virtual-machines-fundamentals-for-beginners-3200755b38c1",
    },
    {
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*whzUZGM68tKcFF8m-LzTnQ.jpeg",
      title: "What Is A Virtual Machine ?",
      description:
        "A virtual machine is a virtual computer system that runs on top of a host OS, while using the host computer’s resources such as CPU, RAM, and storage. A virtual machine will provide the same experience as a physical computer.",
      locationText: "Palo Alto, CA",
      pricingText: "USD 19/Day",
      rating: 5.0,
      url: "https://medium.com/@rahulrathoreblr/virtual-machines-fundamentals-for-beginners-3200755b38c1",
    },
    {
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:540/format:webp/1*EMn4B4dOsk3BfS0QTrMcHw.jpeg",
      title: "Virtual Machines : Fundamentals for Beginners",
      description:
        "Virtualization software allows you to virtualize a computer system on a host OS/machine. The host OS is the main operating system installed on your computer",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
      url: "https://medium.com/@rahulrathoreblr/virtual-machines-fundamentals-for-beginners-3200755b38c1",
    },
  ];

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Popular VM articles</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  {/*   <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText> */}
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton onClick={() => navigateTo(card.url)}>
                Book Now
              </PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
