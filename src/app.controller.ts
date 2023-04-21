import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInicio(): string{
    return this.appService.getInicio();
  }
  
  @Get(':edad')
  getEdadActual(@Param('edad') edad: number): string{
    // convertimos el parametro a tipo numero para poder hacer operaciones ya que del link viene tipo string
    return this.appService.getEdad(Number(edad));
  }
}
