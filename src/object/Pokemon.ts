import { assert } from "cc"
import RaceInfo from "./Race"
import Skill, { getSkills } from "./Skill"

export default class Pokemon {
    private name: string
    private firstRace: RaceInfo
    private secondRace: RaceInfo
    private level: number
    private exp: number
    private expToUpgrade
    private maxHP: number
    private maxATK: number
    private maxDEF: number
    private maxSP: number
    private allSkillList: Skill[]
    private battleSkillList: Skill[]

    private baseHP: number = 30
    private baseATK: number = 20
    private baseDEF: number = 15
    private baseSP: number = 10
    private HPIncrement = 3
    private ATKIncrement = 2
    private DEFIncrement = 2
    private SPIncrement = 1

    private battleHP?: number
    private battleATK?: number
    private battleDEF?: number
    private battleSP?: number
    
    constructor(
        exsist: boolean,
        name?: string, 
        firstrace?: RaceInfo, 
        secondRace?: RaceInfo, 
        level?: number, 
        maxHP?: number, maxATK?: number, maxDEF?: number, maxSP?: number,
        baseHP?: number, baseATK?: number, baseDEF?: number, baseSP?: number,
        HPincrement?: number, ATKIncrement?: number, DEFIncrement?: number, SPincrement?: number
        ) {
        if (exsist) {
            let data = 
        } else {
            this.name = name
            this.firstRace = firstrace
            this.secondRace = secondRace
            this.level = level
            this.maxHP = maxHP
            this.maxATK = maxATK
            this.maxDEF = maxDEF
            this.maxSP = maxSP
            this.allSkillList = getSkills(this)
            this.battleSkillList = new Array(4)            
        }

    }

    public upgrade() {
        this.level
    }

    public onBattle() {
        this.battleHP = this.maxHP
        this.battleATK = this.maxATK
        this.battleDEF = this.maxDEF
        this.battleSP = this.maxSP
    }

    public getName(): string {
        return this.name
    }
    public getFirstRace(): RaceInfo {
        return this.firstRace
    }
    public getSecondRace(): RaceInfo {
        return this.secondRace
    }
    public getLevel(): number {
        return this.level
    }
    public getMaxHP(): number {
        return this.maxHP
    }
    public getMaxATK(): number {
        return this.maxATK
    }
    public getMaxDEF(): number {
        return this.maxDEF
    }
    public getMaxSP(): number {
        return this.maxSP
    }
    public getBattleHP(): number {
        assert (this.battleHP !== undefined, "battleHP is undefined!")
        return this.battleHP
    }
    public getBattleATK(): number {
        assert (this.battleATK !== undefined, "battleATK is undefined!")
        return this.battleATK
    }
    public getBattleDEF(): number {
        assert (this.battleDEF !== undefined, "battleDEF is undefined!")
        return this.battleDEF
    }
    public getBattleSP(): number {
        assert (this.battleSP !== undefined, "battleSP is undefined!")
        return this.battleSP
    }
    public getAllkillList(): Skill[] {
        return this.allSkillList
    }
    public getBattleSkillList(): Skill[] {
        return this.battleSkillList
    }
}