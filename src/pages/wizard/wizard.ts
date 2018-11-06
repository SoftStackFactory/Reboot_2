import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Slides } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-wizard',
  templateUrl: 'wizard.html',
})
export class WizardPage {
  @ViewChild(Slides) slides: Slides;  

  firstForm: FormGroup;
  userData: any = {
    branch: String,
    vetOrActive: String,
    sepDate: Date,
    disability: String,
    disabilityPercent: Number,
    employed: String,
    lastEmployed: Date,
    marital: String,
    rank: String,
    mos: String
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder) {
    this.firstForm = formBuilder.group({
      'branch': ['', Validators.compose([Validators.required])],
      'vet': ['', Validators.compose([Validators.required])],
      'date': ['', Validators.compose([Validators.required])],
      'disabled': ['', Validators.compose([Validators.required])],
      'disabledPercent': ['']
    });
    this.firstForm.statusChanges
    .subscribe(val => {
      this.changeSwipe(this.firstForm.valid)
    })
  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad WizardPage');
    }

    onSubmit() {

    }

    disabled(status) {
      this.userData.disability = status;
      console.log(this.userData.disability)
    }

  
    changeSwipe(valid: boolean) {
      if(valid == true) {
        this.slides.lockSwipeToNext(false)
      } else {
        this.slides.lockSwipeToNext(true)
      } 
  }
}