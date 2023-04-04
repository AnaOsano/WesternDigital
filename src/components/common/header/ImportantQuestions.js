import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles, Box, Button } from "@material-ui/core";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import Questions from "../../../assets/brandImages/Questions";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "702px",
    display: "flex",
    flexDirection: "column",
    margin: "0px",
    boxShadow: "none",
  },
  button: {
    textTransform: "capitalize",
    backgroundColor: "white",
    width: "120px",
    height: "44px",
    marginRight: "10px",
  },
  hrContact: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hrText: {
    fontWeight: "500px",
    fontSize: "26px",
    color: "white",
    marginBottom: "30px",
  },
  hrText2: {
    fontWeight: "500px",
    fontSize: "26px",
    color: "white",
    marginBotttom: "32px",
  },
  hrText1: {
    fontWeight: "400px",
    fontSize: "16px",
    color: "white",
    marginTop: "54px",
  },
  boxWrapper: {
    width: "700px",
    height: "238px",
    marginTop: "40px",
    marginBottom: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: "16px",
    display: "flex",
    paddingBottom: "16px",
    paddingTop: "16px",
  },
  title1: {
    fontWeight: "600",
    fontSize: "24px",
    display: "flex",
    margin: "0px",
    paddingBottom: "29px",
  },
  info: {
    display: "flex",
    marginBottom: "0px",
    backgroundColor: "#F9FAFC",
    gap: "16px",
    fontSize: "14px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px",
    height: "188px",
  },
  icon: {
    paddingRight: "32px",
    color: "#5DA7FB",
  },
  importantQuestions: {
    paddingLeft: "99px",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  hrWrapper: {
    position: "absolute",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    // marginTop: "-250px",
  },
}));

export default function ImportantQuestions() {
  const classes = useStyles();
  return (
    <div className={classes.importantQuestions}>
      <p className={classes.title1}>Frequently asked questions</p>
      <p className={classes.title}>Getting Started In The Platform</p>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            How is performance management linked to development in Western
            Digital?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            I am a temporary appointment; can I create my work-plan in
            e-Performance?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            Is the second reporting officer required to make comments in my
            e-Performance document?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>

      {/* <p className={classes.title}>General questions</p>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            How is performance management linked to development in Western
            Digital?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            I am a temporary appointment; can I create my work-plan in
            e-Performance?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            I have a performance evaluation report for 2022-23. Since the review
            is starting in 2023, can I use this one as part of the four required
            reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            I have unfinished e-PAS documents from previous cycles. How can I
            complete them?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            If I haven’t yet started my work-plan for the 10-11, and or the
            11-12 cycles do I use e-PAS or e-Performance?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            In the previous version of inspira, I was required to create a
            performance document as well as a development document. Is this
            still the case?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            Is the second reporting officer required to make comments in my
            e-Performance document?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion> */}
      <p className={classes.title}>HR services in Western Digital</p>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            How is performance management linked to development in Western
            Digital?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            I am a temporary appointment; can I create my work-plan in
            e-Performance?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RocketLaunchOutlinedIcon
            className={classes.icon}
          ></RocketLaunchOutlinedIcon>
          <Typography sx={{ fontWeight: "500" }}>
            I have a performance evaluation report for 2022-23. Since the review
            is starting in 2023, can I use this one as part of the four required
            reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          One of the new features of performance management is that it will link
          to staff development and learning management to allow for better
          career planning. The improved learning management system in Inspira
          will make it easier to enroll, track and keep records of learning
          programmes, including the mandatory courses in which you have you have
          participated. Moreover, the skills portal provides anytime, anywhere
          access to online learning programmes.
        </AccordionDetails>
      </Accordion>
      <Box className={classes.boxWrapper}>
        <Questions></Questions>
        <div className={classes.hrWrapper}>
          <p className={classes.hrText1}>Frequently Asked Questions</p>
          <p className={classes.hrText2}>Can’t find what you’re looking for?</p>
          <div className={classes.hrContact}>
            <Button className={classes.button}>Ask HR</Button>
            <p className={classes.hrText}>or call +1 213-757-3900</p>
          </div>
        </div>
      </Box>
    </div>
  );
}
