import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toast: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd); // Không cho bind ngược dữ liệu ra list
  }
  onDelete(PHId) {
    if(confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(PHId)
      .subscribe(res => {
        this.service.refreshList();
        this.toast.warning('Deleted Successfully', 'Payment Detail Register');
      },
        err => {
          console.log(err);
        })
      }
  }
}
