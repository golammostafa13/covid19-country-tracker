import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import styles from './Cards.module.css';
import loading from '../../Images/loading.gif';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}, country="bangladesh"}) => {
    if(!confirmed || !recovered || !deaths)return <img src={loading} alt="loading" />;
    return (
        <div className={styles.container}>
            <Typography style={{marginBottom: '2.5rem', color: '#333', fontSize:'1.5rem'}} color="textPrimary" gutterBottom><strong>{country}</strong> Current State</Typography>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={3} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date().toDateString(lastUpdate)}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={3} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date().toDateString(lastUpdate)}</Typography>
                        <Typography variant="body2">Number of recover cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={3} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date().toDateString(lastUpdate)}</Typography>
                        <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;