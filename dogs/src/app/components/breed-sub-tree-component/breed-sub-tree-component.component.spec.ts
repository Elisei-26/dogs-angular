import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BreedSubTreeComponentComponent } from "./breed-sub-tree-component.component";

describe("BreedSubTreeComponentComponent", () => {
	let component: BreedSubTreeComponentComponent;
	let fixture: ComponentFixture<BreedSubTreeComponentComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [BreedSubTreeComponentComponent],
		});
		fixture = TestBed.createComponent(BreedSubTreeComponentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
