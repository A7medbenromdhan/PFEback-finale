import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

/**
 * Basic table component
 */
export class BasicComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private modalService: NgbModal,private formBuilder : FormBuilder) { }

  formConge:FormGroup

    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Congé' }, { label: 'Gestion des congés', active: true }];

      this.formConge = this.formBuilder.group({
  
      
        matirulce:['',Validators.required],
        date_debut:['',Validators.required],
        date_fin:['',Validators.required],
        duree:['',Validators.required],
        statut:['',Validators.required],
        type_conge:['',Validators.required],
     
      });

  
    }

    
  
  openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}
