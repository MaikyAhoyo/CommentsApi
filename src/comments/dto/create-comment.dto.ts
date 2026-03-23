import { IsString, IsNotEmpty, MinLength, IsDate } from 'class-validator';

export class CreateCommentDto {
  @IsString({ message: 'El nombre de usuario debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre de usuario no puede estar vacío' })
  @MinLength(3, {
    message: 'El nombre de usuario debe tener al menos 3 caracteres',
  })
  username: string;

  @IsString({ message: 'El mensaje debe ser un texto' })
  @IsNotEmpty({ message: 'El mensaje no puede estar vacío' })
  message: string;

  @IsDate({ message: 'La fecha debe ser válida' })
  @IsNotEmpty({ message: 'La fecha es requerida' })
  date: number;
}
