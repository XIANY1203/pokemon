export default class Evolution {
    private evaluationLevel: number
    private name: string
    private HPIncrement: number
    private ATKIncrement: number
    private DEFIncrement: number
    private SPIncrement: number

    constructor(
        evaluationLevel: number, 
        name: string, 
        HPIncrement: number, 
        ATKIncrement: number, 
        DEFIncrement: number,
        SPIncrement: number
        ) {
            this.evaluationLevel = evaluationLevel
            this.name = name
            this,HPIncrement = HPIncrement
            this.ATKIncrement = ATKIncrement
            this.DEFIncrement = DEFIncrement
            this.SPIncrement = SPIncrement
    }

    public getEvaluationLevel() {
        return this.evaluationLevel
    }
    public getName() {
        return this.name
    }
    public getHPIncrement() {
        return this.HPIncrement
    }
    public getATKIncrement() {
        return this.ATKIncrement
    }
    public getDEFIncrement() {
        return this.DEFIncrement
    }
    public getSPIncrement() {
        return this.SPIncrement
    }
}