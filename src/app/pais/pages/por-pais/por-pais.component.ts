import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
//termino que almacenara la informaciond e la barra de busqueda
  termino: string =  '';
  //variable que usaremos para determinar si el elemento ingresado existe
  hayError: boolean = false;
//(private PaisService: PaisService) inyecta el servicio que construimos para poder usar buscar pais
  constructor(private PaisService: PaisService){}

//funcion de busqueda  la cual envia el termino a la funsion buscar para que este valide la informacion
//y retorne un obserbable el cual podemos apreciar gracias al subscribe
  buscar(){
    this.hayError = false;
    console.log(this.termino)

    this.PaisService.buscarPais(this.termino)
      .subscribe((resp) =>{
      console.log(resp);
      },(err)=>{
        this.hayError=true;
    });
  }
}
