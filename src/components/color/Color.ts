import { ColorComponent } from './ColorComponent';

//  red, green, blue in the range 0-255
//  alpha in the range 0-1

export class Color
{
    private id: number;

    useColorMatrix: boolean = false;

    constructor (id: number, red: number = 255, green: number = 255, blue: number = 255, alpha: number = 1)
    {
        this.id = id;

        this.set(red, green, blue, alpha);
    }

    set (red: number, green: number, blue: number, alpha: number): void
    {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    //  16 element array (4x4)
    set colorMatrix (value: number[])
    {
        ColorComponent.colorMatrix[this.id].set(value);
    }

    get colorMatrix (): number[]
    {
        return ColorComponent.colorMatrix[this.id];
    }

    //  4 element array (vec4)
    set colorOffset (value: number[])
    {
        ColorComponent.colorOffset[this.id].set(value);
    }

    get colorOffset (): number[]
    {
        return ColorComponent.colorOffset[this.id];
    }

    //  All in the range 0-255 or 0x00-0xFF
    set red (value: number)
    {
        ColorComponent.red[this.id] = value / 255;
    }

    get red (): number
    {
        return ColorComponent.red[this.id] * 255;
    }

    set green (value: number)
    {
        ColorComponent.green[this.id] = value / 255;
    }

    get green (): number
    {
        return ColorComponent.green[this.id] * 255;
    }

    set blue (value: number)
    {
        ColorComponent.blue[this.id] = value / 255;
    }

    get blue (): number
    {
        return ColorComponent.blue[this.id] * 255;
    }

    set alpha (value: number)
    {
        ColorComponent.alpha[this.id] = value;
    }

    get alpha (): number
    {
        return ColorComponent.alpha[this.id];
    }
}
