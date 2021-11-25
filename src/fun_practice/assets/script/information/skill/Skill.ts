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