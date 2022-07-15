import { Entity, Column, PrimaryColumn, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ length: 256, nullable: false })
  password: string;

  @Column({ length: 10, nullable: false })
  name: string;

  @Column({ nullable: false })
  type: 'doctor' | 'default';

  @Column({ nullable: false })
  age: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;
}
