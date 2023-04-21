import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getInicio(): string{
    return 'Bienvenido a la app de Nest.js, usted se encuentra en la página principal';
  }

  getEdad(edad): string {
    let fecha = new Date();
    return 'Saludos usted tiene: ' + (fecha.getFullYear() - edad +  ' años ')
  }
 
  getName(): string{
    return 'Mi nombre es Nest'
  }
  getElements(limit: number, offset: number): string{
    return `productos desde el id ${offset} hasta el id ${limit}`;
  }
  getInicioByName(name:string): string{
    return this.getInicio() + ' ' + '' + name;
  }
  
 


}
