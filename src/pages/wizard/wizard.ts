import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Slides } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-wizard',
  templateUrl: 'wizard.html',
})
export class WizardPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
  }
  firstForm: FormGroup;
  userData: any = {
    branch: String,
    vetOrActive: String,
    sepDate: Date,
    disability: Boolean,
    disabilityPercent: Number,
    employed: Boolean,
    lastEmployed: Date,
    marital: String,
    rank: String,
    mos: String
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WizardPage');
  }

  onSubmit() {

  }
//   function() {
//   this.firstForm = this.formBuilder.group({
//     firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
//     lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
//     age: ['', AgeValidator.isValid]
// });
//   }

  

}
