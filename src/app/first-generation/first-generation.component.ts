import { Component, OnInit } from '@angular/core';
import { ImageMetadata } from '../core/models/image-metadata';
import { Lightbox } from 'ngx-lightbox';




@Component({
  selector: 'app-first-generation',
  templateUrl: './first-generation.component.html',
  styleUrls: ['./first-generation.component.css']
})
export class FirstGenerationComponent implements OnInit {



  imageObject: ImageMetadata[] = [
{
    image: 'https://i.imgur.com/Kq8zs28.jpg',
    thumbImage: 'https://i.imgur.com/Kq8zs28.jpg',
    alt: 'מכתב מנשיא המדינה',
    title: 'מכתב מנשיא המדינה'
},
{
    image: 'https://i.imgur.com/kiQJSFR.jpg', 
    thumbImage: 'https://i.imgur.com/kiQJSFR.jpg', 
    title: 'אודות חייו של אברהם מדהלה', 
    alt: 'אודות חייו של אברהם מדהלה' 
},
{
  image: 'https://i.imgur.com/dJ3q8Rj.png', 
  thumbImage: 'https://i.imgur.com/dJ3q8Rj.png', 
  title: 'פואמה של אברהם מדהלה בנושא חיילות לוחמות ', 
  alt: 'פואמה של אברהם מדהלה בנושא חיילות לוחמות' 
},
{
  image: 'https://i.imgur.com/2UmgKzC.png', 
  thumbImage: 'https://i.imgur.com/2UmgKzC.png', 
  title: 'פואמה של אברהם מדהלה בנושא הוקרת הקונגרס היהודי העולמי', 
  alt: 'פואמה של אברהם מדהלה בנושא הוקרת הקונגרס היהודי העולמי' 
},
{
  image: 'https://i.imgur.com/YRkhjte.jpg', 
  thumbImage: 'https://i.imgur.com/YRkhjte.jpg', 
  title: 'דו שיח בין הדור השלישי לדור הראשון', 
  alt: 'דו שיח בין הדור השלישי לדור הראשון' 
},
{
  image: 'https://i.imgur.com/ag8Vw3e.jpg', 
  thumbImage: 'https://i.imgur.com/ag8Vw3e.jpg', 
  title: 'כנס חינוכי בהנחיית איריס גמליאל שנושאו דו שיח בין הדור הראשון השני והשלישי', 
  alt: 'כנס חינוכי בהנחיית איריס גמליאל שנושאו דו שיח בין הדור הראשון השני והשלישי' 
},
{
  image: 'https://i.imgur.com/HVlqO28.jpg', 
  thumbImage: 'https://i.imgur.com/HVlqO28.jpg', 
  title: 'אברהם מדהלה בפסטיבל מספרי סיפור', 
  alt: 'אברהם מדהלה בפסטיבל מספרי סיפור' 
},
{
  image: 'https://i.imgur.com/98p5IZR.png', 
  thumbImage: 'https://i.imgur.com/98p5IZR.png', 
  title: 'מכתב מאביגדור קהלני לאברהם מדהלה', 
  alt: 'מכתב מאביגדור קהלני לאברהם מדהלה' 
},
{
  image: 'https://i.imgur.com/znjE888.png', 
  thumbImage: 'https://i.imgur.com/znjE888.png', 
  title: 'אברהם מדהלה בלשכת הנשיא', 
  alt: 'אברהם מדהלה בלשכת הנשיא' 
},
{
  image: 'https://i.imgur.com/z3Gslv8.png', 
  thumbImage: 'https://i.imgur.com/z3Gslv8.png', 
  title: 'מפעל מרצפת רחובות בבעלותו של אברהם מדהלה', 
  alt: 'מפעל מרצפת רחובות בבעלותו של אברהם מדהלה' 
},
{
  image: 'https://i.imgur.com/bPhmHAJ.png', 
  thumbImage: 'https://i.imgur.com/bPhmHAJ.png', 
  title: 'מכתב מעמוס ערן', 
  alt: 'מכתב מעמוס ערן' 
},
{
  image: 'https://i.imgur.com/CngRFbn.jpg', 
  thumbImage: 'https://i.imgur.com/CngRFbn.jpg', 
  title: 'ג'+ "'" +'מילה מדהלה אשר הובילה את משפחתה במסע העלייה העלייה שארך 6 שנים', 
  alt: 'ג'+ "'" +'מילה מדהלה אשר הובילה את משפחתה במסע העלייה העלייה שארך 6 שנים' 
},
{
  image: 'https://i.imgur.com/kEv6fv1.jpg', 
  thumbImage: 'https://i.imgur.com/kEv6fv1.jpg', 
  title: 'תרומתם של בני הדור הראשון להתיישבות במדינת ישראל', 
  alt: 'תרומתם של בני הדור הראשון להתיישבות במדינת ישראל' 
},
{
  image: 'https://i.imgur.com/rCDaUf9.png',
  thumbImage: 'https://i.imgur.com/rCDaUf9.png', 
  title: 'כתבת עיתון על אברהם מדהלה', 
  alt: 'כתבת עיתון על אברהם מדהלה' 
}
];

private _album = [];

constructor(private _lightbox: Lightbox) {
  for (let i = 0; i < 14; i++) {
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
