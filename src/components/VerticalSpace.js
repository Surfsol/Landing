import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    vertical: {
        height:'10vh',
    }
  });
  

const VerticalSpace = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.vertical}></div>
    )
}
export default VerticalSpace