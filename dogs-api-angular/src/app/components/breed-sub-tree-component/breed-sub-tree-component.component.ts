import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breed-sub-tree-component',
  templateUrl: './breed-sub-tree-component.component.html',
  styleUrls: ['./breed-sub-tree-component.component.css']
})
export class BreedSubTreeComponent implements OnInit {
  breed: string = "";
  subBreed: string = "";
  subBreedPhoto: string = "";
  subBreedsList: string[] = [];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.prepareDogSubBreedFromUrl();
    this.prepareDogSubBreedPhoto();
    this.prepareDogSubBreeds();
  }

  prepareDogSubBreedFromUrl(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.breed = params["breed"];
      this.subBreed = params["sub-breed"];
    });
  }

  prepareDogSubBreedPhoto(): void {
    this.apiService.getDogBreedPhoto(this.breed).subscribe({
      next: (photoUrl) => {
        this.subBreedPhoto = photoUrl.message;
      },
      error: (errorText: string) => {
        this.breed = "there is no such dog breed";
        this.subBreed = "there is no such dog sub breed";
        console.log(errorText);
      }
    });
  }

  prepareDogSubBreeds(): void {
    this.apiService.getDogsBreedsList().subscribe({
      next: (dogsBreedsList: any) => {
        this.subBreedsList = dogsBreedsList.message[this.breed];
        this.checkSubBreedIsInSubBreedList();
      },
      error: (errorText: string) => {
        console.log(errorText);
      }
    });
  }

  checkSubBreedIsInSubBreedList(): void {
    let flag = false;
    for (let i = 0; i < this.subBreedsList.length; ++i) {
      if (this.subBreedsList[i] === this.subBreed) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      this.subBreed = "there is no such dog sub breed";
    }
  }
}
