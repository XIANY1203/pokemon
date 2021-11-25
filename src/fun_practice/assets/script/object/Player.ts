import Pokemon from "./Pokemon"
import Team from "./Team"

export default class Player {
    private pokemons: Pokemon[]
    private team: Team

    constructor(pokemons: Pokemon[], team: Team) {
        this.pokemons = new Array()
        for (let i = 0; i < pokemons.length; i++) {
            this.pokemons.push(pokemons[i])
        }
        this.team = team
    }
    
    public getPokemons() {
        return this.pokemons
    }
    public getTeams() {
        return this.team
    }
}