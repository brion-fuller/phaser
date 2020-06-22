import { Forward, Right, Up, Vec3, Vec3Callback } from '../../../math/vec3';

import { DIRTY_CONST } from '../../../gameobjects/DIRTY_CONST';
import { IGameObject3D } from '../../IGameObject3D';
import { Matrix4 } from '../../../math/mat4';
import { QuaternionCallback } from '../../../math/quaternion';

export class Transform3DComponent
{
    entity: IGameObject3D;

    local: Matrix4;
    world: Matrix4;

    position: Vec3Callback;
    scale: Vec3Callback;
    origin: Vec3Callback;
    rotation: QuaternionCallback;

    forward: Vec3;
    up: Vec3;
    right: Vec3;

    passthru: boolean = false;

    constructor (entity: IGameObject3D, x: number = 0, y: number = 0, z: number = 0)
    {
        this.entity = entity;

        this.local = new Matrix4();
        this.world = new Matrix4();

        this.position = new Vec3Callback(() => this.update(), x, y, z, true);
        this.scale = new Vec3Callback(() => this.update(), 1, 1, 1, true);
        this.origin = new Vec3Callback(() => this.update(), 0, 0, 0, true);
        this.rotation = new QuaternionCallback(() => this.update(), 0, 0, 0, 1, true);

        this.forward = Forward();
        this.up = Up();
        this.right = Right();
    }

    update (): void
    {

    }

    updateLocal (): void
    {
        this.entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);

        // UpdateLocalTransform(this);
    }

    updateWorld (): void
    {
        const entity = this.entity;

        entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);

        // UpdateWorldTransform(entity);

        if (entity.numChildren)
        {
            this.updateChildren();
        }
    }

    updateChildren (): void
    {
        //  Sweep all children - by this point our local and world transforms are correct
        const children = this.entity.children;

        for (let i = 0; i < children.length; i++)
        {
            const child = children[i];

            // child.transform.updateWorld();
        }
    }

    destroy (): void
    {
        this.position.destroy();
        this.scale.destroy();
        this.origin.destroy();
        this.rotation.destroy();

        this.entity = null;
        this.local = null;
        this.world = null;
        this.position = null;
        this.scale = null;
        this.origin = null;
        this.rotation = null;
    }
}