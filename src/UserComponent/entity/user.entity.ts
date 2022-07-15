import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256, nullable: false })
  password: string;

  @Column({ length: 10, nullable: false })
  username: string;

  @Column({ nullable: false })
  age: number;

  @Column({ length: 40, unique: true })
  job: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;
}
