import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo-component.component.html',
  styleUrls: ['./foo-component.component.css']
})
export class FooComponent {
  data: Object;
  loading: boolean;
  o :Observable<Object>;
  constructor(public http: HttpClient) {}
  makeRequest(): void {
    console.log("here");
    //Notifichiamo che stiamo attendendo dei dati
    this.loading = true;
    //Facciamo una get e otteniamo l'oggetto Observable che attende la risposta
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la risposta
    this.o.subscribe(this.getData);
  }
  //Il metodo che notifica la risposta
  getData = (d : Object) =>
  {
    this.data = new Object(d);
    this.loading = false;
  }
}
