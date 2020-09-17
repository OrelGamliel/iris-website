import { Component, OnInit, HostListener,ElementRef} from '@angular/core';
import { trigger, state, style,transition,animate } from '@angular/animations'; 
import { Lightbox } from 'ngx-lightbox';
import { ImageMetadata } from '../core/models/image-metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})
export class HomeComponent implements OnInit {

  imageObject: ImageMetadata[] = [
    {
        image: 'https://i.imgur.com/qPypBmW.jpg',
        thumbImage: 'https://i.imgur.com/qPypBmW.jpg',
        alt: ' הפקתי יום עיון בפני תלמידי תיכון בנושא דוח שיח בין הדור הראשון לדור השני',
        title: 'הפקתי יום עיון בפני תלמידי תיכון בנושא דוח שיח בין הדור הראשון לדור השני'
    },
    {
        image: 'https://i.imgur.com/Zax1Syh.jpg', 
        thumbImage: 'https://i.imgur.com/Zax1Syh.jpg', 
        title: 'סייעתי בהפקת ימי עיון בפני תלמידי בתי ספר יסודיים וחטיבות ביניים בנושא מורשת יהודי תימן', 
        alt: 'סייעתי בהפקת ימי עיון בפני תלמידי בתי ספר יסודיים וחטיבות ביניים בנושא מורשת יהודי תימן' 
    },
    {
      image: 'https://i.imgur.com/OSvLGbz.png', 
      thumbImage: 'https://i.imgur.com/OSvLGbz.png', 
      title: 'אני מנחה את כנס משפחת נגר שייזמתי והפקתי', 
      alt: 'אני מנחה את כנס משפחת נגר שייזמתי והפקתי' 
    },
    {
      image: 'https://i.imgur.com/GtGQm0D.png', 
      thumbImage: 'https://i.imgur.com/GtGQm0D.png', 
      title: 'איזה כיף לאחד משפחה ביחד', 
      alt: 'איזה כיף לאחד משפחה ביחד' 
    },
    {
      image: 'https://i.imgur.com/lNTfRg6.png', 
      thumbImage: 'https://i.imgur.com/lNTfRg6.png', 
      title: 'רבקה בת דודתי ואני מנחות את כנס משפחת מדהלה שבו היינו שותפות בייזום ובהפקה ', 
      alt: 'רבקה בת דודתי ואני מנחות את כנס משפחת מדהלה שבו היינו שותפות בייזום ובהפקה' 
    },
    {
      image: 'https://i.imgur.com/OF5f8Sg.png', 
      thumbImage: 'https://i.imgur.com/OF5f8Sg.png', 
      title: 'אני מנחה את כנס משפחת מדהלה', 
      alt: 'אני מנחה את כנס משפחת מדהלה' 
    },
    {
      image: 'https://i.imgur.com/tEs2VC8.png', 
      thumbImage: 'https://i.imgur.com/tEs2VC8.png', 
      title: 'כריכת ספר האוטוביוגרפיה שלי ', 
      alt: 'כריכת ספר האוטוביוגרפיה שלי' 
    },


    
    ];
    
    private _album = [];
    
    constructor(private _lightbox: Lightbox) {
      for (let i = 0; i < 7; i++) {
        const src = this.imageObject[i].image
        const caption = this.imageObject[i].title
        const thumb = this.imageObject[i].thumbImage
        const album = {
           src: src,
           caption: caption,
           thumb: thumb
        };
        this._album.push(album);
      }
    }  
    open(index: number): void {
      // open lightbox
      this._lightbox.open(this._album, index);
    }
    
    close(): void {
      // close lightbox programmatically
      this._lightbox.close();
    }
    
  ngOnInit(): void {
  }

}
