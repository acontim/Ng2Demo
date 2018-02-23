import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private id: string ;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
