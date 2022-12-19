import { Specification } from '../model/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  constructor(private specifications: Specification[] = []) {}

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find((specification) => specification.name === name);

    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const created_at = new Date();
    const specification = new Specification(name, description, created_at);

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
