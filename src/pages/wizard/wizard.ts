import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Slides } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data'



@IonicPage()
@Component({
  selector: 'page-wizard',
  templateUrl: 'wizard.html',
})
export class WizardPage {
  @ViewChild(Slides) slides: Slides;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  disabledStatus: String;
  employedStatus: String;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public userData: UserDataProvider) {
    this.firstForm = formBuilder.group({
      'branch': ['', Validators.compose([Validators.required])],
      'vetOrActive': ['', Validators.compose([Validators.required])],
      'sepDate': ['', Validators.compose([Validators.required])],
      'disability': ['', Validators.compose([Validators.required])],
      'disabilityPercent': []
    });
    this.firstForm.statusChanges
      .subscribe( _ => {
        this.changeLock(this.firstForm.valid)
      })

      this.secondForm = formBuilder.group({
        'employed': ['', Validators.compose([Validators.required])],
        'lastEmployed': [''],
        'marital': ['', Validators.compose([Validators.required])],
      });
      this.secondForm.statusChanges
      .subscribe( _ => {
        this.changeLock(this.secondForm.valid)
      });
      this.thirdForm = formBuilder.group({
        'question': ['', Validators.compose([Validators.required])],
      });
      this.thirdForm.statusChanges
      .subscribe( _ => {
        this.changeLock(this.thirdForm.valid)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WizardPage');
  }

  onSubmit() {
    this.userData.user = {
      branch: this.firstForm.value.branch,
      vetOrActive: this.firstForm.value.vetOrActive,
      sepDate: this.firstForm.value.sepDate,
      disability: this.firstForm.value.disability,
      disabilityPercent: this.firstForm.value.disabilityPercent,
      employed: this.secondForm.value.employed,
      lastEmployed: this.secondForm.value.lastEmployed,
      marital: this.secondForm.value.marital,
      question: this.thirdForm.value.question,
    }
    console.log(this.userData.user)
  }

  disabled(status) {
    this.disabledStatus = status;
  }

  changeEmployed(status) {
    this.employedStatus = status;
  }


  changeLock(valid) {
    if (valid === true) {
      this.slides.lockSwipeToNext(false)
    } else {
      this.slides.lockSwipeToNext(true)
    }
  }

  slideChange() {
    if (this.slides.getActiveIndex() === 1 && !this.secondForm.valid) {
      this.slides.lockSwipeToNext(true)
    }
    else if (this.slides.getActiveIndex() === 2 && !this.thirdForm.valid) {
      this.slides.lockSwipeToNext(true);
    }
    else {
      this.slides.lockSwipeToNext(false);
    }
  }
}