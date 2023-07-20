import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-breed-component',
  templateUrl: './breed-component.component.html',
  styleUrls: ['./breed-component.component.css']
})
export class BreedComponentComponent implements OnInit {
  dogBreed: string = window.location.href;
  dogBreedPhoto!: string;
  dogSubBreedsList!: string[];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.prepareDogBreedFromUrl();
    this.prepareDogBreedPhoto();
    this.prepareDogSubBreeds();
  }

  prepareDogBreedFromUrl(): void {
    let i: number;
    for (i = this.dogBreed.length - 1; this.dogBreed[i] != "/"; --i) { }
    this.dogBreed = this.dogBreed.substring(i + 1, this.dogBreed.length);
  }

  prepareDogBreedPhoto(): void {
    this.apiService.getDogBreedPhoto(this.dogBreed).subscribe({
      next: (photoUrl) => {
        this.dogBreedPhoto = photoUrl.message;
      },
      error: (errorText: string) => {
        console.log(errorText);
      }
    });
  }

  prepareDogSubBreeds(): void {
    this.apiService.getDogsBreedsList().subscribe({
      next: (dogsBreedsList: any) => {
        console.log(dogsBreedsList.message[this.dogBreed]);
        this.dogSubBreedsList = dogsBreedsList.message[this.dogBreed];
      },
      error: (errorText: string) => {
        console.log(errorText);
      }
    });
  }
}
