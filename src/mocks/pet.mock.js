import { fakerES_MX as faker } from "@faker-js/faker";

export const generateSinglePet = () => {
    const pet = {
        name: faker.person.firstName(),
        birthDate: faker.date.birthdate({ mode: 'year', min: 2008, max: 2024 })
    }
    return pet
};

export const generatePetsMock = () => {
    const pets = []
    for(let i=0;i < amount; i++) {
        const pet = {
            name: faker.person.firstName(),
            birthDate: faker.date.birthdate({ mode: 'year', min: 2008, max: 2024 })
        };
        pets.push(pet)
    };
    return pets;
};