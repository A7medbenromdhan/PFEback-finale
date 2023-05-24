import { Component, OnInit, ViewChild } from '@angular/core';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';


import { ConfigService } from '../../../core/services/config.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
  isVisible: string;

  transactions: Array<[]>;
  statData: Array<[]>;
  leaveBalance: number;
  isActive: string;
  user: any;
  connectedUser;
  // New property to determine whether the logged-in user is a Chef
  isChef: boolean;

  @ViewChild("content") content;
  leaveBalancePercentage: any;
  constructor(
    private modalService: NgbModal,
    private configService: ConfigService,
    private eventService: EventService,
    private tokenStorage: TokenStorage,
    private userService: UserProfileService
  ) {}

  ngOnInit() {
    this.user = this.tokenStorage.getUser();
    console.log("user  ", this.user);
    this.getConnectedUser(this.user.matriculeP);
    


    // Set the value of isChef based on your application logic
    // For example, if the logged-in user has a role property with a value of 'Chef'
    // this.isChef = this.loggedInUser.role === 'Chef';

    /**
     * horizontal-vertical layput set
     */
    // const attribute = document.body.getAttribute("data-layout");

    // this.isVisible = attribute;
    // const vertical = document.getElementById("layout-vertical");
    // if (vertical != null) {
    //   vertical.setAttribute("checked", "true");
    // }
    // if (attribute == "horizontal") {
    //   const horizontal = document.getElementById("layout-horizontal");
    //   if (horizontal != null) {
    //     horizontal.setAttribute("checked", "true");
    //     console.log(horizontal);
    //   }
    // }

    /**
     * Fetches the data
     */
  }
  getCircleStyle(progress: number): string {
    let rotation = (progress / 100) * 360;
    let style = "";

    if (rotation <= 180) {
      style = `--left-rotation: ${rotation}deg; --right-rotation: 0deg;`;
    } else {
      style = `--left-rotation: 180deg; --right-rotation: ${
        rotation - 180
      }deg;`;
    }

    return style;
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.openModal();
    // }, 2000);
  }

  /**
   * Fetches the data
   */

  openModal() {
    this.modalService.open(this.content, { centered: true });
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout: string) {
    this.eventService.broadcast("changeLayout", layout);
  }
  getConnectedUser(matricule){
    this.userService.getUserByMatricule(matricule).subscribe(data =>{
      this.connectedUser= data;
      console.log( "connected user", this.connectedUser)
    })
  }
}
