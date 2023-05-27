import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorators';
import { ApiBearerAuth,ApiTags,ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Usuarios')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Public()
  @Post()
  @ApiOperation({summary:'Usa este endpoint para crear tu usuario'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({summary:'Usa este endpoint para obtener todos los usuario'})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Usa este endpoint para obetener tu usuario por ID'})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({summary:'Usa este endpoint para actualizar tu usuario por ID'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Usa este endpoint para eliminar tu usuario por ID'})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
