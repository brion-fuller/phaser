import { DIRTY, GameObjectStore } from '../../gameobjects/GameObjectStore';

export function ClearDirtyChildCache (id: number): void
{
    GameObjectStore.ui8[id][DIRTY.CHILD_CACHE] = 0;
}
