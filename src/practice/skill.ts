export enum Effect {
    Attack, //攻击类
    Fire, //每回合受到伤害型
    Bleed,
    Prison,
    Parasitism, //吸收对方生命回复
    Sleep, //无法行动，可以被攻击解除型
    Paralysis, //不可解除型
    Freeze,  //可以被特定元素解除
}

export default class Skill {
    name: string
    discription: string
    power: number //攻击和每回合伤害的填数字，没有伤害的技能填0
    effect: Effect
    coldingTime: number //冷却回合0~3
}