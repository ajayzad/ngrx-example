import { SaveProfileState, SAVE_PROFILE_STATE_KEY } from "./reducers/profile.reducer";

export interface AppState {
    [SAVE_PROFILE_STATE_KEY]?: SaveProfileState;
}