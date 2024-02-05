import { Component } from '@angular/core';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.css']
})
export class ProjectImagesComponent {
  currentIndex1 = 0;
  currentIndex2 = 0;
  currentIndex3 = 0;
  images: string[] = [/* Your image URLs */
  "https://i.ibb.co/DDx0Hvm/IMG-20240204-WA0013.jpg",
  "https://i.ibb.co/G5bhCJK/IMG-20240204-WA0001.jpg",
  "https://i.ibb.co/TBkjq45/IMG-20240204-WA0002.jpg",
  "https://i.ibb.co/vmtvnrk/IMG-20240204-WA0003.jpg",
  "https://i.ibb.co/hcjjY6X/IMG-20240204-WA0004.jpg",
  "https://i.ibb.co/QXRJT1N/IMG-20240204-WA0005.jpg",
  "https://i.ibb.co/hcc0hY0/IMG-20240204-WA0006.jpg",
  "https://i.ibb.co/Ch0w60v/IMG-20240204-WA0007.jpg",
  "https://i.ibb.co/kc0fKZJ/IMG-20240204-WA0008.jpg",
  "https://i.ibb.co/64yL1z6/IMG-20240204-WA0009.jpg",
  "https://i.ibb.co/WDbLw1C/IMG-20240204-WA0010.jpg",

  "https://i.ibb.co/c81YvMg/IMG-20240204-WA0012.jpg",
  
  "https://i.ibb.co/xCm84nK/IMG-20240204-WA0014.jpg"];
  imagex: string[] = [/* Your image URLs */
  "https://i.ibb.co/NWyrDvG/Screenshot-210.png",
  "https://i.ibb.co/0XjTSgZ/Screenshot-212.png",
	"https://i.ibb.co/rt9yDTj/Screenshot-211.png",
  "https://i.ibb.co/nmVq3B9/Screenshot-213.png",
  "https://i.ibb.co/RjcqWbf/Screenshot-215.png",
	"https://i.ibb.co/2n6SBwr/Screenshot-214.png",
	
	
	];

  imageb: string[] = [
    
    "https://i.ibb.co/ry2mr5D/Screenshot-216.png",
    "https://i.ibb.co/ct6DBmM/Screenshot-217.png",
    "https://i.ibb.co/YtwY0xV/Screenshot-218.png",
    "https://i.ibb.co/VQgG6pn/Screenshot-219.png",
    "https://i.ibb.co/D70BmyW/Screenshot-220.png",
    "https://i.ibb.co/gyyxYW0/Screenshot-221.png",
    "https://i.ibb.co/PWrbpLx/Screenshot-222.png",
    "https://i.ibb.co/T2yFtsq/Screenshot-223.png",
    "https://i.ibb.co/ctBqK67/Screenshot-224.png",
    "https://i.ibb.co/QD9xhFx/Screenshot-225.png",
  ]

  nextSlide(slideshow: number) {
    if (slideshow === 1) {
      this.currentIndex1 = (this.currentIndex1 + 1) % this.images.length;
    } else if (slideshow === 2) {
      this.currentIndex2 = (this.currentIndex2 + 1) % this.imagex.length;
    } else if (slideshow === 3) {
      this.currentIndex3 = (this.currentIndex3 + 1) % this.imageb.length;
    }
  }

  prevSlide(slideshow: number) {
    if (slideshow === 1) {
      this.currentIndex1 = (this.currentIndex1 - 1 + this.images.length) % this.images.length;
    } else if (slideshow === 2) {
      this.currentIndex2 = (this.currentIndex2 - 1 + this.imagex.length) % this.imagex.length;
    } else if (slideshow === 3) {
      this.currentIndex3 = (this.currentIndex3 - 1 + this.imageb.length) % this.imageb.length;
    }
  }
}
