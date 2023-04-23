import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProfileService } from "src/app/service/profile.service";
import { saveProfileAction, saveProfileActionSuccess, saveProfileErrorAction } from "../actions/save-profile.action";

@Injectable()
export class SaveProfileEffects {
    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) { }

    saveProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(saveProfileAction),
            switchMap(({ payload }) => {
                return this.profileService.saveProfile(payload)
                    .pipe(
                        map((response) => {
                            return saveProfileActionSuccess({
                                value: response
                            });
                        }),
                        catchError((error) => of(saveProfileErrorAction({ error })))
                    )
            })
        )
    )
}