import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { HeroById } from './interfaces/hero/HeroById';
import { Hero } from './interfaces/hero/Hero';
import {
  ClientGrpc,
  GrpcMethod,
  GrpcStreamMethod,
} from '@nestjs/microservices';
import { Observable, ReplaySubject, Subject, map, of } from 'rxjs';


interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
  findMany(upstream: Observable<HeroById>): Observable<Hero>;
}

@Controller('/test')
export class HeroeController {
  private readonly items: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];
  heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

  @Get(':id')
  getById(@Param('id') id: string): any {
    const data: HeroById = { id: Number(id) };
    return this.findOne(data);
  }

  @GrpcMethod('HeroService')
  findOne(data: HeroById): Hero {
    const user = this.items.find(({ id }) => id === data.id);
    return user;
  }

  @GrpcStreamMethod('HeroService')
  findMany(upstream: Observable<HeroById>): Observable<Hero[]> {
    return upstream.pipe(
      map((data: HeroById) => {
        const user = this.items.find(({ id }) => id === data.id);
        return user ? [user] : [];
      }),
    );
  }

  @Get()
  findAllController(): Observable<Hero[]> {
    return this.findAll();
  }

  private findAll(): Observable<Hero[]> {
    return of(this.items);
  }
}
