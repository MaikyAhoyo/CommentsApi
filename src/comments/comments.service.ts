import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    const comment = this.commentsRepository.create(createCommentDto);
    return this.commentsRepository.save(comment);
  }

  findAll() {
    return this.commentsRepository.find();
  }

  findOne(id: number) {
    return this.commentsRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.commentsRepository.delete(id);
  }
}
