import Pokemon from "./Pokemon"
import * as fs from "fs"

export enum Effect {
    Attack = 0,
    Strengthen = 1,
    Weak = 2,
    Sleep = 3,
    Paralysis = 4
}

export default class Skill {
    private name: string
    private discription: string
    private power: number
    private coldingTime: number
    private cost: number
    private effect: Effect
    private probability: number
    private lockLevel: number

    constructor(
        name: string, 
        discription: string,
        power: number,
        coldingTime: number,
        cost: number,
        effect: Effect,
        probability: number,
        lockLevel: number) {
        this.name = name
        this.discription = discription
        this.power = power
        this.coldingTime = coldingTime
        this.cost = cost
        this.effect = effect
        this.probability = probability
        this.lockLevel = lockLevel
    }

    public getName(): string {
        return this.name
    }
    public getDiscription(): string {
        return this.discription
    }
    public getPower() {
        return this.power
    }
    public getColdingTime() {
        return this.coldingTime
    }
    public getCost() {
        return this.cost
    }
    public getEffect() {
        return this.effect
    }
    public getProbability() {
        return this.probability
    }
    public getLockLevel() {
        return this.lockLevel
    }
}

export function getSkills(pokemon: Pokemon): Skill[] {
    let skills = new Array()  
    if (fs.existsSync(`../skill_information/${pokemon.getName}.json`)) {
        let data = JSON.parse(fs.readFileSync(`../skill_information/${pokemon.getName}.json`, "utf8"))
        for (let i = 1; i <= data.length; i++) {
            skills.push(new Skill(
                data[`${i}`]["name"],
                data[`${i}`]["discription"],
                data[`${i}`]["power"],
                data[`${i}`]["coldingTime"],
                data[`${i}`]["cost"],
                data[`${i}`]["effect"],
                data[`${i}`]["probability"],
                data[`${i}`]["lockLevel"]
            ))
        }
    }
    return skills
}