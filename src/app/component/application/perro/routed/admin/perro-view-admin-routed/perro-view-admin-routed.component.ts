import { Component, OnInit } from '@angular/core';
import { IPerro } from '../../../../../../model/perro-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perro-view-admin-routed',
  templateUrl: './perro-view-admin-routed.component.html',
  styleUrls: ['./perro-view-admin-routed.component.css']
})
export class PerroViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oPerro: IPerro = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
