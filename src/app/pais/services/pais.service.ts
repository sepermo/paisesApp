import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //contiene la url de la api restcountries
  private apiUrl: string = 'https://restcountries.com/v3.1';

  //(private http: HttpClientModule) se le inyecta al constructor para usar los servicios que brinda http client module
  constructor(private http: HttpClient) { }

      //este es un metodo que recibe el termino de la caja de busqueda y retorna un observable
      buscarPais(termino: string):Observable<any>{
        const url=`${this.apiUrl}/name/${termino}`;
        return this.http.get(url);
      } 



}
