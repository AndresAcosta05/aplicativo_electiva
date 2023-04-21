import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
//endpoint de bienvenida
  @Get()
  getInicio(): string{
    return this.appService.getInicio();
  }
  //endpoint de name
  @Get('name')
  getName(): String{
    return this.appService.getName();
  }
//obtener el parametro incio y captura el nombre
  @Get('inicio/:name')
  getInicioByName(@Param('name')name: string): string{
    return this.appService.getInicioByName(name);
  }
//obtencion de parametros tipo query, en este caso elementos
 @Get('elements')
 getElements(@Query('limit')limit= 20, @Query('offset')offset= 0):string{
  return this.appService.getElements(limit, offset);
 }

  @Get(':edad')
  getEdadActual(@Param('edad') edad: number): string{
    // convertimos el parametro a tipo numero para poder hacer operaciones ya que del link viene tipo string
    return this.appService.getEdad(Number(edad));
  }
  
}
