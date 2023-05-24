import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../../../app/core/services/service.service';
import { Service } from '../../../../app/core/models/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './gestion-services.component.html',
  styleUrls: ['./gestion-services.component.scss']
})
export class GestionServicesComponent implements OnInit {
  services: Service[] = [];
  editedService: Service = {
    idService: null,
    nomService: '',
    idChef: null
  };
  newService: Service = {
    idService: null,
    nomService: '',
    idChef: null
  };

  editServiceForm: FormGroup;
  addServiceForm: FormGroup;

  @ViewChild('editServiceModal') editServiceModal!: NgbModalRef;
  @ViewChild('addServiceModal') addServiceModal!: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private serviceService: ServiceService,
    private formBuilder: FormBuilder
  ) {
    this.editServiceForm = this.formBuilder.group({
      nomService: ['', Validators.required],
      idChef: ['', Validators.required]
    });

    this.addServiceForm = this.formBuilder.group({
      nomService: ['', Validators.required],
      idChef: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.serviceService.getServices().subscribe((services) => {
      this.services = services;
    });
  }

  openEditServiceModal(service: Service): void {
    this.editedService = { ...service };
    this.modalService.open(this.editServiceModal);
  }

  saveEditedService(): void {
    if (this.editServiceForm.valid) {
      const updatedService: Service = {
        idService: this.editedService.idService,
        nomService: this.editServiceForm.value.nomService,
        idChef: this.editServiceForm.value.idChef
      };

      // Call the service method to update the service
      this.serviceService.updateService(updatedService).subscribe(
        (response) => {
          console.log('Service updated:', response);
          this.modalService.dismissAll();
        },
        (error) => {
          console.error('Error:', error);
          // Handle the error appropriately (e.g., display an error message to the user)
        }
      );
    }
  }

  openAddServiceModal(): void {
    this.modalService.open(this.addServiceModal);
  }

  saveNewService(): void {
    if (this.addServiceForm.valid) {
      const newService: Service = {
        idService: null,
        nomService: this.addServiceForm.value.nomService,
        idChef: this.addServiceForm.value.idChef
      };

      // Call the service method to add the new service
      this.serviceService.addService(newService).subscribe(
        (response) => {
          console.log('Service added:', response);
          this.modalService.dismissAll();
        },
        (error) => {
          console.error('Error:', error);
          // Handle the error appropriately (e.g., display an error message to the user)
        }
      );
    }
  }

  deleteService(serviceId: number): void {
    // Call the service method to delete the service
    this.serviceService.deleteService(serviceId).subscribe(
      (response) => {
        console.log('Service deleted:', response);
        // Perform any additional actions after deleting the service
      },
      (
        error) => {
          console.error('Error:', error);
          // Handle the error appropriately (e.g., display an error message to the user)
          }
          );
          }
          }