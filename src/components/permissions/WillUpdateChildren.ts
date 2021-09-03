import { GameObjectStore, PERMISSION } from '../../gameobjects/GameObjectStore';

export function WillUpdateChildren (id: number): boolean
{
    return Boolean(GameObjectStore.ui32[id][PERMISSION.WILL_UPDATE_CHILDREN]);
}
