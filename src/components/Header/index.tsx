import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames"
import { List, ListItem, Theme, Box} from "@material-ui/core";
import RightLinks from "../RightLinks/index";
import "./indexPLK.scss"

interface Props {}


const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    flexWrap: "wrap",
    display: "flex",
    flexGrow: 1,

    color: "#fff",
  },
  navList: {
    display: "flex",
    flex: "1",
    padding: "0px",
    alignItems: "center",
  },
  rightHeader: {
    flex: ".2",
  },
  scoreCard:{
    flexGrow: 1,
    marginRight: "10px",
    textTransform: "none",
    whiteSpace: "nowrap",
    fontSize:"39px",
    color: "#FFFFFF",
    fontFamily:"FlameSans-Bold"
  },

  leftheader: {
    flex: ".8",
    textAlign: "end",
    [theme.breakpoints.down("xs")]: {
      // zIndex: 3000,
      flex: ".1",
    },
  },
  fixed: {
    position: "fixed",
    // zIndex: 10,
  },
  absolute: {
    position: "absolute",
    // zIndex: 1100,
  },
  appBar: {
    display: "flex",
    width: "100%",
    height: "75px",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    // padding: "10px 0px",

    backgroundColor:"#FF7D00",
    [theme.breakpoints.down("sm")]: {
      zIndex: 3000,
    },
  },
  appBarBK: {
    display: "flex",
    width: "100%",
    height: "75px",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    // padding: "10px 0px",
    backgroundColor: "#502314",
    [theme.breakpoints.down("sm")]: {
      zIndex: 3000,
    },
  },
  brandLogoOnScroll: {
    // position: "absolute",
    width: "36.31px",
    height:"40px"
  },
  brandLogoOnScrollPLK: {
    // position: "absolute",
    width: "92.31px",
    height:"45px"
  },
  inputRoot: {
    color: "#fff",
    height:"45px",
    padding:"0px",

  },
  popperBackground: {
    background: "white",
  },
  searchContainer:{
    display:"flex"
  },
  searchIcon:{
    color:"#ffcf3f",
  },
  closeIcon:{
    color:"#ffcf3f",
    marginLeft:"5px",
  },
  iconButton:{
padding:"2px"
  }
}));

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  const [brandName,setBrandName]=useState("PLK")

  // const appBarClasses = classNames({
  //   ["appBar]: true,
  //   ["absolute]: true,
  //   ["fixed]: true,
  // });


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        // color="inherit"
        position="sticky"
       
      >
        <Toolbar className={"toolbar"}>
          <List className="navList">
           <ListItem className={"rightHeader"}>
              <Button >
                <img
                  alt="logo"
                   src={brandName=="PLK"?"/assets/PLK Logo.svg":"/assets/burger-king.svg"}
                  //  "/assets/burger-king-new-2021-seeklogo.com-3.svg"}
               
                  className={"brandLogoOnScroll"}
                />
              </Button>
              <Button className={"scoreCard"} >
                Success Scorecard
              </Button>
            </ListItem>
           <Box className="leftheader">
            <RightLinks />
          </Box>
          </List>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;