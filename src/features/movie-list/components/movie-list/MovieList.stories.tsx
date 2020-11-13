import React from 'react';
import { MovieList } from "./MovieList";

export default {
    title: 'Components',
    component: MovieList
} as Meta;

const movies = ["Black Panther", "Avengers: Endgame", "Us"];
const someText = "Some text";
export const movieList = () =>
    <MovieList data={movies} myProp={someText}></MovieList>