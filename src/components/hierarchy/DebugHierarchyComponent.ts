import { GameObjectStore, HIERARCHY } from '../../gameobjects/GameObjectStore';

export function DebugHierarchyComponent (id: number): void
{
    const data = GameObjectStore.ui32[id];

    const world = data[HIERARCHY.WORLD];
    const parent = data[HIERARCHY.PARENT];
    const next = data[HIERARCHY.NEXT];
    const prev = data[HIERARCHY.PREV];

    console.group(`Entity ID: ${id}`);
    console.log(`Parent: ${parent} - World: ${world}`);
    console.log(`> next: ${next}      < prev: ${prev}`);

    const kids = data[HIERARCHY.NUM_CHILDREN];
    const first = data[HIERARCHY.FIRST];
    const last = data[HIERARCHY.LAST];

    if (kids > 0)
    {
        console.log(`first: ${first}`);
        console.log(`last: ${last}`);
        console.log(`numChildren: ${kids}`);
    }

    console.groupEnd();
}
