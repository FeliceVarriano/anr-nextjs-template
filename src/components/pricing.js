/** @jsx jsx */
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { jsx, Grid, Box, Container, Flex, Button } from "theme-ui";
import SectionHeading from "components/section-header";
import PriceCard from "components/cards/price-card-b";
import { rgba } from "polished";
import Carousel from "react-multi-carousel";
import { keyframes } from "@emotion/core";
import ButtonGroup from "components/button-group";
import userIcon from "assets/two-users.png";
import userIcon2 from "assets/three-users.png";

const corePackagePricing = [
  {
    id: 1,
    icon: userIcon,
    title: "Basic Package",
    amount: 900,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Stationary Camera: 1",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Stream/Audio Operator + Sound Board: 1`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Raw Video Output (Copy of Recording): 1`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Discount for Multiple Events (multiple days): -$100/day. ONE CAMERA: STATIONARY POINTING IN ONE DIRECTION (MINIMAL MOVEMENT) STREAMING WITH AUDIO. ONE VIDEOGRAPHER.`,
      },
    ],
  },
  {
    id: 2,
    icon: userIcon2,
    title: "The Premium Package",
    amount: 1600,
    isRecommended: true,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Stationary Camera: 1",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Stream/Audio Operator + Sound Board: 1`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Camera Person + Camera: 1`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Raw Video Output (Copy of Recording): 1`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Discount for Multiple Events (multiple days): -$300/day. TWO CAMERAS: ONE STATIONARY POINTING IN ONE DIRECTION (MINIMAL MOVEMENT) AND ONE CAMERA WITH MULTI-DIRECTIONAL MOVEMENT. STREAMING WITH AUDIO. TWO VIDEOGRAPHERS.`,
      },
    ],
  },
  {
    id: 3,
    icon: userIcon2,
    title: "The Ultimate Package",
    amount: 2000,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Stationary Camera: 2",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Stream/Audio Operator + Sound Board: 1`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Camera Person + Camera: 1`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Raw Video Output (Copy of Recording): 1`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Discount for Multiple Events (multiple days): -$400/day. THREE CAMERAS: TWO STATIONARY POINTING IN TWO DIRECTIONS (MINIMAL MOVEMENT), AND ONE CAMERA WITH MULTI-DIRECTIONAL MOVEMENT. STREAMING WITH AUDIO. TWO VIDEOGRAPHERS.`,
      },
    ],
  },
];

