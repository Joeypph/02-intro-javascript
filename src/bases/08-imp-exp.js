import heroes,{owners} from "../data/heroes";

// import { heroes } from "./data/heroes";

console.log('Los owners',owners);
const getHeroeById = (id) => {
    return heroes.find(hero => hero.id === id);
}
const getHeroeByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}
console.log(getHeroeById(2));
console.log(getHeroeByOwner('DC'));

