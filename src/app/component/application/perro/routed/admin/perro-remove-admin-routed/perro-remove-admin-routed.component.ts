import { Component, OnInit } from '@angular/core';
import { PerroService } from '../../../../../../service/perro.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-perro-remove-admin-routed',
  templateUrl: './perro-remove-admin-routed.component.html',
  styleUrls: ['./perro-remove-admin-routed.component.css']
})
export class PerroRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oPerroService: PerroService,
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oPerroService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Perro " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }






}
