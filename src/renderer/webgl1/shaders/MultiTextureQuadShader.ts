import { GetMaxTextures } from '../../../config/maxtextures/GetMaxTextures';
import { IRenderPass } from '../renderpass/IRenderPass';
import { IShaderConfig } from './IShaderConfig';
import { MULTI_QUAD_FRAG } from '../glsl/MULTI_QUAD_FRAG';
import { Shader } from './Shader';

export class MultiTextureQuadShader extends Shader
{
    constructor (config: IShaderConfig = {})
    {
        config.fragmentShader = config?.fragmentShader || MULTI_QUAD_FRAG;

        super(config);
    }

    create (fragmentShaderSource: string, vertexShaderSource: string, uniforms: {}, attribs: {}): void
    {
        const maxTextures = GetMaxTextures();

        fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);

        super.create(fragmentShaderSource, vertexShaderSource, uniforms, attribs);
    }

    bind (renderPass: IRenderPass): boolean
    {
        this.uniforms.set('uTexture', renderPass.textures.textureIndex);

        return super.bind(renderPass);
    }
}
