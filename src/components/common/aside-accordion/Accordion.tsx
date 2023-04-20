import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Star from "../../../assets/brandImages/Star";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import PersonRemoveAlt1OutlinedIcon from "@mui/icons-material/PersonRemoveAlt1Outlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import classes from "./accordion.module.css";

const SimpleAccordion = () => {
  return (
    <div className={classes.root}>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ fontWeight: "700" }}>Favorites</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info}>
          <CalendarMonthOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></CalendarMonthOutlinedIcon>
          <Typography>Time and Absence</Typography>
          <Star></Star>
        </AccordionDetails>
        <AccordionDetails className={classes.info} sx={{ padding: "0px" }}>
          <AssignmentTurnedInOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></AssignmentTurnedInOutlinedIcon>
          <Typography>Compensation</Typography>
          <Star></Star>
        </AccordionDetails>
        <AccordionDetails className={classes.info} sx={{ padding: "0px" }}>
          <PaymentsOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></PaymentsOutlinedIcon>
          <Typography>Report a Payment Issue</Typography>
          <Star></Star>
        </AccordionDetails>
        <AccordionDetails className={classes.info} sx={{ padding: "0px" }}>
          <Inventory2OutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></Inventory2OutlinedIcon>
          <Typography>Job oppenings</Typography>
          <Star></Star>
        </AccordionDetails>
        <AccordionDetails className={classes.info} sx={{ padding: "0px" }}>
          <ExtensionOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></ExtensionOutlinedIcon>
          <Typography>Connect</Typography>
          <Star></Star>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography sx={{ fontWeight: "700" }}>Quick Links</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info2}>
          <BusinessCenterOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></BusinessCenterOutlinedIcon>
          <Typography>Labour day</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <ZoomInMapOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></ZoomInMapOutlinedIcon>
          <Typography>Concur</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <PanToolOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></PanToolOutlinedIcon>
          <Typography>Applause</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <Inventory2OutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></Inventory2OutlinedIcon>
          <Typography>Job oppenings</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <ExtensionOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></ExtensionOutlinedIcon>
          <Typography>Connect</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ fontWeight: "700" }}>Quick Actions</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <PaymentsOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></PaymentsOutlinedIcon>
          <Typography>Report a Payment Issue</Typography>
        </AccordionDetails>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info2}>
          <BeachAccessOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></BeachAccessOutlinedIcon>
          <Typography>Request Vacation</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <SickOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></SickOutlinedIcon>
          <Typography>Manage Sick leaves</Typography>
        </AccordionDetails>

        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <ShopOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></ShopOutlinedIcon>
          <Typography>WDC Furlugh</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ fontWeight: "700" }}>
            Other Important Actions
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <CreditCardOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></CreditCardOutlinedIcon>
          <Typography>Payroll</Typography>
        </AccordionDetails>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info2}>
          <CakeOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></CakeOutlinedIcon>
          <Typography>Benefits</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <AssignmentTurnedInOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></AssignmentTurnedInOutlinedIcon>
          <Typography>Compensation</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <PersonAddAlt1OutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></PersonAddAlt1OutlinedIcon>
          <Typography>Onboarding</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <PersonRemoveAlt1OutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></PersonRemoveAlt1OutlinedIcon>
          <Typography>Offboarding</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <CalendarMonthOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></CalendarMonthOutlinedIcon>
          <Typography>Time and Absence</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <CorporateFareOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></CorporateFareOutlinedIcon>
          <Typography>Infrastucture</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography sx={{ fontWeight: "700" }}>Learn and Growth</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <MapOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></MapOutlinedIcon>
          <Typography>Open Programs</Typography>
        </AccordionDetails>
        <AccordionDetails sx={{ padding: "0px" }} className={classes.info2}>
          <AccountBalanceOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></AccountBalanceOutlinedIcon>
          <Typography>Facilities</Typography>
        </AccordionDetails>
        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <ConfirmationNumberOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></ConfirmationNumberOutlinedIcon>
          <Typography>Our Partners</Typography>
        </AccordionDetails>

        <AccordionDetails className={classes.info2} sx={{ padding: "0px" }}>
          <SchoolOutlinedIcon
            sx={{ width: "16px", height: "16px" }}
            className={classes.icon}></SchoolOutlinedIcon>
          <Typography>Scolarships</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
