import { Component, VERSION } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { LightgalleryModule } from 'lightgallery/angular';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-light-gallery',
  standalone: true,
  imports: [BreadcrumbComponent, LightgalleryModule],
  templateUrl: './light-gallery.component.html',
  styleUrl: './light-gallery.component.css'
})
export class LightGalleryComponent {
  breadcrumbList = {
    subTitle: 'lightGallery',
    menu_path: 'Plugins',
    currentURL: 'Light Gallery',
  }
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
