import { Component} from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from '../_services/members.service';
import { UserParams } from '../_models/userParams';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  model: any = {}

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void{
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members');
        this.model = {};
      }
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }


}
