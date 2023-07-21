import { Component, OnInit } from "@angular/core";
import { DogBreed } from "../dog-breed";
import { ApiService } from "src/app/services/api-service.service";

@Component({
	selector: "app-main-component",
	templateUrl: "./main-component.component.html",
	styleUrls: ["./main-component.component.css"],
})
export class MainComponent implements OnInit {
	breedList: DogBreed[] = [];

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.prepareDogsBreedsList();
	}

	prepareDogsBreedsList(): void {
		this.apiService.getDogsBreedsList().subscribe({
			next: (dogsBreedList: any) => {
				this.breedList = dogsBreedList.message as DogBreed[];
			},
			error: (errorText: string) => {
				console.log(errorText);
			},
		});
	}
}
