import { PartialType } from "@api/node_modules/@nestjs/swagger";
import { CreateExampleDto } from "./create-example.dto";

export class UpdateExampleDto extends PartialType(CreateExampleDto) {}
