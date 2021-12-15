import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

   students = [
    "Jabair",
    "Lee",
    "Matt",
    "Cody",
    "Megan",
    "Omaid",
    "Francesko",
    "Evan"
  ]

  selected: string = ""

  update(event: any) {
    this.selected = event.target.value 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
