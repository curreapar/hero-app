import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-super-hero',
  templateUrl: './view-super-hero.component.html',
  styleUrls: ['./view-super-hero.component.css']
})
export class ViewSuperHeroComponent implements OnInit {

  heros:any[] = [];
  show:boolean = false;
  constructor(private http:HttpClient) {
    this.http.get<any>("assets/hero.json").subscribe(
      data => data.forEach((d: any) => {
        this.heros.push(d)
      })
    )
    console.log(this.heros)
  }

  ngOnInit(): void {
    
  }

  showInfo(show:any){
    console.log(show)
    this.show = show;
  }

}
