import { put } from 'redux-saga/effects';
import axios from 'axios';
import {prepareLocations} from "../../../helpers/locationsHelpers";
import {SET_LOCATIONS} from "../../../constants/actionTypes";

export function* fetchLocations() {
    try {
          const response = yield axios.get('https://dpl-qa-ybus-pubapi.sa.cz/restapi/consts/locations');
          const locations = response.data;
          const preparedLocations = prepareLocations(locations);
          yield put({type: SET_LOCATIONS, locations: preparedLocations });
        console.log('.........preparedLocations', preparedLocations);
    } catch (e) {
        console.log(e);
    }
}

