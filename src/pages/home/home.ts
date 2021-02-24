import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskList = [];
  taskName: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }
  addTask() {
    if (this.taskName.length > 0) {
        let task = this.taskName;
        this.taskList.push(task);
        this.taskName = "";
    }
}

deleteTask(index){
  this.taskList.splice(index, 1);
}
updateTask(index) {
  let alert = this.alertCtrl.create({
      title: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {
                    this.taskList[index] = data.editTask; }
                }
               ]
  });
  alert.present();
}

}
