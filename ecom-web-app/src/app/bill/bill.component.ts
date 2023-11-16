import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bill :any;
  billId!:number;
  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) {
    this.billId=route.snapshot.params['billId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+this.billId)
      .subscribe({
        next : (data)=>{
          this.bill=data;
        },
        error : (err)=>{}
      });
  }

  getBill(o: any) {
    this.router.navigateByUrl("/bill/"+o.id);
  }
}
