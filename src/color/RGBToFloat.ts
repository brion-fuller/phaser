export function RGBToFloat (red: number, green: number, blue: number): number
{
    return red << 16 | green << 8 | blue;
}
