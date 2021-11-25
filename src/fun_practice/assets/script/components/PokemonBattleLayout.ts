
import { _decorator, Component, Node } from 'cc';
import Pokemon from '../../../../object/Pokemon';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PokemonBattleLayout
 * DateTime = Thu Nov 25 2021 01:45:21 GMT+0800 (GMT+08:00)
 * Author = QAQGaeBolg
 * FileBasename = PokemonBattleLayout.ts
 * FileBasenameNoExtension = PokemonBattleLayout
 * URL = db://assets/script/components/PokemonBattleLayout.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('PokemonBattleLayout')
export class PokemonBattleLayout extends Component {
    private pokemon: Pokemon
    private canMove: boolean

    public getPokemon() {
        return this.pokemon
    }
    public setPokemon(pokemon: Pokemon) {
        this.pokemon = pokemon
    }
    public getCanMove() {
        return this.canMove
    }
    public setCanMove(canMove: boolean) {
        this.canMove = canMove
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
