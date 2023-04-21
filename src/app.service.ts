import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getInicio(): string{
    return 'Bienvenido a la app';
  }

  getEdad(edad): string {
    let fecha = new Date();
    return 'Saludos usted tiene: ' + (fecha.getFullYear() - edad)
  }
}
