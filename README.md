# dogs-angular
This is an angular project.
In this project I used 4 components and I linked them togheder using RouterModule.

The the first component that is displayed is main-component, it takes a list with all dogs breeds from an api and display it.
When a user click on one breed, the second component is displayed.

The second component is breed-component, it display the name of breed(taken from first component), 
take a photo with the specified dog breed from an api and display it. 
Also if the breed have sub-breeds display a list with sub-breeds which is taken from an api.
If user click on one sub-breed from the list, then the third component is displayed.

The third component is breed-sub-tree-component which display the name of breed, name of sub-breed and a photo of sub-breed. 
The photo is take from an api.
The name of breed and sub-breed are taken from second component.

The forth component is is unknown-route-component. It is displayed when the user change the url of page.

For api calls I used a service calld ApiService which uses HttpClient.
