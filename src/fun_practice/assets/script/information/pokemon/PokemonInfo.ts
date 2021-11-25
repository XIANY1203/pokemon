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
    private skills: Skill[]

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
        ["008", new PokemonInfo("小火龙", "008", Race.Fire, Race.None, 16, 20, 12, 17, 6, 3, 1.4, 1.2, 0.4)],
        ["009", new PokemonInfo("火恐龙", "009", Race.Fire, Race.None, 26, 20, 12, 17, 6, 3, 1.4, 1.2, 0.4)],
        ["010", new PokemonInfo("喷火龙", "010", Race.Fire, Race.Fly, maxLevel + 1, 20, 12, 17, 6, 3, 1.6, 1.4, 0.4)],
        ["011", new PokemonInfo("杰尼龟", "011", Race.Water, Race.None, 18, 15, 14, 12, 6, 3, 0.6, 1.2, 1.0)],
        ["012", new PokemonInfo("卡咪龟", "012", Race.Water, Race.None, 18, 15, 14, 12, 6, 3, 0.6, 1.2, 1.0)],
        ["013", new PokemonInfo("水箭龟", "013", Race.Water, Race.None, maxLevel + 1, 15, 14, 12, 6, 3, 0.6, 1.2, 1.0)],
        ["014", new PokemonInfo("波波", "014", Race.Normal, Race.Fly, 10, 14, 14, 14, 6, 3, 0.6, 1.2, 1.1)],
        ["015", new PokemonInfo("比比鸟", "015", Race.Normal, Race.Fly, 16, 14, 14, 14, 6, 3, 0.6, 1.2, 1.1)],
        ["016", new PokemonInfo("大比鸟", "016", Race.Normal, Race.Fly, maxLevel + 1, 14, 14, 14, 6, 3, 0.6, 1.2, 1.1)],
        ["017", new PokemonInfo("臭泥", "017", Race.Poison, Race.None, 28, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],
        ["018", new PokemonInfo("臭臭泥", "018", Race.Poison, Race.None, maxLevel + 1, 25, 17, 17, 14, 3.1, 2.2, 1.95, 1.23)],
    ]

)