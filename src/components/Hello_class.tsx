import * as React from "react"
import { getExclamationMarks, Props } from "./Hello_function"
import "./Hello.css"

export default class Hello extends React.Component<Props, object> {
    render() {
        const {name, enthusiasmLevel = 1} = this.props
        
        if (enthusiasmLevel <= 0) {
            throw new Error('Tou could be a little more enthusiastic. :D')
        }

        return (
            <div className = "hello">
                <div className = "greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        )
    }
}