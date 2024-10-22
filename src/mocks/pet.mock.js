import { fakerES_MX as faker } from "@faker-js/faker";

export const generateSinglePet = () => {
    const pet = {
        name: faker.person.firstName(),
        birthDate: faker.date.birthdate({ mode: 'year', min: 2008, max: 2024 }),
        specie: faker.animal.type(),
        adopted: false,
        image: faker.image.avatar(),
    }
    return pet
};

export const generatePetsMock = () => {
    const pets = []
    for(let i=0;i < amount; i++) {
        const pet = {
            name: faker.person.firstName(),
            birthDate: faker.date.birthdate({ mode: 'year', min: 2008, max: 2024 }),
            specie: faker.animal.type(),
            adopted: false,
            image: faker.image.avatar(),
        };
        pets.push(pet)
    };
    return pets;
};