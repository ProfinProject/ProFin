import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TagInputModule } from 'ngx-chips';
import { NgClass } from '@angular/common';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { PublishedCmBoxComponent } from '../../../elements/short-cods/cms/published-cm-box/published-cm-box.component';

@Component({
  selector: 'app-blog-add',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    TagInputModule,
    CKEditorModule,
    BreadcrumbComponent,
    Select2Component,
    PublishedCmBoxComponent
  ],
  templateUrl: './blog-add.component.html',
  styleUrl: './blog-add.component.css'
})
export class BlogAddComponent {

  public Editor = ClassicEditor;

  breadcrumbList = {
    menu_path: 'CMS',
    currentURL: 'Add Blog',
  }
  imageURL: any = 'assets/images/no-img-avatar.png';

  activeToggleArray = [1,2,3,4,5,6,7,8,9,10,11]
  dropicon(id:any){
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  listContacts: any = [];
  boxArrya: any = ['Categories', 'Featured Image', 'Excerpt', 'Custom Fields',
    'Discussion', 'Slug', 'Author', 'Tag', 'Seo', 'Published'];

  checkValue(event: any) {
    let index = this.listContacts.indexOf(event);
    if (index == -1) {
      this.listContacts.push(event);
    } else {
      this.listContacts.splice(index, 1);
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

  select2Data = [
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
}
