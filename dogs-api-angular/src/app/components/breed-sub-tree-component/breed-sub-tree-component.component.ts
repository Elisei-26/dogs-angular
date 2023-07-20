import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-breed-sub-tree-component',
  templateUrl: './breed-sub-tree-component.component.html',
  styleUrls: ['./breed-sub-tree-component.component.css']
})
export class BreedSubTreeComponent implements OnInit {
  dogBreed: string = window.location.href;
  dogSubBreed!: string;
  dogSubBreedPhoto!: string;
  dogSubBreedsList!: string[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.prepareDogSubBreedFromUrl();
    this.prepareDogSubBreedPhoto();
    this.prepareDogSubBreeds();
  }

  prepareDogSubBreedFromUrl(): void {
    let i: number;
    for (i = this.dogBreed.length - 1; this.dogBreed[i] != "/"; --i) { }
    this.dogSubBreed = this.dogBreed.substring(i + 1, this.dogBreed.length);
    let j: number;
    for (j = i - 1; this.dogBreed[j] != "/"; --j) { }
    this.dogBreed = this.dogBreed.substring(j + 1, i);
  }

  prepareDogSubBreedPhoto(): void {
    this.apiService.getDogBreedPhoto(this.dogBreed).subscribe({
      next: (photoUrl) => {
        this.dogSubBreedPhoto = photoUrl.message;
      },
      error: (errorText: string) => {
        this.dogBreed = "there is no such dog breed";
        this.dogSubBreed = "there is no such dog sub breed";
        console.log(errorText);
      }
    });
  }

  prepareDogSubBreeds(): void {
    this.apiService.getDogsBreedsList().subscribe({
      next: (dogsBreedsList: any) => {
        this.dogSubBreedsList = dogsBreedsList.message[this.dogBreed];
        let flag = false;
        for (let i = 0; i < this.dogSubBreedsList.length; ++i) {
          if (this.dogSubBreedsList[i] === this.dogSubBreed) {
            flag = true;
            break;
          }
        }
        if (flag === false) {
          this.dogBreed = "there is no such dog breed";
          this.dogSubBreed = "there is no such dog sub breed";
        }
      },
      error: (errorText: string) => {
        console.log(errorText);
      }
    });
  }
}
