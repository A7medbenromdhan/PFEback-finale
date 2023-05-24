import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CongeService } from "../../../../app/core/services/conge.service";
import { EtypeConge } from "./etype-conge.enum";
import { TokenStorage } from "src/app/core/services/tokenservice.service";
import { Conge } from "src/app/core/models/conge.module";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: "app-conges",
  templateUrl: "./conges.component.html",
  styleUrls: ["./conges.component.scss"],
})
export class CongesComponent implements OnInit {
  EtypeConge = Object.values(EtypeConge);
  breadCrumbItems: Array<{}>;
  isAdmin: boolean = false;
  isManager: boolean = false;
  userConges: Conge[] = [];
  EtypeCongeLabels = EtypeConge.EtypeCongeLabels;

  formConge: FormGroup;
  editCongeForm: FormGroup;
  demandeCongeForm: FormGroup;
  selectedRow: any;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private congeService: CongeService,
    private tokenStorage: TokenStorage
  ) {}

  ngOnInit(): void {
    this.loadUserConges();
    this.breadCrumbItems = [
      { label: "Congé" },
      { label: "Gestion des congés", active: true },
    ];

    this.formConge = this.formBuilder.group({
      matriculec: [this.tokenStorage.getUser().matriculeP],
      date_debut: ["", Validators.required],
      date_fin: ["", Validators.required],
      duree: ["", Validators.required],
      cause: ["", Validators.required],
      statut: [{ value: "En Attente", disabled: true }, Validators.required],
    });

    this.editCongeForm = this.formBuilder.group({
      dateDebut: ["", Validators.required],
      dateFin: ["", Validators.required],
      cause: ["", Validators.required],
      
    });

    this.demandeCongeForm = this.formBuilder.group({
      dateDebut: ["", Validators.required],
      dateFin: ["", Validators.required],
      duree: [""],
      statut: ["En Attente", Validators.required],
      cause: ["", Validators.required],
      matriculec: [this.tokenStorage.getUser().matriculeP],
      datedemande: ["", Validators.required],
      typeConge: [null, Validators.required],
    });
  }

  openModal(content: any) {
  
    this.modalService.open(content, { size: "lg", centered: true });
  }
  openModalEdit(content: any, row:Conge) {
    console.log("content", row);
    this.selectedRow=row;
   
    this.editCongeForm.controls['dateDebut'].setValue(row.dateDebut);
    this.editCongeForm.controls["dateFin"].setValue(row.dateFin);
    this.editCongeForm.controls["cause"].setValue(row.cause);
   

    this.modalService.open(content, { size: "lg", centered: true });
  }

  onEditConge() {

    if (this.editCongeForm.valid) {
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
           
             this.loadUserConges();
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

  onDemandeConge() {
    if (this.demandeCongeForm.valid) {
      const congeData = this.demandeCongeForm.value;
      const dateDebut = new Date(congeData.dateDebut);
      const dateFin = new Date(congeData.dateFin);
      const diffTime = Math.abs(dateFin.getTime() - dateDebut.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      congeData.duree = diffDays + 1; // add 1 to include the start date in the duration
      congeData.statut = "En Attente"; // set default status to 'En Attente'

      // Get the matriculec from the personnel
      congeData.matriculec = this.tokenStorage.getUser().matriculeP;
      congeData.typeConge = this.demandeCongeForm.controls["typeConge"].value;

      this.congeService.createConge(congeData).subscribe(
        (response: Conge) => {
          console.log("Congé created:", response);
          this.loadUserConges();
          this.modalService.dismissAll();
          this.demandeCongeForm.reset();
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Ajout avec succès " + "",
             showConfirmButton: false,
             timer: 3000,
           });
         // alert("Demande envoyée");
        },
        (error) => {
          console.error("Error:", error);
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Erreur lors de l'ajout " + "",
             showConfirmButton: false,
             timer: 3000,
           });
          // Handle the error appropriately (e.g., display an error message to the user)
        }
      );
    }
  }

  createDem() {
    this.congeService.createConge(this.demandeCongeForm.value).subscribe(
      (data) => {
        if (data) {
          console.log("ok");
        } else {
          console.log("non");
        }
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  }

  loadUserConges() {
    const user = this.tokenStorage.getUser();
    const matricule = user.matriculeP;
    console.log("user", matricule);

    this.congeService.getCongesByMatricule(matricule).subscribe(
      (data: Conge[]) => {
        console.log(" conges", data);
        // Modify the data to include the id property for each Congé object
        this.userConges = data.map((conge: Conge) => {
          return { ...conge, id: conge.id, getDuree: conge.getDuree };
        });
        console.log(" this.userConges", this.userConges);
      },
      (error: HttpErrorResponse) => {
        console.error("Error:", error);
        // Handle the error appropriately (e.g., display an error message to the user)
      }
    );
  }

  deleteCongeById(id: number) {
    this.congeService.deleteCongesById(id).subscribe(
      () => {
        console.log("Congé deleted successfully");
        // Show a success message or perform any other necessary actions
      },
      (error) => {
        console.error("Error deleting Congé:", error);
        // Handle the error appropriately (e.g., display an error message)
      }
    );
  }

  onDeleteConge() {
    let id = this.selectedRow.idConge;
    
    console.log("id conge", id)
    this.congeService.deleteCongesById(id).subscribe(
      (res) => {
        console.log("Congé deleted successfully", res);
        this.loadUserConges();
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
        this.loadUserConges();
        
        // Handle the error appropriately (e.g., display an error message)
        // alert("An error occurred while deleting the Congé.");
      }
    );
    this.editCongeForm.reset();
    this.selectedRow={};

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
  getDiffirenceDays(dateDebut, dateFin) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2008, 1, 12);
    const secondDate = new Date(2008, 1, 22);
    const diffDays = Math.round(Math.abs((dateFin - dateDebut) / oneDay));
    return diffDays;
  }
}
