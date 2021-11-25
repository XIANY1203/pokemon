import { assert } from "cc"
import RaceInfo from "./Race"
import Skill, { getSkills } from "./Skill"

export default class Pokemon {
    private name: string
    private firstRace: RaceInfo
    private secondRace: RaceInfo
    private isEnemy: boolean
    private level: number
    private maxHP: number = 0
    private maxATK: number = 0
    private maxDEF: number = 0
    private maxSP: number = 0
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
    
    private exp?: number
    private expToUpgrade?: number
    private expCanGet?: number

    constructor(
        name: string, 
        firstrace: RaceInfo, 
        secondRace: RaceInfo, 
        isEnemy: boolean,
        level: number, exp?: number, expToUpgrade?: number,
        expCanGet?: number,
        baseHP?: number, baseATK?: number, baseDEF?: number, baseSP?: number,
        HPincrement?: number, ATKIncrement?: number, DEFIncrement?: number, SPincrement?: number
        ) {
        this.name = name
        this.firstRace = firstrace
        this.secondRace = secondRace
        this.isEnemy = isEnemy
        this.level = level
        this.upgrade(this.level)
        this.allSkillList = getSkills(this)
        this.battleSkillList = new Array(4)
        
    }

    public upgrade(level?: number) {
        if (level !== null && level !== undefined) {
            this.level = level
        } else {
            this.level += 1            
        }
        this.maxHP = this.baseHP + (this.level - 1) * this.HPIncrement
        this.maxATK = this.baseATK + (this.level - 1) * this.ATKIncrement
        this.maxDEF = this.baseDEF + (this.level - 1) * this.DEFIncrement
        this.maxSP = this.baseSP + (this.level - 1) * this.SPIncrement
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