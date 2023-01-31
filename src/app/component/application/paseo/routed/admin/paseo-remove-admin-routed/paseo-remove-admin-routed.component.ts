import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaseoService } from 'src/app/service/paseo.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-paseo-remove-admin-routed',
  templateUrl: './paseo-remove-admin-routed.component.html',
  styleUrls: ['./paseo-remove-admin-routed.component.css']
})
export class PaseoRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oPaseoService: PaseoService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

  removeOne() {
    this.oPaseoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Paseo " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }

}
