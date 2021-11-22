
import * as cc from 'cc';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = MapItem
 * DateTime = Sun Nov 21 2021 21:28:05 GMT+0800 (中国标准时间)
 * Author = QAQGaeBolg
 * FileBasename = MapItem.ts
 * FileBasenameNoExtension = MapItem
 * URL = db://assets/script/MapItem.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

export class TileSet {
    private mId: number = -1
    private resPath: string = null
    private tex: cc.Texture2D = null
 
    private gridW: number = 0
    private gridH: number = 0
    private row: number = 0
    private col: number = 0
}
 
@ccclass('MapItem')
export class MapItem extends cc.Component {
    protected mGridx: number = 0
    protected mGridy: number = 0
    protected mRow: number = 1
    protected mCol: number = 1
    private mCanPassOnLand: boolean
    private mCanPassOnAir: boolean
    private mCanPassOnOcean: boolean
    private mEditable: boolean
    private mIslock: boolean
    private mHasEvent: boolean

    constructor(
        mCanPassOnLand: boolean, 
        mCanPassOnAir: boolean, 
        mCanPassOnOcean: boolean, 
        mEditable: boolean, 
        mIslock: boolean, 
        mHasEvent: boolean) {
            super()
            this.mCanPassOnLand = mCanPassOnLand
            this.mCanPassOnAir = mCanPassOnAir
            this.mCanPassOnOcean = mCanPassOnOcean
            this.mEditable = mEditable
            this.mIslock = mIslock
            this.mHasEvent = mHasEvent
        }
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

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
