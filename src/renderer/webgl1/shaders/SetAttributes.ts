import { CurrentVertexBuffer } from '../renderpass/CurrentVertexBuffer';
import { IRenderPass } from '../renderpass/IRenderPass';
import { IShader } from './IShader';
import { gl } from '../GL';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SetAttributes <T extends IShader> (shader: T, renderPass: IRenderPass): void
{
    if (shader.program)
    {
        //  stride = vertexByteSize
        const stride = CurrentVertexBuffer().vertexByteSize;

        shader.attributes.forEach(attrib =>
        {
            gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
        });
    }
}
