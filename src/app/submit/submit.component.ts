import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { saveProfileAction } from '../store/actions/save-profile.action';
import { selectIsLoadingSaveProfile } from '../store/selectors/profile.selector';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {


  profileForm: FormGroup;

  constructor(fb: FormBuilder,private store: Store<AppState>) {
    this.profileForm = fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      dob: [''],
      address: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.store.dispatch(saveProfileAction({payload: this.profileForm.value}));
    this.store.select(selectIsLoadingSaveProfile)
    .subscribe((isLoading) => {
      if(!isLoading) {
        console.log('API RESPONSE LOADED')
      }
    })
  }

}
