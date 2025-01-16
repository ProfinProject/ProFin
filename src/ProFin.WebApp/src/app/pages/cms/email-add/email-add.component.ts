import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-add',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    CKEditorModule,
    BreadcrumbComponent
  ],
  templateUrl: './email-add.component.html',
  styleUrl: './email-add.component.css'
})
export class EmailAddComponent {

  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Add Email',
  }

  public Editor = ClassicEditor;

  activeToggleArray = [1]
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  userData = [
    {
      title: 'User Configuration',
      desc: [
        '#USERNAME#: Username can display with this placeholder.',
        '#USERNAME#: Username can display with this placeholder.',
        '#LASTNAME#: Lastname can display with this placeholder.',
        '#TELEPHONE#: Contact number can display with this placeholder.',
        '#PASSWORD#: password can display with this placeholder.',
        '#SITENAME#: Site name can display with this placeholder.'
      ]
    },
    {
      title: 'Config Configuration',
      desc: [
        '#SITENAME#: Site name can display with this placeholder.',
        '#ADMINEMAIL#: Admin email can display with this placeholder.',
        '#SUPPORTEMAIL#: Support email can display with this placeholder.',
        '#SITEADDRESS#: Site address can display with this placeholder.'
      ]
    },
    {
      title: 'Generate Configuration',
      desc: [
        '#ACTIVATIONLINK#: Activation link can display with this placeholder.',
        '#SITELOGO#: Site logo can display with this placeholder.',
        '#LOGINLINK#: Login link can display with this placeholder.',
        '#REGESTERLINK#: Registration link can display with this placeholder.',
        '#REGESTERLINK#: Registration link can display with this placeholder.'
      ]
    },
    {
      title: 'Contact Configuration',
      desc: [
        '#NAME#: Contact user name can display with this placeholder.',
        '#EMAIL#: Contact user email can display with this placeholder.',
        '#MESSAGE#: Contact user message can display with this placeholder.'
      ]
    },
    {
      title: 'Subscribe Configuration',
      desc: [
        '#USERNAME#: Subscribe user email can display with this placeholder.'
      ]
    },
    {
      title: 'Order Configuration',
      desc: [
        '#STATUS#: Order Status can display with this placeholder.',
        '#FIRSTNAME#: User first name can display with this placeholder.',
        '#LASTNAME#: User last name can display with this placeholder.',
        '#MESSAGE#: Delivery details or expected deliery date. This message will deliver to customer.'
      ]
    }
  ]
}
