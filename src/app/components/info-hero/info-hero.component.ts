import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})
export class InfoHeroComponent implements OnInit {
  @Input() vehiculo: string ="";
  @Input() simbolo: string = "";
  @Input() villano: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
