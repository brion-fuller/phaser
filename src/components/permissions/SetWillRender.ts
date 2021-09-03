import { GameObjectStore, PERMISSION } from '../../gameobjects/GameObjectStore';

export function SetWillRender (id: number, value: boolean): void
{
    GameObjectStore.ui8[id][PERMISSION.WILL_RENDER] = Number(value);
}
