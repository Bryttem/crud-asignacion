import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ipad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  brand: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'numeric' })
  ram: number;

  @Column({ type: 'text' })
  procesador: string;

  @Column({ type: 'text' })
  display: string;

}

