import { IWebGLRenderer } from '../IWebGLRenderer';

export function BatchSingleQuad (renderer: IWebGLRenderer, x: number, y: number, width: number, height: number, u0: number, v0: number, u1: number, v1: number, textureIndex: number = 0, packedColor: number = 4294967295): void
{
    const shader = renderer.currentShader;
    const buffer = shader.buffer;

    const F32 = buffer.vertexViewF32;
    const U32 = buffer.vertexViewU32;

    const offset = shader.count * buffer.quadElementSize;

    //  top left
    F32[offset + 0] = x;
    F32[offset + 1] = y;
    F32[offset + 2] = u0;
    F32[offset + 3] = v1;
    F32[offset + 4] = textureIndex;
    U32[offset + 5] = packedColor;

    //  bottom left
    F32[offset + 6] = x;
    F32[offset + 7] = y + height;
    F32[offset + 8] = u0;
    F32[offset + 9] = v0;
    F32[offset + 10] = textureIndex;
    U32[offset + 11] = packedColor;

    //  bottom right
    F32[offset + 12] = x + width;
    F32[offset + 13] = y + height;
    F32[offset + 14] = u1;
    F32[offset + 15] = v0;
    F32[offset + 16] = textureIndex;
    U32[offset + 17] = packedColor;

    //  top right
    F32[offset + 18] = x + width;
    F32[offset + 19] = y;
    F32[offset + 20] = u1;
    F32[offset + 21] = v1;
    F32[offset + 22] = textureIndex;
    U32[offset + 23] = packedColor;

    shader.count++;
}
