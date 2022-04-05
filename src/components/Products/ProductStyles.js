/** @format */

import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    margin: 20,
    width: "23vw",
    borderColor: "darkblue",
    borderRadius: "15px",
    marginTop: 20,
  },
  typography:{
    padding: 1.5,
  },
  img:{
    height: 140,
    width: 140,
    padding: 10,
  },
  grid1: {
    paddingLeft: 10,
    paddingBottom: 10,
    textTransform: "capitalize",
    // maxWidth: 120,
    // maxHeight: 120,
  },
  input: {
    marginLeft: 20,
    color: "#3f51b5",
  },
  box: {
    marginTop: 10,
    marginRight: 10,
    float: "right",
    width: 200,
  },
  label: {
    color: "#3f51b5",
  },
  icon: {
    alignItems: "start",
  }
}));