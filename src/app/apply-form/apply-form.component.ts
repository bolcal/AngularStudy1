import { Component } from '@angular/core';


@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.style.css']

})

export class AppApplyForm {
  title = 'My Form';


  onAddPost() {
    alert('emre');
  }
}
