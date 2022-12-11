import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shortcut } from '../../entities/shortcut.entity';
import { Repository } from 'typeorm';
import { generateUrlId } from '../../utils/generator';

// TODO Config file
const EXPIRATION_DELAY = 1000 * 60 * 60 * 24 * 30; // 30 days

@Injectable()
export class ShortcutService {
  constructor(
    @InjectRepository(Shortcut) private repository: Repository<Shortcut>,
  ) {}

  #isExpired(shortcut: Shortcut): boolean {
    return shortcut.createdAt.getTime() + EXPIRATION_DELAY < Date.now();
  }

  async create(target: string) {
    let shortcut = await this.findTarget(target);
    if (shortcut) {
      return shortcut;
    }

    let path;
    do {
      path = generateUrlId();
      // If path already used and expiration not reached, generate another one
    } while (
      (shortcut = await this.findPath(path)) &&
      !this.#isExpired(shortcut)
    );
    return this.repository.save({ target, path });
  }

  async #findLast(where: Record<any, any>): Promise<Shortcut> {
    try {
      const res = await this.repository.find({
        where,
        order: { createdAt: 'DESC' },
        take: 1,
      });

      return res[0];
    } catch (error) {
      return null;
    }
  }

  async findTarget(target: string): Promise<Shortcut> {
    return await this.#findLast({ target });
  }

  async findPath(path: string): Promise<Shortcut> {
    return await this.#findLast({ path });
  }
}
