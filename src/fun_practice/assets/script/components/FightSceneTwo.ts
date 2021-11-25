
import { _decorator, Component, Node } from 'cc';
import { BattleState } from '../object/BattleState';
import Player from '../object/Player';
const { ccclass, property } = _decorator;
import { PokemonBattleLayout } from './PokemonBattleLayout';
 
@ccclass('FightSceneTwo')
export class FightSceneTwo extends Component {
    private battleState: BattleState
    private round: number
    private leftPlayer: Player
    private rightPlayer: Player
    
    public setBattleState(battleState: BattleState) {
        this.battleState = battleState
    }

    public getCurrentplayer(): Player {
        let leftLayout = this.node
        .getChildByName("Canvas")
        .getChildByName("Layout_left")
        .getChildByName("Left_Componnt")
        .getComponent(PokemonBattleLayout)
        let rightLayout = this.node
        .getChildByName("Canvas")
        .getChildByName("Layout_right")
        .getChildByName("Right_Component")
        .getComponent(PokemonBattleLayout)
        let leftPokemon = leftLayout.getPokemon()
        let rightpokemon = rightLayout.getPokemon()
        if (leftPokemon.getBattleSP() >= rightpokemon.getBattleSP() && leftLayout.getCanMove()) {
            return this.leftPlayer
        } else {
            return this.rightPlayer
        }
    }

    start () {
        this.battleState = BattleState.RoundStart
        this.round = 1
    }

    onLoad() {
        this.battleState = BattleState.LoadBattle
        this.round = 0
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
