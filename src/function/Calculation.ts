import Pokemon from "../object/Pokemon";
import Skill from "../object/Skill";

export function calculateDamage(attacker: Pokemon, skill: Skill,  defencer: Pokemon): number {
    let damage: number = attacker.getLevel()
    damage *= skill.getPower()
    damage *= attacker.getBattleATK()
    damage /= defencer.getBattleDEF()
    damage /= 100
    if (attacker.get)
    return damage
}