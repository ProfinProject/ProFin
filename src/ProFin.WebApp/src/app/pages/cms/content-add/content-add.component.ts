import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { PublishedCmBoxComponent } from '../../../elements/short-cods/cms/published-cm-box/published-cm-box.component';

@Component({
  selector: 'app-content-add',
  standalone: true,
  imports: [
    CKEditorModule, 
    NgClass, 
    RouterLink, 
    BreadcrumbComponent, 
    Select2Component, 
    PublishedCmBoxComponent
  ],
  templateUrl: './content-add.component.html',
  styleUrl: './content-add.component.css'
})
export class ContentAddComponent {
  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Add Content',
  }

  public Editor = ClassicEditor;
  imageURL: any = 'assets/images/no-img-avatar.png';

  listContacts: any = [];
  boxArrya: any = [
    'Page Attributes', 'Featured Image', 'Published ', 'Custom Fields',
    'Discussion', 'Slug', 'Author', 'Page Type', 'Seo'
  ];

  activeToggleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  dropicon(id: any) {
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }
  getImage(ev: any) {
    if (ev.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload = (event: any) => {
        this.imageURL = event.target.result;
      }
    }
  }
  checkValue(event: any) {
    let index = this.listContacts.indexOf(event);
    if (index == -1) {
      this.listContacts.push(event);
    } else {
      this.listContacts.splice(index, 1);
    }
  }

  select2User = [
    {
      name: 'admin@gmail.com',
    },
    {
      name: 'India',
    },
    {
      name: 'Information',
    },
    {
      name: 'New Menu',
    },
    {
      name: 'Page Menu',
    },
  ];

  select2Data = [
    {
      name: '(No Parent)',
    },
    {
      name: 'Privacy Policy',
    },
    {
      name: 'Contact Us',
    },
    {
      name: 'Important Information',
    },
    {
      name: 'Free shipping',
    },
    {
      name: 'Daily Gifts',
    },
    {
      name: 'Blog',
    },
    {
      name: 'About Us',
    },
    {
      name: 'Dummy Co',
    },
  ];

  select2Content = [
    {
      name: 'Page',
    },
    {
      name: 'Widget',
    }
  ];
}
