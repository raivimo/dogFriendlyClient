import { Component, OnInit } from '@angular/core';
import { ITipoPaseo } from '../../../../../../model/tipopaseo-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipopaseo-view-admin-routed',
  templateUrl: './tipopaseo-view-admin-routed.component.html',
  styleUrls: ['./tipopaseo-view-admin-routed.component.css']
})
export class TipopaseoViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oTipoPaseo: ITipoPaseo = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }
  

}
