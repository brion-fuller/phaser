import { IMatrix2D } from '../math/matrix2d/IMatrix2D';
import { IRectangle } from '../geom/rectangle/IRectangle';
import { IRenderer } from '../renderer/IRenderer';
import { IStaticWorld } from '../world/IStaticWorld';
import { Matrix4 } from '../math/mat4/Matrix4';
export interface IBaseCamera {
    world: IStaticWorld;
    matrix: Matrix4;
    renderer: IRenderer;
    type: string;
    width: number;
    height: number;
    bounds: IRectangle;
    dirtyRender: boolean;
    worldTransform: IMatrix2D;
    reset(): void;
    destroy(): void;
}
//# sourceMappingURL=IBaseCamera.d.ts.map