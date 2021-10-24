import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteID, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId,
        rating,
        author,
        text
    }
});

export const fetchCampsites = () => dispatch => {
    
    dispatch(campsitesLoading());
    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed= errMess => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});