export enum Attribute {
    Fire = 1,
    Water = 2,
    Grass = 3
}

export enum Grid {
    grass = 1,
    forest = 2,
    hill = 3,
    river = 4,
    riverNortheast = 5,
    riverSoutheast = 6,
    riverSouthwest = 7,
    riverNorthwest = 8
}

export class Account {
    username: string
    password: string //之后可以加密成byte
}

export class User {
    nickname: string
    pokemons: Pokemon[] //转换成byte存数据库
    coins: number
    position: Position
}

export class Pokemon { //大概要两个表，图鉴里是完整的， 玩家的逐渐改变
    name: string
    firstAttribute: Attribute //转换成byte
    secondAttribute: Attribute | null
    level: number
    stage: number //进化一般3个阶段
    color: string
    HP: number //假定每次战斗都以最大值开始
    closeAttack: number
    longRangeAttack: number
    closeDefence: number
    longRangeDefence: number
    speed: number

}

export class Map {
    name: string
    grid: number[][]
}

export class Position {
    map: Map
    x: number
    y: number
}