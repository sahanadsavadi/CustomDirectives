import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../Interface/app-interface';
import { MyCompanyService } from '../my-company.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: IUser = {} as IUser;
  constructor(
    private myComponentService: MyCompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const item = this.myComponentService.user.find(
      (user) => user.id === +this.route.snapshot.params['id']
    );
    if (!this.user) {
      this.router.navigate(['/users']);
    }
    if (item) {
      this.user = item;
    }
    if (!this.user) {
      this.router.navigate(['/users']);
    }
  }

  onSaveChanges(name: string, email: string) {
    this.user.email = email;
    this.user.name = name;
    console.log(this.user.name, this.user.email);
    this.router.navigate(['/users']);
  }
}
