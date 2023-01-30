import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UrlShortened {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalUrl: string
  
  @Column()
  shortenedUrl: string; 
}
