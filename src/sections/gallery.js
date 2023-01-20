/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from "theme-ui";
import { RiArrowRightSLine } from "react-icons/ri";
import Masonry from "react-masonry-component";
import SectionHeading from "components/section-header";
import GalleryCard from "components/cards/gallery-card";
import gallery1 from "assets/videos/ben-1.mp4";
import gallery2 from "assets/videos/carol-1.mp4";
import gallery3 from "assets/videos/heba-1.mp4";
import gallery4 from "assets/videos/heba-2.mp4";

const data = [
  {
    id: 1,
    image: gallery1,
    title: "Ben",
  },
  {
    id: 2,
    image: gallery2,
    title: "Carol",
  },
  {
    id: 3,
    image: gallery3,
    title: "Heba",
  },
  {
    id: 4,
    image: gallery4,
    title: "Heba",
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Gallery"
          title="See some special moments!"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: "-15px",
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: "100%",
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
    },
    ":hover": {
      svg: {
        ml: "5px",
      },
    },
  },
};
