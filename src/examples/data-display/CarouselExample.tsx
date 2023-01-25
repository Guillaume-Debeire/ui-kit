import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Carousel, Card } from "../../lib";

export function CarouselExample() {
  return (
    <div className="vue">
      <ExampleBloc title="Carousel">
        <>
          <CarouselWrapper>
            <Carousel width={200} height={150}>
              <Card>
                <>Example 1</>
              </Card>
              <Card>
                <>Example 2</>
              </Card>
            </Carousel>
          </CarouselWrapper>
        </>
        <>Bonjour</>
      </ExampleBloc>
    </div>
  );
}

const CarouselWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding: 2rem;
  align-items: center;
`;
