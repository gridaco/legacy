import { IsNotEmpty, MinLength } from "class-validator";
import { IsValidUsername } from "../_validations";

export class CreateWorkspaceDto {
  @IsNotEmpty()
  @IsValidUsername()
  @MinLength(3)
  name: string;
}

export class WorkspaceNameVaildationDto {
  @IsNotEmpty()
  @IsValidUsername()
  @MinLength(3)
  name: string;
}
