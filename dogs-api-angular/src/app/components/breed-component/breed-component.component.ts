import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-breed-component',
  templateUrl: './breed-component.component.html',
  styleUrls: ['./breed-component.component.css']
})
export class BreedComponent implements OnInit {
  isVisible: boolean = false;
  dogBreed: string = window.location.href;
  dogBreedPhoto!: string;
  dogSubBreedsList!: string[];

  constructor(private apiService: ApiService) { }

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
        this.dogBreed = "there is no such dog breed";
        console.log(errorText);
      }
    });
  }

  prepareDogSubBreeds(): void {
    this.apiService.getDogsBreedsList().subscribe({
      next: (dogsBreedsList: any) => {
        this.dogSubBreedsList = dogsBreedsList.message[this.dogBreed];
        if (dogsBreedsList.message[this.dogBreed] != undefined && dogsBreedsList.message[this.dogBreed].length != 0) {
          this.isVisible = true;
        }
      },
      error: (errorText: string) => {
        console.log(errorText);
      }
    });
  }
}
