import { createSelector } from "reselect";
import { State } from "../store";

export const showStateSelector = (state:State) => state.shows

export const showQuerySelector = createSelector(showStateSelector,(showState)=>showState.query);

export const showMapSelector = createSelector(showStateSelector,(showState)=>showState.shows);

export const showSelector = createSelector(showMapSelector,(showState)=>Object.keys(showState).map((showId) => showState[+showId]))