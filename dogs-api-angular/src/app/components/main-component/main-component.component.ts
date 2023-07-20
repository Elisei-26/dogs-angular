import { Component, OnInit } from '@angular/core';
import { DogBreed } from '../DogBreed';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  dogsBreedsList!: DogBreed[];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.prepareDogsBreedsList();
  }

  prepareDogsBreedsList(): void {
    this.apiService.getDogsBreedsList().subscribe({
      next: (dogsBreedsList: any) => {
        this.dogsBreedsList = dogsBreedsList.message as DogBreed[];
      },
      error: (errorText: string) => {
        console.log(errorText);
      }
    });
  }
}
