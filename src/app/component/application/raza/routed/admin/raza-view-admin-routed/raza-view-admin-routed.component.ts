import { Component, OnInit } from '@angular/core';
import { IRaza } from '../../../../../../model/raza-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raza-view-admin-routed',
  templateUrl: './raza-view-admin-routed.component.html',
  styleUrls: ['./raza-view-admin-routed.component.css']
})
export class RazaViewAdminRoutedComponent implements OnInit {
  id: number = 0;
  oRaza: IRaza = null;


  constructor(
    private oActivatedRoute : ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
