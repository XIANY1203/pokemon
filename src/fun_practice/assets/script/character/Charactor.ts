
import * as cc from 'cc';
import { Select } from './Select';
const { ccclass, property } = cc._decorator;

export enum Direction {
    Up,
    Down,
    Left,
    Right
}
 
@ccclass('Charactor')
export class Charactor extends cc.Component {
    private up: boolean
    private down: boolean
    private left: boolean
    private right: boolean
    private speed: number
    private distance: number
    private direction: Direction

    start () {
        let pos: cc.Vec3 = new cc.Vec3(460, 300)
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
        let select = this.node.getChildByName("select").getComponent(Select)
        if (select !== null && (select.getDistance() > 0 || select.getDirection() !== null)) {
            return
        }
        switch(event.keyCode) {
            case cc.KeyCode.KEY_W: {
                if (this.changeSelect(Direction.Up)) {
                    return
                }
                this.up = true
                break
            }
            case cc.KeyCode.KEY_S: {
                if (this.changeSelect(Direction.Down)) {
                    return
                }
                this.down = true
                break
            }
            case cc.KeyCode.KEY_A: {
                if (this.changeSelect(Direction.Left)) {
                    return
                }
                this.left = true
                break
            }
            case cc.KeyCode.KEY_D: {
                if (this.changeSelect(Direction.Right)) {
                    return
                }
                this.right = true
                break
            }
        }
    }

    
    changeSelect(dir: Direction): boolean {
        let child = this.node.getChildByName("select")
        let select = child.getComponent(Select)
        if (select === null) {
            return false
        }
        let pos: cc.Vec3 = new cc.Vec3
        child.getPosition(pos)
        let x = Math.round(pos.x), y = Math.round(pos.y)
        switch(dir) {
            case Direction.Up: {
                if (x == 0 && y == 40) {
                    return false
                } else if (x == -40 && y == 0) {
                    select.setRotate(true)
                    select.setDirection(Direction.Up)
                    return true
                } else if (x == 40 && y == 0) {
                    select.setRotate(true)
                    select.setDirection(Direction.Up)
                    return true
                } else if (x == 0 && y == -40) {
                    select.setDirection(Direction.Up)
                    return true
                }
                break
            }
            case Direction.Down: {
                if (x == 0 && y == -40) {
                    return false
                } else if (x == -40 && y == 0) {
                    select.setRotate(true)
                    select.setDirection(Direction.Down)
                    return true
                } else if (x == 40 && y == 0) {
                    select.setRotate(true)
                    select.setDirection(Direction.Down)
                    return true
                } else if (x == 0 && y == 40) {
                    select.setDirection(Direction.Down)
                    return true
                }
                break        
            }
            case Direction.Left: {
                if (x == -40 && y == 0) {
                    return false
                } else if (x == 0 && y == -40) {
                    select.setRotate(true)
                    select.setDirection(Direction.Left)
                    return true
                } else if (x == 0 && y == 40) {
                    select.setRotate(true)
                    select.setDirection(Direction.Left)
                    return true
                } else if (x == 40 && y == 0) {
                    select.setDirection(Direction.Left)
                    return true
                }
                break
            }
            case Direction.Right: {
                if (x == 40 && y == 0) {
                    return false
                } else if (x == 0 && y == -40) {
                    select.setRotate(true)
                    select.setDirection(Direction.Right)
                    return true
                } else if (x == 0 && y == 40) {
                    select.setRotate(true)
                    select.setDirection(Direction.Right)
                    return true
                } else if (x == -40 && y == 0) {
                    select.setDirection(Direction.Right)
                    return true
                }
                break
            }
        }
    }
}

