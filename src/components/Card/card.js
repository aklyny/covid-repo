import React from 'react';
import {Card, CardContent,Grid,Typography} from '@material-ui/core';
import style from './card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return 'loading...';
    }
    return(
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.infected)}>
                   <CardContent
                   >Infected</CardContent> 
                   <Typography color="textSecondary" variant="h5" gutterBottom>
                   <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2}
                    separator=","   
                   />
                   </Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   <Typography varient="body2">Number of Active cases</Typography>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.recovered)}>
                   <CardContent
                   color="textSecondary"
                   >Recovered</CardContent> 
                   <Typography color="textSecondary" variant="h5" gutterBottom><CountUp start={0} end={recovered.value} duration={2} separator=","/></Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   <Typography varient="body2">Number of Recoverd cases</Typography>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.deaths)}>
                   <CardContent
                   >Deaths</CardContent> 
                   <Typography color="textSecondary" variant="h5" gutterBottom><CountUp start={0} end={deaths.value} duration={2} separator=","/></Typography>
                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   <Typography varient="body2">Number of Deaths</Typography>
                </Grid>
            </Grid>
        </div>
    )
}


export default Cards;