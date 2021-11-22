
import * as cc from 'cc';
const { ccclass, property } = cc._decorator;

/**
 * Predefined variables
 * Name = MapActor
 * DateTime = Sun Nov 21 2021 21:52:27 GMT+0800 (中国标准时间)
 * Author = QAQGaeBolg
 * FileBasename = MapActor.ts
 * FileBasenameNoExtension = MapActor
 * URL = db://assets/script/MapActor.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('MapActor')
export class MapActor extends cc.Component {
    protected mActorId: number = 0
    protected mResPath: string = null
 
    protected mRoadGrids: Array<cc.Vec2> = [] // 路径
    protected mCurRoadIdx: number = 0
 
    protected mSpeed: number = 0 // 设置的行走速度, 跟x方向速度绝对值一样
    protected mSpeedX: number = 0 // 实时行走X速度
    protected mSpeedY: number = 0 // 实时行走Y速度
 
    protected mTestActor: boolean = false
    protected mIsKeepRoad: boolean = false
    protected mIsPauseWalk: boolean = false

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
