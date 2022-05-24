import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {
  @Output() eventoHijo = new EventEmitter<boolean>();
  
  hola = "Hola mundo"
  show:boolean = false;
  @Input() nombre: string ="";
  @Input() habilidad: string = "";
  @Input() universo: string = "";
  @Input() personajeImg: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  mostrarInfo(){
    this.eventoHijo.emit(!this.show)
    this.show = !this.show
  }
}
