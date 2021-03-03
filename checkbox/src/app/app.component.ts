import { Component, OnInit, TemplateRef } from '@angular/core';
import { TabService } from './tab.service';
import { DialogConfig, DialogService } from '@fundamental-ngx/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular10';
  checked: boolean;
  // tabValue1: boolean = true;
  checkboxValue: boolean;
  value: any = {};

  tabs: { title: string, content: string }[] = [];
  dialogRef: any;
  confirmationReason: string;

  constructor(private tab: TabService, private _dialogService: DialogService) {

  }
  ngOnInit() {
    this.tab.getTabvalue().subscribe((res) => {
      // this.data = res
      this.checked = res[res.length - 1].tabValue;
      // give valid path as assets/user.json might not work
    });

    //CheckBox get value
    this.tab.getCheckvalue().subscribe((res) => {
      // this.data = res
      this.checkboxValue = res[res.length - 1].tabValue;
      // give valid path as assets/user.json might not work
    });
  }

  tabValue(event) {
    console.log("eeeeeeeeee", event);
    const payload = {
      id: null,
      tabValue: event
    }
    this.tab.postTabvalue(payload).subscribe((value) => {
      console.log('saiii', value);

    })
  }


  /////////////////checkbox////////////////////



  checkValue(event) {
    console.log("eeeeeeeeee", event);
    this.value = {
      id: null,
      tabValue: event
    }

  }


  openDialog(dialog: TemplateRef<any>): void {
    if (this.checkboxValue == false) {
      this.dialogRef = this._dialogService.open(dialog, { responsivePadding: true });

      this.dialogRef.afterClosed.subscribe(
        (result) => {
          if (result === 'Continue' && this.value.tabValue == true) {
         this.submit(this.value);
          }else  {
            const falsevalue = {
              id:null,
              tabValue:false
            }
            this.submit(falsevalue);
          }
        }
      );
    }
  }
  submit(value) {
    this.tab.postCheckvalue(value).subscribe((value) => {
    })
  }

}
