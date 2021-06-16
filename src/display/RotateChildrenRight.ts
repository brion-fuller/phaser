import { GameObjectCache } from '../gameobjects';
import { GetChildIDsFromParent } from '../components/hierarchy';
import { IGameObject } from '../gameobjects/IGameObject';
import { SetDirtyWorldDisplayList } from '../components/dirty';

export function RotateChildrenRight <P extends IGameObject> (parent: P, total: number = 1): IGameObject | undefined
{
    const parentChildren = GetChildIDsFromParent(parent);

    let child;

    for (let i: number = 0; i < total; i++)
    {
        child = parentChildren.pop();

        parentChildren.unshift(child);
    }

    SetDirtyWorldDisplayList(parent.id);

    return GameObjectCache.get(child);
}
