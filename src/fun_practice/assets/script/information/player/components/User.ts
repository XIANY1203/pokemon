import Player from "./Player"
import Pokemon from "../../pokemon/Pokemon"
import Team from "./Team"

export default class User extends Player{
    private userId: string
    private username: string
    private password: string

    constructor(userId: string, username: string, password: string, pokemons: Pokemon[], team: Team) {
        super(pokemons, team)
        this.userId = userId
        this.username = username
        this.password = password
    }

    public getUserTd() {
        return this.userId
    }
    public getUsername() {
        return this.username
    }
    public getPassword() {
        return this.password
    }
}