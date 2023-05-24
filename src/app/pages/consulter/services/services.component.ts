import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../app/core/services/service.service';

import { Service } from '../../../core/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  service: Service;
  chefName: string;
  personnel: string[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.fetchServiceData();
  }
  fetchServiceData() {
    this.serviceService.getServices().subscribe(
      (data: Service[]) => {
        if (data.length > 0) {
          this.service = data[0];
          this.chefName = data[0].idChef.toString();
          this.personnel = data.map((item) => item.nomService);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
