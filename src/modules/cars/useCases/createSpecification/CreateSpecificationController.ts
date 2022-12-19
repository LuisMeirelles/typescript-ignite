import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { Request, Response } from 'express';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.sendStatus(201);
  }
}

export { CreateSpecificationController };