import { Component } from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private descending: boolean = true;
  private order: number;
  private column: string = 'first_name';

  constructor(public listService: ListService) {}

  ionViewDidEnter(): void {
    this.listService.fetchPerson()
        .pipe()
        .subscribe(() => {
        });
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
