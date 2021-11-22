
import * as cc from 'cc';
import { Direction } from './Charactor';
const { ccclass, property } = cc._decorator;
 
@ccclass('Select')
export class Select extends cc.Component {
    private rotate: boolean
    private speed: number
    private direction: Direction
    private distance: number

    public getRotate(): boolean {
        return this.rotate
    }

    public setRotate(rotate: boolean): void {
        this.rotate = rotate
    }

    public getDistance(): number {
        return this.distance
    }

    public getDirection(): Direction | null {
        return this.direction
    }

    public setDirection(direction: Direction): void {
        this.direction = direction
    }

    start () {
        let pos = new cc.Vec3(0, 40)
        this.node.setPosition(pos)
    }

    onLoad() {
        this.rotate = false
        this.speed = 800
        this.direction = null
        this.distance = 0
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyOn, this)
    }

    onKeyDown(event) {
        switch(event.keyCode) {
            case cc.KeyCode.KEY_K: {
                break
            }
            case cc.KeyCode.KEY_L: {
                break
            }
        }
    }

    onKeyOn() {

    }

    update(dt: number) {
        if (this.direction !== null) {
            let from: cc.Vec3 = new cc.Vec3(), to: cc.Vec3
            this.node.getWorldPosition(from)
            to = from
            let delta = Math.min(Math.ceil(dt * this.speed), (this.rotate ? 40 - this.distance : 80 - this.distance))
            switch(this.direction) {
                case Direction.Up: {
                    if (this.rotate) {
                        to.x += (this.node.getPosition().x < 0) ? delta : -delta
                    } else {
                        to.y += delta
                    }
                    break
                }
                case Direction.Down: {
                    if (this.rotate) {
                        to.x += (this.node.getPosition().x < 0) ? delta : -delta
                    } else {
                        to.y -= delta
                    }
                    break
                }
                case Direction.Left: {
                    if (this.rotate) {
                        to.y += (this.node.getPosition().y < 0) ? delta : -delta
                    } else {
                        to.x -= delta
                    }
                    break
                }
                case Direction.Right: {
                    if (this.rotate) {
                        to.y += (this.node.getPosition().y < 0) ? delta : -delta
                    } else {
                        to.x += delta
                    }
                    break
                }
            }
            this.distance += delta
            this.node.setWorldPosition(to)
            if (this.rotate && this.distance == 40) {
                this.rotate = false
            }
            if (this.distance >= 80) {
                this.distance = 0
                this.direction = null
            }
        }
    }
}
