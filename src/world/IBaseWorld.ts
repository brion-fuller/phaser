import { Clock } from '../time/Clock';
import { IBaseCamera } from '../camera/IBaseCamera';
import { IGameObject } from '../gameobjects/IGameObject';
import { IScene } from '../scenes/IScene';
import { ISceneRenderData } from '../scenes/ISceneRenderData';
import { IWorldPlugin } from './IWorldPlugin';
import { IWorldPluginConstructor } from './IWorldPluginConstructor';
import { IWorldRenderData } from './IWorldRenderData';
import { SearchEntry } from '../display/DepthFirstSearchRecursiveNested';

export interface IBaseWorld extends IGameObject
{
    scene: IScene;
    clock: Clock;
    camera: IBaseCamera;
    renderData: IWorldRenderData;
    forceRefresh: boolean;
    plugins: Map<string, IWorldPlugin>;
    addPlugin (...plugins: IWorldPluginConstructor[]): this;
    getPlugin (key: string): IWorldPlugin;
    removePlugin (key: string): this;
    depthFirstSearch (parent: IGameObject, output?: SearchEntry[]): SearchEntry[];
    calculateTotal (entry: SearchEntry, renderData: IWorldRenderData): void;
    updateCachedLayers (): void;
    hasDirtyChildren (parent: SearchEntry): boolean;
    buildRenderList (renderData: IWorldRenderData): void;
    sceneRender (sceneRenderData: ISceneRenderData): void;
    shutdown (): void;
}
