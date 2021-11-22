import { MapItem } from "./MapItem"
import * as cc from "cc"

export class Tile extends MapItem {
    private mSpr: cc.Sprite = null
    private mId: number = 0
    private mTileSetId: number = 0
    private mIdx: number = 0
}

export class MapBuilding extends MapItem {
    protected mId: number = 0;
    protected mType: number = 0;
    protected mResType: number = 0; // 0 image, 1 spine
    protected mResPath: string = null;
    protected mDir: number = 0;
    protected mReverse: boolean = false;
}

export class MapDataItem extends MapItem {
    private data: any = null;
}