import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: ServiceApiService) { }

  ngOnInit(): void {
  }

  searchInput: string ='pikachu';

  SerchInput(event: string) {
    this.service.getSearchInput(event).then((item) =>
    console.log(item)).catch(() => console.log('Não Encontrado'))
  }
}
