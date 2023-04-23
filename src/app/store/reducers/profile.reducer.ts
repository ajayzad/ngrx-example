import { createReducer, on, Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { saveProfileAction, saveProfileActionSuccess, saveProfileErrorAction } from "../actions/save-profile.action";

export const SAVE_PROFILE_STATE_KEY = 'SAVE_PROFILE_STATE_KEY';

export interface SaveProfileState {
    value: Object;
    isLoading: boolean;
}

export const initialState: SaveProfileState = {
    value: '',
    isLoading: false,
};

const saveProfileReducer = createReducer(
    initialState,
    on(saveProfileAction, (state) => {
        return { ...state, isLoading: true};
    }),
    on(saveProfileActionSuccess, (state, {value}) => {
        return { ...state, value, isLoading: false };
    }),
    on(saveProfileErrorAction, (state, { error }) => {
        return { ...state, isLoading: false}
    })
);

export function saveProfileReducerFunction(
    state: SaveProfileState,
    action: Action
){
    return saveProfileReducer(state, action);
    }