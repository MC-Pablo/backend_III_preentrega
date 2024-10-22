import Pet from "../dao/pet.dao.js";
import { generatePetsMock } from "../mocks/pet.mock.js";

export class PetServices {
  constructor() {
    this.petDao = new Pet();
  }
  async getAll() {
    const pets = await this.petDao.get();
    return pets;
  }
  async getById(id) {
    const pet = await this.petDao.getBy(id);
    if (!pet) throw customError.notFoundError(`Pet id ${id} not found`);
    return pet;
  }

  async create(data) {
    const pet = await this.petDao.save(data);
    return pet;
  }
  async createMany(data) {
    const pets = await this.petDao.saveMany(data);
    return pets;
  }

  async update(id, data) {
    const pet = await this.petDao.update(id, data);
    return pet;
  }

  async remove(id) {
    await this.petDao.delete(id);
    return "ok";
  }
  async createMocks() {
    const pets = generatePetsMock(10);
    const petsDb = await this.petDao.saveMany(pets);
    return petsDb;
  }
};
