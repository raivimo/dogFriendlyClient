import { Component, OnInit } from '@angular/core';
import { RazaService } from '../../../../../../service/raza.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
declare let bootstrap: any;

@Component({
  selector: 'app-raza-remove-admin-routed',
  templateUrl: './raza-remove-admin-routed.component.html',
  styleUrls: ['./raza-remove-admin-routed.component.css']
})
export class RazaRemoveAdminRoutedComponent implements OnInit {
  
  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oRazaService: RazaService,
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  
  removeOne() {
    this.oRazaService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Raza " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
  
}


