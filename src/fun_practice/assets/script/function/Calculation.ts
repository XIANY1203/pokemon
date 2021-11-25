import Pokemon from "../object/Pokemon";
import Skill from "../object/Skill";

export function calculateDamage(attacker: Pokemon, skill: Skill,  defencer: Pokemon): number {
    let damage: number = attacker.getLevel()
    damage *= skill.getPower()
    damage *= attacker.getBattleATK()
    damage /= defencer.getBattleDEF()
    damage /= 100
    let result = Math.round(damage)
    if (
        attacker.getFirstRace().isRestraint(defencer.getFirstRace()) 
        || attacker.getFirstRace().isRestraint(defencer.getSecondRace())
        ) {
        result += damage
    }
    if (
        attacker.getSecondRace().isRestraint(defencer.getFirstRace())
        || attacker.getSecondRace().isRestraint(defencer.getSecondRace())
        ) {
        result += damage
    }
    if (
        (defencer.getFirstRace().isRestraint(attacker.getFirstRace()) 
        && defencer.getFirstRace().getName() != attacker.getFirstRace().getName())
        || (defencer.getFirstRace().isRestraint(attacker.getSecondRace())
        && defencer.getFirstRace().getName() != attacker.getSecondRace().getName())
        ) {
        if (result > damage) {
            result -= damage
        } else {
            result /= 2
        }
    }
    if (
        (defencer.getSecondRace().isRestraint(attacker.getFirstRace()) 
        && defencer.getSecondRace().getName() != attacker.getFirstRace().getName())
        || (defencer.getSecondRace().isRestraint(attacker.getSecondRace())
        && defencer.getSecondRace().getName() != attacker.getSecondRace().getName())
        ) {
        if (result > damage) {
            result -= damage
        } else {
            result /= 2
        }
    }
    return result
}