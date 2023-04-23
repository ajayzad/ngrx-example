import { createAction, props } from "@ngrx/store";
import { profileDTO } from "src/app/modals/profile.modal";

export const saveProfileAction = createAction(
    '[Save Profile Action] save profile action',
    props<{payload: profileDTO}>()
);

export const saveProfileActionSuccess = createAction(
    '[Save Profile Success Action] save profile success action',
    props<{value: Object}>()
);

export const saveProfileErrorAction = createAction(
    '[Save Profile Error Action] save profile error action',
    props<{error: unknown}>()
);