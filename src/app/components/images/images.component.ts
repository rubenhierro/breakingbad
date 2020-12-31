import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.interface';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: Image[] = [];
  
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
    .subscribe((images) => this.images = images);
  }

}
