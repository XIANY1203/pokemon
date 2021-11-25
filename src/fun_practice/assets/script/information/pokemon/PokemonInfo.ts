import { Race } from "./Race"
import Skill from "../skill/Skill"
import Evolution from "../../object/Evaluation"

export class PokemonInfo {
    private name: string
    private pokemonId: string
    private firstRace: Race
    private secondRace: Race
    private nextEvolution: number
    private baseHP: number
    private baseATK: number
    private baseDEF: number
    private baseSP: number
    private HPIncrement: number
    private ATKIncrement: number
    private DEFIncrement: number
    private SPIncrement: number

    constructor(
        name: string,
        pokemonId: string,
        firstRace: Race,
        secondRace: Race,
        nextEvolution: number,
        baseHP: number,
        baseATK: number,
        baseDEF: number,
        baseSP: number,
        HPIncrement: number,
        ATKIncrement: number,
        DEFIncrement: number,
        SPIncrement: number,
    ) {
        this.name = name
        this.pokemonId = pokemonId
        this.firstRace = firstRace
        this.secondRace = secondRace
        this.nextEvolution = nextEvolution
        this.baseHP = baseHP
        this.baseATK = baseATK
        this.baseDEF = baseDEF
        this.baseSP = baseSP
        this.HPIncrement = HPIncrement
        this.ATKIncrement = ATKIncrement
        this.DEFIncrement = DEFIncrement
        this.SPIncrement = SPIncrement
    }
}

const maxLevel = 100
export var PokemonMap: Map<string, PokemonInfo> = new Map(
    [
        ["001", new PokemonInfo("妙蛙种子", "001", Race.Grass, Race.Prison, 12, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["002", new PokemonInfo("妙蛙草", "002", Race.Grass, Race.Prison, 20, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["003", new PokemonInfo("妙蛙花", "003", Race.Grass, Race.Prison, maxLevel + 1, 20, 11, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["004", new PokemonInfo("皮丘", "004", Race.Electricity, Race.None, 14, 22, 12, 10, 7, 2, 1.4, 1.2, 0.4)],
        ["005", new PokemonInfo("皮卡丘", "005", Race.Electricity, Race.None, 28, 22, 12, 10, 7, 2.5, 1.8, 1.6, 0.9)],
        ["006", new PokemonInfo("雷丘", "006", Race.Electricity, Race.None, maxLevel + 1, 22, 12, 10, 7, 3, 2.1, 1.9, 1.2)],
        ["007", new PokemonInfo("超雷丘", "007", Race.Electricity, Race.Super, maxLevel + 1, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],
    ]
)