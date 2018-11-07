import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  items: any = [];
  itemExpandHeight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},

  ];
  }
  
  expandItem(item){
 
    this.items.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