const comprehensivePackagePricing = [
  {
    id: 1,
    icon: userIcon2,
    title: "The Basic Package",
    amount: 1300,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: `Stand Microphone: 2`,
      },
      {
        id: 2,
        isAvailable: true,
        title: `Lapel Microphone: 4`,
      },
      {
        id: 3,
        isAvailable: true,
        title: "Stationary Camera: 1",
      },
      {
        id: 4,
        isAvailable: true,
        title: `Stream/Audio Operator + Sound Board: 1`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Raw Video Output (Copy of Recording): 1`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `Discount for Multiple Events (multiple days): -$100/day. ONE CAMERA: STATIONARY POINTING IN ONE DIRECTION (MINIMAL MOVEMENT) STREAMING WITH AUDIO. ONE VIDEOGRAPHER.`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Discount for Multiple Events (multiple days): -$400/day. THREE CAMERAS: TWO STATIONARY POINTING IN TWO DIRECTIONS (MINIMAL MOVEMENT), AND ONE CAMERA WITH MULTI-DIRECTIONAL MOVEMENT. STREAMING WITH AUDIO. TWO VIDEOGRAPHERS.`,
      },
    ],
  },
  {
    id: 2,
    icon: userIcon,
    title: "The Premium Package",
    amount: 2000,
    isRecommended: false,
    features: [
      {
        id: 2,
        isAvailable: true,
        title: `Stand Microphone: 2`,
      },
      {
        id: 1,
        isAvailable: true,
        title: "Lapel Microphone: 4",
      },
      {
        id: 3,
        isAvailable: true,
        title: `Stationary Camera: 1`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Camera Person + Camera: 1`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Stream/Audio Operator + Sound Board: 1`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `Raw Video Output (Copy of Recording): 1`,
      },
      {
        id: 7,
        isAvailable: false,
        title: `Discount for Multiple Events (multiple days): -$300/day. TWO CAMERAS: ONE STATIONARY POINTING IN ONE DIRECTION (MINIMAL MOVEMENT) AND ONE CAMERA WITH MULTI-DIRECTIONAL MOVEMENT. STREAMING WITH AUDIO. TWO VIDEOGRAPHERS.`,
      },
    ],
  },
  {
    id: 3,
    icon: userIcon2,
    title: "The Ultimate Package",
    amount: 2400,
    isRecommended: true,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: `Stand Microphone: 2`,
      },
      {
        id: 2,
        isAvailable: true,
        title: `Lapel Microphone: 4`,
      },
      {
        id: 3,
        isAvailable: true,
        title: "Stationary Camera: 2",
      },
      {
        id: 4,
        isAvailable: true,
        title: `Camera Person + Camera: 1`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Stream/Audio Operator + Sound Board: 1`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `Raw Video Output (Copy of Recording): 1`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Discount for Multiple Events (multiple days): -$400/day. THREE CAMERAS: TWO STATIONARY POINTING IN TWO DIRECTIONS (MINIMAL MOVEMENT), AND ONE CAMERA WITH MULTI-DIRECTIONAL MOVEMENT. STREAMING WITH AUDIO. TWO VIDEOGRAPHERS.`,
      },
    ],
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: "core",
    data: corePackagePricing,
  });

  const handlePlan = (plan) => {
    if (plan === "core") {
      setPlan({
        ...plan,
        active: "core",
        data: corePackagePricing,
      });
    }
    if (plan === "comprehensive") {
      setPlan({
        ...plan,
        active: "comprehensive",
        data: comprehensivePackagePricing,
      });
    }
  };

  return (
    <Box id="pricing" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Pricing plans"
          title="What deals suit you perfectly?"
        />
        <Flex sx={styles.priceSwitcher}>
          <Button
            variant="text"
            className={plan?.active === "core" ? "" : "active"}
            onClick={() => handlePlan("core")}
          >
            Core Plans
          </Button>
          <Button
            variant="text"
            className={plan?.active === "comprehensive" ? "" : "active"}
            onClick={() => handlePlan("comprehensive")}
          >
            Comprehensive Plans
          </Button>
        </Flex>
        {/* <Grid sx={styles.grid}>
          {plan?.data?.map((price, index) => (
            <PriceCard price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid> */}
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {plan?.data?.map((price, index) => (
            <PriceCard
              sx={styles.reviewCard}
              price={price}
              key={`${plan.active}-${index}`}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "yellow",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  section: {
    pt: [60],
    pb: [100, 100, 100, 80],
  },
  heading: {
    color: "#fff",
    mb: 20,
    p: {
      color: "#fff",
    },
  },
  priceSwitcher: {
    borderRadius: "5px",
    border: `1px solid ${rgba("#FFFFFF", 0.2)}`,
    margin: ["0 auto 30px", "0 auto 30px", "0 auto 30px", "0 auto 60px"],
    maxWidth: [255, 255, 255, 300],
    p: 2,
    button: {
      minHeight: ["40px", "40px", "40px", "48px"],
      px: ["18px", "18px", "18px", "25px"],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      color: "white",
      "&.active": {
        backgroundColor: "#fff",
        color: "text",
      },
      ":focus": {
        outline: "0 none",
      },
    },
  },
  grid: {
    gap: ["60px 30px"],
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 340px)",
      "repeat(2, 430px)",
      "repeat(2, 440px)",
      "repeat(2, 480px)",
    ],
    justifyContent: "center",
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
