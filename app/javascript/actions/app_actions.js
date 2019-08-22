import { ADD_STORE, ADD_STORE_SUCCESS, ADD_STORE_FAILURE } from "../constants/action_types";
// import axios from 'axios';
const axios = require('axios');

// export function addStore(payload) {
//   return { type: ADD_STORE, payload };
// }

export function addStoreSuccess (store) {
  return {
    type: ADD_STORE_SUCCESS,
    payload: store
  }
}

export function addStore(params) {
  const request = axios({
    method: 'post',
    data: params,
    url: '/api/v1/stores'
  });
  console.log(params, 'params');
  return {
    type: ADD_STORE,
    payload: request
  };
}