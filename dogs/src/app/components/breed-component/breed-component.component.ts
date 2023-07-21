import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-breed-component",
	templateUrl: "./breed-component.component.html",
	styleUrls: ["./breed-component.component.css"],
})
export class BreedComponent implements OnInit {
	isVisible: boolean = false;
	breed: string = "";
	breedPhoto: string = "";
	subBreedsList: string[] = [];

	constructor(
		private apiService: ApiService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.prepareDogBreedFromUrl();
		this.prepareDogBreedPhoto();
		this.prepareDogSubBreeds();
	}

	prepareDogBreedFromUrl(): void {
		this.activatedRoute.params.subscribe((params) => {
			this.breed = params["breed"];
		});
	}

	prepareDogBreedPhoto(): void {
		this.apiService.getDogBreedPhoto(this.breed).subscribe({
			next: (photoUrl) => {
				this.breedPhoto = photoUrl.message;
			},
			error: (errorText: string) => {
				this.breed = "there is no such dog breed";
				console.log(errorText);
			},
		});
	}

	prepareDogSubBreeds(): void {
		this.apiService.getDogsBreedsList().subscribe({
			next: (dogsBreedsList: any) => {
				this.subBreedsList = dogsBreedsList.message[this.breed];
				this.checkSubBreeds();
			},
			error: (errorText: string) => {
				console.log(errorText);
			},
		});
	}

	checkSubBreeds(): void {
		this.isVisible = this.subBreedsList?.length !== 0;
	}
}
