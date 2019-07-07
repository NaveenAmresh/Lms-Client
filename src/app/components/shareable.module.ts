import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {ErrordialogueComponent} from './popup/errordialogue/errordialogue.component';
import {MaterialModule} from '../material.module';
import {ExportAsModule} from 'ngx-export-as';
import {NgxPrintModule} from 'ngx-print';
import {ForgotPasswwordComponent} from './popup/forgot-passwword/forgot-passwword.component';
import {BookslistComponent} from './popup/bookslist/bookslist.component';
import {AlertComponent} from './popup/alert/alert.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {Field1Component} from './main/pages/setup/field1/field1.component';
import {Field2Component} from './main/pages/setup/field2/field2.component';
import {SetupComponent} from './main/pages/setup/setup.component';
@NgModule({
  declarations: [ForgotPasswwordComponent, ErrordialogueComponent, BookslistComponent, AlertComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpClientXsrfModule, MaterialModule, ExportAsModule,
    NgxPrintModule, ColorPickerModule],
  providers: [DatePipe],
  exports: [FormsModule, ReactiveFormsModule, HttpClientModule, HttpClientXsrfModule, ExportAsModule, NgxPrintModule, ColorPickerModule],
  entryComponents: [ForgotPasswwordComponent, ErrordialogueComponent, BookslistComponent, Field1Component, Field2Component, SetupComponent]
})
export class ShareableModule { }
