import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth2Service } from 'src/app/core/services/auth2.service';
import Swal from 'sweetalert2';
import { CongeService } from 'src/app/core/services/conge.service';
import { UserProfileService } from 'src/app/core/services/user.service';


@Component({
  selector: "app-personneles",
  templateUrl: "./personneles.component.html",
  styleUrls: ["./personneles.component.scss"],
})
export class PersonnelesComponent implements OnInit {
  personnels: any[] = []; // Replace 'any' with the appropriate type for personnel

  addPersonnelForm: FormGroup;
  editPersonnelForm: FormGroup;

  editedPersonnel: any = {}; // Replace 'any' with the appropriate type for personnel
  newPersonnel: any = {}; // Replace 'any' with the appropriate type for personnel
  submitted = false;
  errorMessage = "";
  listChefs: any;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authService: Auth2Service,
     private userService: UserProfileService
  ) {
    this.editPersonnelForm = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      poste: ["", Validators.required],
      role: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUsersList();
    this.addPersonnelForm = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      departement: ["", Validators.required],
      numTel: ["", [Validators.required, Validators.pattern(/^\+?[0-9]{3,}$/)]],
      poste: ["", Validators.required],
      password: ["", Validators.required],
      idChef: [""],
      roles: ["", Validators.required],
    });
    this.userService.getListChefs().subscribe((chefs) => {
      console.log("chefs ", chefs);
      this.listChefs = chefs;
    });
   
  }
  get f() {
    return this.addPersonnelForm.controls;
  }

  openAddPersonnelModal(content: TemplateRef<any>): void {
    this.newPersonnel = {};
     
    this.modalService.open(content);
  }

  saveNewPersonnel(): void {
    this.submitted = true;
    console.log("this.addPersonnelForm.value  ", this.addPersonnelForm.value);
    if (this.addPersonnelForm.invalid) {
      return;
    } else if (this.addPersonnelForm.valid) {
      // Assign the form values to 'newPersonnel' object
      this.newPersonnel = this.addPersonnelForm.value;

      this.authService.register(this.addPersonnelForm.value).subscribe(
        (data) => {
          this.getUsersList();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Ajout avec succès " + "",
            showConfirmButton: false,
            timer: 3000,
          });
          this.addPersonnelForm.reset();
        },
        (err) => {
          this.errorMessage = err.error.message;
          
          Swal.fire({
            position: "top-end",
            icon: "error",
            title:
              "Erreur d'ajout personnel " +
              "",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      );

      // Call a service method to save the new personnel
      // Example:
      // this.personnelService.addPersonnel(this.newPersonnel);

      // Reset the form and close the modal
      this.addPersonnelForm.reset();
      this.modalService.dismissAll();
    }
  }

  editPersonnel(personnel: any): void {
    this.editedPersonnel = { ...personnel };
    // Perform the necessary logic for editing personnel
  }

  saveEditedPersonnel(): void {
    if (this.editPersonnelForm.valid) {
      // Assign the form values to 'editedPersonnel' object
      this.editedPersonnel = this.editPersonnelForm.value;

      // Call a service method to update the edited personnel
      // Example:
      // this.personnelService.updatePersonnel(this.editedPersonnel);

      // Reset the form and close the modal
      this.editPersonnelForm.reset();
      this.modalService.dismissAll();
    }
  }

  deletePersonnel(id: any): void {
    this.userService.deleteUser(id).subscribe(
      (res) => {
        this.getUsersList();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Suppression avec succès " + "",
          showConfirmButton: false,
          timer: 3000,
        });
      },
      (err) => {
       

        Swal.fire({
          position: "center",
          icon: "error",
          title: "Erreur suppression personnel " + "",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    );
 
    }
  

  getUsersList(){
    this.userService.getAllPersonnels().subscribe((res) =>{
        console.log("users", res);
        this.personnels= res;
    },(error)=>{
      console.log("error");
    })
  }
}
