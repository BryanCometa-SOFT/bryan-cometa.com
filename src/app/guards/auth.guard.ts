import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EStorageKeys } from '../interfaces/estorageKey';
import { StorageProvider } from '../providers/storage.provider';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * Constructor
   * @param storage Parametro con el almacenamiento local
   * @param navigate Parametro con la navegacion
   * @param CharacterService Parametro que injecta el service
   */
   constructor(private storage: StorageProvider, private router: Router) {}

   /**
    * CanActivate method
    * @return Retorna si es valida la navegacion
    */
   canActivate(
   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this.isThereUser();
   }

   /**
    * Evaluar si hay un token en almacenamiento y la API favoritos
    * @return Retorna una promesa
    */
   private async isThereUser(): Promise<boolean> {
     const token: string = (await this.storage.getItem(EStorageKeys.token)) || '';
     

     if (!token) {
      console.log("Hola si entro")
       this.router.navigate(['/login']);
       this.storage.removeItem(EStorageKeys.token);
       return false;
     }else{
      console.log("no entré")
     }
     return true;
   }
}



