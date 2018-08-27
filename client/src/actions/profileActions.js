import axios from 'axios';

import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, GET_ERRORS, SET_CURRENT_USER, CLEAR_CURRENT_PROFILE } from './types';

// Get Current Profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  )
  .catch(err =>
    dispatch({
      type: GET_PROFILE,
      payload: {} // if no profile found, return empty object as profile.
    })
  );
}

// Get Profile by Handle
export const getProfileByHandle = (handle) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res =>
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  )
  .catch(err =>
    dispatch({
      type: GET_PROFILE,
      payload: null
    })
  );
}


// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
  .post('api/profile', profileData)
  .then(res => history.push('/dashboard'))
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
}

// Add Experience
export const addExperience = (expData, history) => dispatch =>  {
  axios
    .post('/api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch( err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};

// Add Education
export const addEducation = (eduData, history) => dispatch =>  {
  axios
    .post('/api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch( err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};

// Delete Experience
export const deleteExperience = (id) => dispatch =>  {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};

// Delete Education
export const deleteEducation = (id) => dispatch =>  {
  axios
    .delete(`/api/profile/education/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};


// Get All Profiles
export const getProfiles = () => dispatch =>  {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: null
    })
  );
};

// Delete Account & Profile
export const deleteAccount = () => dispatch => {
  if(window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/profile')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      ).catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
}

//  Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

//  Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}
