import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';

const useStyles = makeStyles(()=> ({
    banner: {
        backgroundImage: "url(./banner.jpg)"
    },
    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around"
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center"

    }
}))

const Banner = () => {
    const classes = useStyles()
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                        fontWeight: "bold",
                        marginRight: 15,
                        fontFamily: "Montserrat"
                     }}
                    >
                        Crypto Hunter
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                        fontWeight: "darkgrey",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat"
                     }}
                    >
                        Get all the info regarding your favorite crypto currency
                    </Typography>
                </div>
                     <Carousel/>
            </Container>
        </div>
    )
}

export default Banner;
