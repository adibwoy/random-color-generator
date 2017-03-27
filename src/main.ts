import {RandomColorGenerator} from "./random-color-generator";

export class MainApp {

    private _colorBackgroundElement: HTMLElement = document.getElementById("color-background");
    private _colorCodeElement: HTMLElement = document.getElementById("color-code");
    private _messageElement: HTMLElement = document.getElementById("message");

    constructor() {
        this.listenToSpaceBar();
        this.listenToClick();
        this.changeBackgroundColor();
    }

    public changeBackgroundColor(): void {
        let newColor: string = RandomColorGenerator.GenerateRandomColor();
        this._colorBackgroundElement.style.backgroundColor = newColor;
        this._colorCodeElement.innerText = newColor;
    }

    private listenToSpaceBar(): void {
        let self = this;
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                self.changeBackgroundColor();
            }
        }
    }

    private listenToClick(): void {
        let self = this;
        this._colorBackgroundElement.onclick = function(e){
            self.changeBackgroundColor();
        }
        this._messageElement.onclick = function(e){
            self.changeBackgroundColor();
        }
    }
}

new MainApp();