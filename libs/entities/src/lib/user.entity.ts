import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  pk!: number;

  @Column({ name: 'keycloak_id' })
  keycloakId!: string;

  @Column({ name: 'first_name' })
  firstName!: string;

  @Column({ name: 'last_name' })
  lastName!: string;

  @Column({ name: 'birth_date' })
  birthDate!: Date;

  @Column()
  gender!: string;

  @Column({ name: 'phone_number' })
  phoneNumber!: string;

  @Column()
  companyFk!: string;

  @Column('text', { name: 'skill_fks', array: true })
  skillFks!: string[];

  @Column({ name: 'created_at' })
  createdAt!: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
