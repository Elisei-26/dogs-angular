import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-breed-sub-tree-component',
  templateUrl: './breed-sub-tree-component.component.html',
  styleUrls: ['./breed-sub-tree-component.component.css']
})
export class BreedSubTreeComponentComponent implements OnInit {
  dogBreed: string = window.location.href;
  dogSubBreed!: string;
  dogSubBreedPhoto!: string;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.prepareDogSubBreedFromUrl();
    this.prepareDogSubBreedPhoto();
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
        console.log(errorText);
      }
    });
  }
}
