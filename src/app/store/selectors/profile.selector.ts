import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SaveProfileState, SAVE_PROFILE_STATE_KEY } from "../reducers/profile.reducer";

export const selectFeature = createFeatureSelector<SaveProfileState> (
    SAVE_PROFILE_STATE_KEY  
);

export const selectIsLoadingSaveProfile = createSelector(
    selectFeature,
    (state: SaveProfileState) => state && state.isLoading
);

export const selectSaveProfile = createSelector(
    selectFeature,
    (state: SaveProfileState) => state && state.value  
);