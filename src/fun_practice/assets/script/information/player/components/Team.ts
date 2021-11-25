import Pokemon from "../../pokemon/Pokemon"

export default class Team {
    private name: string
    private pokemonIds: number[]
    
    constructor(name: string, pokemonIds: number[]) {
        this.name = name
        this.pokemonIds = new Array()
        for (let i = 0; i < pokemonIds.length; i++) {
            this.pokemonIds.push(pokemonIds[i])
        }
    }
}