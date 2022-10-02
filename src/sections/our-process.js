/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Smart from "assets/feature/smart.svg";
import Winner from "assets/feature/winner.svg";
import Cloud from "assets/feature/cloud.svg";
import Setting from "assets/feature/setting.svg";
import Design from "assets/feature/design.svg";
import Chat from "assets/feature/chat.svg";

const data = [
  {
    id: 1,
    imgSrc: Chat,
    altText: "Meet & Greet!",
    title: "Meet & Greet!",
    text: "we like to meet with the client (you) and discuss the details of your event from day one until the day of the event itself.",
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: "Requirements",
    title: "Requirements",
    text: "We will ask you a few questions to determine some things about your event such as: location, scale, and general overview of the event itself and what you would like covered.",
  },
  {
    id: 3,
    imgSrc: Chat,
    altText: "Package Review",
    title: "Package Review",
    text: "Once we have determined that we can fulfill the needs of your event, we will go over our packages to determine what works best for you and your event.",
  },
  {
    id: 4,
    imgSrc: Design,
    altText: "Scouting the location",
    title: "Scouting the location",
    text: "Even if we are familiar with a space, we would like to schedule a meeting with you at the location where the event will take place.",
  },
  {
    id: 5,
    imgSrc: Smart,
    altText: "Details, details, details.",
    title: "Details, details, details.",
    text: "Here, by going over the key points of the event, we will work with you to determine the main focal points of your event and how the camera(s) will be best positioned to capture them.",
  },
  {
    id: 6,
    imgSrc: Winner,
    altText: "Your big day!",
    title: "Your big day!",
    text: "Enjoy your day, and we'll ensure your loved ones can too!",
  },
];

export default function OurProcess() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Our Process" title="See how we operate!" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
