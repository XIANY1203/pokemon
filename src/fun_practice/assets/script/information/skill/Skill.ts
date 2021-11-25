export enum Effect {
    Attack = 0,
    Strengthen = 1,
    Weaken = 2,
    Sleep = 3,
    Paralysis = 4,
    Bleed = 5
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
//妙蛙种子
const skill_Bulbasaur: Skill[] = [
    new Skill("抓", "用坚硬且无比锋利的爪子抓对手进行攻击。", 40, 2, 2, Effect.Attack, 100, 1),
	new Skill("催眠粉", "撒出催眠粉，从而让对手陷入睡眠状态。", 0, 1, 1, Effect.Sleep, 75, 5),
	new Skill("大蛇瞪眼", "用腹部的花纹使对手害怕，从而让其陷入麻痹状态。", 0, 3, 3, Effect.Paralysis, 100, 13),
	new Skill("泰山压顶", "用整个身体压住对手进行攻击。有时会让对手陷入麻痹状态。", 85, 2, 2, Effect.Paralysis, 100, 34),
	new Skill("火箭头锤", "第１回合把头缩进去，从而提高防御。第２回合攻击对手。", 130, 3, 3, Effect.Strengthen, 100, 49),
	new Skill("居合斩", "用镰刀或爪子等切斩对手进行攻击。", 50, 3, 3, Effect.Attack, 95, 58),
	new Skill("夹住", "将对手从两侧夹住，给予伤害。", 55, 2, 2, Effect.Attack, 100, 65),
	new Skill("烟幕", "向对手喷出烟或墨汁等，从而降低对手的命中率。", 0, 2, 2, Effect.Weaken, 100, 70),
	new Skill("吼叫", "放走对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束。", 0, 3, 3, Effect.Attack, 0, 85),
	new Skill("尖刺加农炮", "向对手发射锐针进行攻击。连续攻击２～５次。", 20, 3, 3, Effect.Bleed, 100, 86)
]
//小火龙
const skill_Charmander: Skill[] = [
    new Skill("猛撞", "以惊人的气势撞向对手进行攻击。自己也会受到少许伤害。", 90, 2, 2, Effect.Attack, 85, 1),
	new Skill("居合斩", "用镰刀或爪子等切斩对手进行攻击。", 50, 1, 1, Effect.Attack, 95, 3),
	new Skill("拍击", "使用长长的尾巴或手等拍打对手进行攻击。", 40, 1, 1, Effect.Attack, 100, 20),
	new Skill("迷昏拳", "有节奏地出拳攻击对手。有时会使对手混乱。", 70, 1, 1, Effect.Attack, 100, 24),
	new Skill("高速星星", "发射星形的光攻击对手。攻击必定会命中。", 60, 1, 1, Effect.Attack, 0, 44),
	new Skill("音爆", "将冲击波撞向对手进行攻击。必定会给予２０的伤害。", 20, 3, 3, Effect.Attack, 90, 56),
	new Skill("乱击", "用角或喙刺向对手进行攻击。连续攻击２～５次。", 15, 1, 1, Effect.Bleed, 85, 67),
	new Skill("吼叫", "放走对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束。", 0, 3, 3, Effect.Attack, 0, 81),
	new Skill("紧束", "使用长长的身体或藤蔓等，在４～５回合内紧束对手进行攻击。", 15, 3, 3, Effect.Bleed, 90, 88)
]
//臭臭泥
const skill_Mud: Skill[] = [
    new Skill("超音波", "从身体发出特殊的音波，从而使对手混乱。", 0, 2, 2, Effect.Attack, 55, 1),
	new Skill("愤怒门牙", "用锋利的门牙猛烈地咬住对手进行攻击。", 100, 2, 2, Effect.Attack, 90, 19),
	new Skill("三重攻击", "用３种光线进行攻击。有时会让对手陷入麻痹、灼伤或冰冻的状态。", 80, 1, 1, Effect.Paralysis, 100, 23),
	new Skill("抓", "用坚硬且无比锋利的爪子抓对手进行攻击。", 40, 1, 1, Effect.Attack, 100, 34),
	new Skill("瞪眼", "用犀利的眼神使其害怕，从而降低对手的防御。", 0, 3, 3, Effect.Weaken, 100, 41),
	new Skill("溶化", "通过细胞的变化进行液化，从而大幅提高自己的防御。", 0, 2, 2, Effect.Strengthen, 0, 42),
	new Skill("恶魔之吻", "用恐怖的脸强吻对手。让对手陷入睡眠状态。", 0, 3, 3, Effect.Sleep, 75, 71),
	new Skill("剧毒", "让对手陷入剧毒状态。随着回合的推进，中毒伤害会增加。", 0, 2, 2, Effect.Prison, 90, 80),
	new Skill("乱抓", "用爪子或镰刀等抓对手进行攻击。连续攻击２～５次。", 18, 1, 1, Effect.Bleed, 80, 83)
]
//比比鸟
const skill_Pidgeotto: Skill[] = [
    new Skill("变身", "变身成对手宝可梦的样子，能够使用和对手完全相同的招式。", 0, 3, 3, Effect.Attack, 0, 1),
	new Skill("投球", "向对手投掷圆形物体进行攻击。连续攻击２～５次。", 15, 2, 2, Effect.Bleed, 85, 16),
	new Skill("紧束", "使用长长的身体或藤蔓等，在４～５回合内紧束对手进行攻击。", 15, 2, 2, Effect.Bleed, 90, 24),
	new Skill("神鸟猛击", "第２回合攻击对手。偶尔使对手畏缩。也容易击中要害。", 140, 1, 1, Effect.Attack, 90, 27),
	new Skill("起风", "用翅膀将刮起的狂风袭向对手进行攻击。", 40, 1, 1, Effect.Attack, 100, 38),
	new Skill("恶魔之吻", "用恐怖的脸强吻对手。让对手陷入睡眠状态。", 0, 3, 3, Effect.Sleep, 75, 62),
	new Skill("模仿", "可以将对手最后使用的招式，在战斗内变成自己的招式。", 0, 2, 2, Effect.Attack, 0, 71),
	new Skill("聚气", "深深地吸口气，集中精神。自己的攻击会变得容易击中要害。", 0, 1, 1, Effect.Attack, 0, 72),
	new Skill("叫声", "让对手听可爱的叫声，引开注意力使其疏忽，从而降低对手的攻击。", 0, 3, 3, Effect.Weaken, 100, 81)
]
//杰尼龟
const skill_Squirtle : Skill[] = [
    new Skill("大蛇瞪眼", "用腹部的花纹使对手害怕，从而让其陷入麻痹状态。", 0, 1, 1, Effect.Paralysis, 100, 1),
	new Skill("攀瀑", "以惊人的气势扑向对手。有时会使对手畏缩。", 80, 2, 2, Effect.Attack, 100, 11),
	new Skill("角钻", "用旋转的角刺入对手进行攻击。只要命中就会一击濒死。", 0, 2, 2, Effect.Attack, 0, 22),
	new Skill("炸蛋", "向对手用力投掷大大的蛋进行攻击。", 100, 1, 1, Effect.Attack, 75, 27),
	new Skill("吼叫", "放走对手，强制拉后备宝可梦上场。如果对手为野生宝可梦，战斗将直接结束。", 0, 1, 1, Effect.Attack, 0, 57),
	new Skill("泡沫", "向对手用力吹起无数泡泡进行攻击。有时会降低对手的速度。", 40, 2, 2, Effect.Weaken, 100, 62),
	new Skill("自我再生", "让全身的细胞获得再生，回复一半ＨＰ。", 0, 3, 3, Effect.Parasitism, 0, 93)
]
const skill_Pikachu: Skill[] = [
    new Skill("聚宝功", "向对手的身体投掷小金币进行攻击。战斗后可以拿到钱。", 40, 3, 3, Effect.Attack, 100, 1),
	new Skill("刺耳声", "发出不由自主想要捂起耳朵的刺耳声，从而大幅降低对手的防御。", 0, 1, 1, Effect.Weaken, 85, 8),
	new Skill("撞击", "用整个身体撞向对手进行攻击。", 40, 1, 1, Effect.Attack, 100, 12),
	new Skill("尖刺加农炮", "向对手发射锐针进行攻击。连续攻击２～５次。", 20, 3, 3, Effect.Bleed, 100, 31),
	new Skill("变硬", "全身使劲，让身体变硬，从而提高自己的防御。", 0, 1, 1, Effect.Strengthen, 0, 46),
	new Skill("抓", "用坚硬且无比锋利的爪子抓对手进行攻击。", 40, 1, 1, Effect.Attack, 100, 46),
	new Skill("电光一闪", "以迅雷不及掩耳之势扑向对手。必定能够先制攻击。", 40, 2, 2, Effect.Attack, 100, 62),
	new Skill("绑紧", "使用长长的身体或藤蔓等，在４～５回合内绑紧对手进行攻击。", 15, 3, 3, Effect.Bleed, 85, 71),
	new Skill("连环巴掌", "用连环巴掌拍打对手进行攻击。连续攻击２～５次。", 15, 1, 1, Effect.Bleed, 85, 97)
]
	
export var SkillList: Map<string, Skill[]> = new Map(
    [
        ["001", skill_Pikachu],
        ["002", skill_Pikachu],
        ["003", skill_Pikachu]
    ]
)