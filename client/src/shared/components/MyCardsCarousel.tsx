import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";

const imgs = ["/img.png", "/img.png", "/img.png"];

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 60,
};

const MyCardsCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <Container>
      <InnerContainer
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        <ImagesContainer>
          {imgs.map((imgSrc, idx) => (
            <Image
              key={idx}
              src={imgSrc}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
            />
          ))}
        </ImagesContainer>
      </InnerContainer>

      <DotsContainer>
        {imgs.map((_, idx) => (
          <Dot
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={idx === imgIndex ? "active" : ""}
          />
        ))}
      </DotsContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const InnerContainer = styled(motion.div)`
  display: flex;
  cursor: grab;

  &.active {
    cursor: grabbing;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
`;

const Image = styled(motion.img)`
  aspect-ratio: 16/9;
  flex-shrink: 0;
  border-radius: 15px;
  object-fit: cover;
  height: 178px;
  width: 100%;
`;

const DotsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.button`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  transition: background-color 0.3s ease-in-out;
  background-color: #444444;
  border: none;

  &.active {
    height: 10px;
    width: 10px;
    background-color: #53a9e1;
  }
`;

export default MyCardsCarousel;
