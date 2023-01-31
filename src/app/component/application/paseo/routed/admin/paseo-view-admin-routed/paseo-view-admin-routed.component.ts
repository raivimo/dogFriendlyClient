import { Component, OnInit } from '@angular/core';
import { IPaseo } from '../../../../../../model/paseo-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paseo-view-admin-routed',
  templateUrl: './paseo-view-admin-routed.component.html',
  styleUrls: ['./paseo-view-admin-routed.component.css']
})
export class PaseoViewAdminRoutedComponent implements OnInit {
  
  id: number = 0;
  oPaseo: IPaseo = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params ['id'];
   }

  ngOnInit(): void {
  }

}
