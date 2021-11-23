export enum Race {
    None = 0,
    Fire = 1,

}

export enum RaceCompareResult {
    None = 0,
    Strenth = 1,
    Weak = 2
}

export default class RaceInfo {
    private race: Race
    private name: string
    private restraints: RaceInfo[]

    constructor(race: Race, name: string, restraints?: RaceInfo[]) {
        this.race = race
        this.name = name
        if (restraints !== null && restraints !== undefined) {
            this.restraints = restraints
        } else {
            this.restraints = new Array()
        }
    }

    private getRace(): Race {
        return this.race
    }

    private getName(): string {
        return this.name
    }

    private getRestraints(): RaceInfo[] {
        return this.getRestraints()
    }
    
    private isRestraint(raceCompared: RaceInfo): boolean {
        return this.restraints.includes(raceCompared)
    }
}