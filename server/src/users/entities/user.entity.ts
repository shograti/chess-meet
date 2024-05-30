import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { Event } from 'src/events/entities/event.entity';

@Entity()
@Unique('UQ_USER_EMAIL', ['email'])
@Unique('UQ_USER_USERNAME', ['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Exclude()
  @Column({ select: false })
  password: string;

  @OneToMany(() => Event, (event) => event.creator)
  createdEvents: Event[];

  @ManyToMany(() => Event, (event) => event.participants)
  participatedEvents: Event[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
