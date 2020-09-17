import { Component, OnInit } from '@angular/core';
import { ImageMetadata } from '../core/models/image-metadata';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {



  currentIndex: any = -1;
  showFlag: any = false;

  imageObject: ImageMetadata[] = [{
    image: '../../assets/imgs/family-tree/Nagar 32x48-1.jpg',
    thumbImage: '../../assets/imgs/family-tree/Nagar 32x48-1.jpg',
    alt: 'משפחת נגר',
    title: 'משפחת נגר'
}
];

  constructor() { }




  showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
}

closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
}
  ngOnInit(): void {
  }

}
