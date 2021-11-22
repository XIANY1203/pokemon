
import * as cc from 'cc';
import { Direction } from './Charactor';
const { ccclass, property } = cc._decorator;

 
@ccclass('Canvas')
export class Canvas extends cc.Component {
    private up: boolean
    private down: boolean
    private left: boolean
    private right: boolean
    private speed: number
    private distance: number
    private direction: Direction

    start () {
        let pos: cc.Vec3 = new cc.Vec3(480, 320)
        this.node.setWorldPosition(pos)
    }

    onLoad() {
        this.up = false
        this.down = false
        this.left = false
        this.right = false
        this.speed = 240
        this.distance = 0
        this.direction = null
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyOn, this)
    }

    update(dt: number) {
        if (this.direction !== null) {
            let from: cc.Vec3 = new cc.Vec3(), to: cc.Vec3
            this.node.getWorldPosition(from)
            to = from
            let delta = Math.min(40 - this.distance, Math.ceil(this.speed * dt))
            switch(this.direction) {
                case Direction.Up: {
                    to.y += delta
                    break
                }
                case Direction.Down: {
                    to.y -= delta
                    break
                }
                case Direction.Left: {
                    to.x -= delta
                    break
                }
                case Direction.Right: {
                    to.x += delta
                    break
                }
            }
            this.distance += delta
            this.node.setWorldPosition(to)
            if (this.distance >= 40) {
                this.distance = 0
                this.direction = null
            }
        } else {
            if (this.up) {
                this.direction = Direction.Up
                this.distance = 0
            } else if (this.down) {
                this.direction = Direction.Down
                this.distance = 0
            } else if (this.left) {
                this.direction = Direction.Left
                this.distance = 0
            } else if (this.right) {
                this.direction = Direction.Right
                this.distance = 0
            }    
        }
    }

    onKeyOn(event) {
        switch(event.keyCode) {
            case cc.KeyCode.KEY_W: {
                this.up = false
                break
            }
            case cc.KeyCode.KEY_S: {
                this.down = false
                break
            }
            case cc.KeyCode.KEY_A: {
                this.left = false
                break
            }
            case cc.KeyCode.KEY_D: {
                this.right = false
            }
        }
    }

    onKeyDown(event) {
        switch(event.keyCode) {
            case cc.KeyCode.KEY_W: {
                this.up = true
                break
            }
            case cc.KeyCode.KEY_S: {
                this.down = true
                break
            }
            case cc.KeyCode.KEY_A: {
                this.left = true
                break
            }
            case cc.KeyCode.KEY_D: {
                this.right = true
                break
            }
        }
    }
}
