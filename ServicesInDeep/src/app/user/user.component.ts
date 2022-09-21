import { Component, OnInit, Self } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __awaiter } from 'tslib';
import { IUser } from '../Interface/app-interface';
import { MyCompanyService } from '../my-company.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: IUser = {} as IUser;

  constructor(
    private route: ActivatedRoute,
    private myComponentService: MyCompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const item = this.myComponentService.user.find(
      (user) => user.id === +this.route.snapshot.params['id']
    );
    if (item) {
      this.user = item;
    }
    if (!this.user) {
      this.router.navigate(['/users']);
    }
  }

  editUser() {
    this.router.navigate(['/user', this.user.id,'edit']);
console.log( this.router.navigate(['/user', this.user.id,'edit']));

  }
}
