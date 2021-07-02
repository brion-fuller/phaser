import { IShaderConfig } from './IShaderConfig';

export interface IFXShaderConfig extends IShaderConfig
{
    timeUniform?: string;
    resolutionUniform?: string;
}
