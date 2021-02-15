import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
    });

    $('input').on('focusout', function() {
      if (!this.value) {
      $(this).parent().find('label').removeClass('active');
  }
});

  }

}
