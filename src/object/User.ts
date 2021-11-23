import Pokemon from "./Pokemon"
import Team from "./Team"

export default class User {
    private userId: string
    private username: string
    private password: string
    private pokemons: Pokemon[]
    private teams: Team[]
}