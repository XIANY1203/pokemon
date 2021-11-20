import * as fs from "fs-extra"
import * as path from "path"

export function createMap(name: string, map: number[][]): void {
    const outDir = path.resolve(`$(__dirname)`, `./${name}.txt`)
    console.log(outDir)
    let buf: String[] = []
    
    fs.removeSync(outDir)
    fs.writeFile(outDir, buf.join("\n"))
}