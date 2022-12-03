import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { HttpInterceptor } from './interceptor/http.interceptor';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, HttpClientModule, HotToastModule.forRoot()],
  exports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
