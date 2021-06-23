import { IRenderPass } from './IRenderPass';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { gl } from '../GL';

export class VertexBufferStack
{
    renderPass: IRenderPass;

    stack: IVertexBuffer[];
    // current: IVertexBuffer;
    default: IVertexBuffer;
    index: number;

    constructor (renderPass: IRenderPass)
    {
        this.renderPass = renderPass;
        this.stack = [];
    }

    get current (): IVertexBuffer
    {
        return this.stack[this.index];
    }

    add (buffer: IVertexBuffer): IVertexBuffer
    {
        this.index++;

        //  cursor already at the end of the stack, so we need to grow it
        if (this.index === this.stack.length)
        {
            this.stack.push(buffer);
        }
        else
        {
            this.stack[this.index] = buffer;
        }

        return buffer;
    }

    bindDefault (): void
    {
        this.index = 0;

        this.bind();
    }

    bind (buffer?: IVertexBuffer): void
    {
        if (buffer)
        {
            buffer.isBound = false;
        }
        else
        {
            buffer = this.current;
        }

        if (!buffer.isBound)
        {
            const indexBuffer = (buffer.indexed) ? buffer.indexBuffer : null;

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

            gl.bindBuffer(gl.ARRAY_BUFFER, buffer.vertexBuffer);

            buffer.isBound = true;
        }
    }

    pop (): void
    {
        // const stack = this.stack;

        // //  > 1 because index 0 contains the default, which we don't want to remove
        // if (stack.length > 1)
        // {
        //     stack.pop();
        // }

        // this.current = stack[ stack.length - 1 ];

        this.index--;

        this.bind();
    }

    set (buffer: IVertexBuffer): void
    {
        const entry = this.add(buffer);

        this.bind(entry);

        // this.current = entry;
    }

    setDefault (buffer: IVertexBuffer): void
    {
        //  The default entry always goes into index zero
        this.stack[0] = buffer;

        this.index = 0;

        // this.current = buffer;
        this.default = buffer;
    }
}
