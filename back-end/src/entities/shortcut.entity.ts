import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Shortcut {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 10 })
  path: string;

  @Column()
  target: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
