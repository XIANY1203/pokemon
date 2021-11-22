
import * as cc from 'cc';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = LoginReturnButton
 * DateTime = Mon Nov 22 2021 01:12:38 GMT+0800 (中国标准时间)
 * Author = QAQGaeBolg
 * FileBasename = LoginReturnButton.ts
 * FileBasenameNoExtension = LoginReturnButton
 * URL = db://assets/script/buttons/LoginReturnButton.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('LoginReturnButton')
export class LoginReturnButton extends cc.Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    onCLickLogin() {
        cc.director.loadScene("GameScene")
    }

    onClickReturn() {
        cc.director.loadScene("MainScene")
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
