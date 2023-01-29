import { useState } from "react";
import styled from "styled-components";

export interface CarouselProps {
  children?: JSX.Element[];
  width?: number;
  height?: number;
}

export function Carousel(props: CarouselProps) {
  const [selectedPage, setSelectedPage] = useState<number>(0);

  return (
    <StyledCarousel className="carousel" {...props}>
      <WrapperPage>
        {props.children &&
          props.children.length > 1 &&
          props.children.map((page, key) => (
            <>
              <PageContainer
                className={`page ${selectedPage === key ? "selected" : ""}`}
                key={key}
              >
                <Page className="carousel-page" key={key}>
                  {page}
                </Page>
              </PageContainer>
            </>
          ))}
      </WrapperPage>
      <NavCarousel>
        {props.children &&
          props.children.map((_, key) => (
            <ButtonCarousel
              className={`${selectedPage === key ? "selected" : ""}`}
              onClick={() => setSelectedPage(key)}
              key={key}
            />
          ))}
      </NavCarousel>
    </StyledCarousel>
  );
}

const StyledCarousel = styled.div<CarouselProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: visible;
  height: 100%;
  & .carousel-page {
    width: ${(props) => (props.width ? `${props.width}px` : "1200px")};
    height: ${(props) => (props.height ? `${props.height}px` : "450px")};

    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WrapperPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const Page = styled.div`
  overflow: visible;
`;

const PageContainer = styled.div`
  transition: all 0.4s ease-in-out;
  width: 0px;
  z-index: 100;
  display: flex;
  align-self: center;
  overflow: hidden;
  filter: blur(5px);
  &.selected {
    width: 100%;
    z-index: 150;
    filter: blur(0px);
  }
`;

const NavCarousel = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const ButtonCarousel = styled.button`
  width: 10px;
  height: 10px;
  border: none;
  background-color: lightgrey;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.selected {
    background-color: grey;
  }
  &:hover {
    background-color: grey;
  }
`;
