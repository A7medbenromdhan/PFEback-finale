import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../../../app/core/services/conge.service';
import { Conge } from 'src/app/core/models/conge.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: "app-demande-conges",
  templateUrl: "./demande-conges.component.html",
  styleUrls: ["./demande-conges.component.scss"],
})
export class DemandeCongesComponent implements OnInit {
  isAdmin: boolean = false;
  isManager: boolean = false;
  userConges: Conge[] = [];

  editCongeForm: FormGroup;

  selectedRow: any;
  personnel: any;
  demandesConges: any;
  submitted= false;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private congeService: CongeService,
    private tokenStorage: TokenStorage,
    private userService: UserProfileService
  ) {}

  ngOnInit(): void {
    this.loadCongesList();

    this.editCongeForm = this.formBuilder.group({
      dateDebut: ["", Validators.required],
      dateFin: ["", Validators.required],
      statut: ["", Validators.required],
    });
  }
  get f() {
    return this.editCongeForm.controls;
  }

  openModalEdit(content: any, row: any) {
    console.log("content", row);
    this.selectedRow = row;
    this.getUser(row.matriculec);

    this.editCongeForm.controls["dateDebut"].setValue(row.dateDebut);
    this.editCongeForm.controls["dateFin"].setValue(row.dateFin);

    this.modalService.open(content, { size: "lg", centered: true });
  }

  onEditConge() {
    console.log(this.editCongeForm.value);

    this.submitted = true;
    console.log("this.addPersonnelForm.value  ", this.editCongeForm.value);
    if (this.editCongeForm.invalid) {
      return;
    } else if (this.editCongeForm.valid) {
      const congeData = this.editCongeForm.value;
      const dateDebut = new Date(congeData.dateDebut);
      const dateFin = new Date(congeData.dateFin);
      const diffTime = Math.abs(dateFin.getTime() - dateDebut.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      congeData.duree = diffDays + 1;

      this.congeService
        .updateConge(this.selectedRow.idConge, congeData)
        .subscribe(
          () => {
            this.loadCongesList();
            this.modalService.dismissAll();

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Modification avec succès " + "",
              showConfirmButton: false,
              timer: 3000,
            });
            this.editCongeForm.reset();
            // Perform any necessary actions after updating the Congé
          },
          (error) => {
            console.error("Error updating Congé:", error);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Erreur lors de modification " + "",
              showConfirmButton: false,
              timer: 3000,
            });
            // Handle the error appropriately (e.g., display an error message to the user)
          }
        );
      this.selectedRow = {};

      // Close the edit modal or perform any other necessary actions
    }
  }

  loadCongesList() {
    const user = this.tokenStorage.getUser();
    const matricule = user.matriculeP;
    console.log("user", matricule);

    this.congeService.getAll().subscribe(
      (data: Conge[]) => {
        console.log(" data is ", data);

        this.userConges = data.map((conge: Conge) => {
          return { ...conge, id: conge.id, getDuree: conge.getDuree };
        });
      },
      (error: HttpErrorResponse) => {
        console.error("Error:", error);
        // Handle the error appropriately (e.g., display an error message to the user)
      }
    );
  }

  onDeleteConge() {
    let id = this.selectedRow.idConge;

    console.log("id conge", id);
    this.congeService.deleteCongesById(id).subscribe(
      (res) => {
        console.log("Congé deleted successfully", res);
        this.loadCongesList();
        this.modalService.dismissAll();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Suppression avec succès " + "",
          showConfirmButton: false,
          timer: 3000,
        });
      },
      (error) => {
        console.error("Error deleting Congé:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Erreue lors de suppression " + "",
          showConfirmButton: false,
          timer: 3000,
        });
        this.loadCongesList();

        // Handle the error appropriately (e.g., display an error message)
        // alert("An error occurred while deleting the Congé.");
      }
    );
    this.editCongeForm.reset();
    this.selectedRow = {};
  }
  getUser(matricule: any) {
    this.userService.getUserByMatricule(matricule).subscribe((user) => {
      console.log("user is ", user);
      this.personnel = user;
    });
  }

  initialize(): void {
    const user = this.tokenStorage.getUser(); // Make sure to import and inject the 'tokenStorage' service

    if (user.roles && user.roles.includes("ROLE_ADMIN")) {
      this.isAdmin = true;
      this.isManager = false;
    } else if (user.roles && user.roles.includes("ROLE_CHEF")) {
      this.isAdmin = false;
      this.isManager = true;
    } else {
      this.isAdmin = false;
      this.isManager = false;
    }
  }

 
}
