import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

const FeatureList = [
  {
    title: "Genie",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </>
    ),
  },
  {
    title: "ADMET",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when a
      </>
    ),
  },
  {
    title: "Screenie",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an u
      </>
    ),
  },
  {
    title: "Screenie",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <Box
    
      sx={{
        p: 10,
        m: 10,
        
      }}
    >
      <Typography variant="h3" fontWeight={900}>
        Table of Contents
      </Typography>
      <Box
        sx={{
          pl: 5,
          pt: 2,
        }}
      >
        <ul>
          <li>
            <Link to="/docs/category/genie">GENIE</Link>
           
               
                <ul>
                  <li>
                    <Link to="/docs/Genie/Introduction">Introduction</Link>
                  </li>
                  <li>
                    <Link to="/docs/Genie/Usage">Usage</Link>
                  </li>
                  <li>
                    <Link to="/docs/Genie/Outputs">Outputs</Link>
                  </li>
                </ul>
              </li>
              
           

          <li>
            <Link to="/docs/category/admet">ADMET</Link>
            <ul>
              <li>
                <Link to="/docs/ADMET/manage-docs-versions">Introduction</Link>
              </li>
              <li>
                <Link to="/docs/ADMET/Inputs">User Inputs</Link>
              </li>
              <li>
                <Link to="/docs/ADMET/job_submission">Job Submission</Link>
              </li>
            </ul>
          </li>
      
          
        </ul>
      </Box>
    </Box>
  );
}
