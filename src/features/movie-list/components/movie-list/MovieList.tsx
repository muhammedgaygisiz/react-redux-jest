import React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";
import {useStyles} from "./styles";


interface MovieListProps {
    data: [];
    myProp: string;
}

export function MovieList({
      data = [],
      myProp = "No text set"
    }: Partial<MovieListProps>) {
    const classes = useStyles();
    const movieList = [];

    data.forEach((movie, index) => {
        movieList.push(
            <ListItem key={index}>
                {/*<div><span className={classes.listItem}>{movie}</span></div>*/}
                <ListItemText primary={movie} className={classes.root}/>
            </ListItem>
        );
    });

    // <> alias für <Fragment>
    return (
        <>
            <h1>Movie List</h1>
            {myProp}
            <List>
                {movieList}
            </List>
        </>
    );
}