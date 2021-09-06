import { HIERARCHY, HierarchyComponent } from './HierarchyComponent';

export function HasChildren (id: number): boolean
{
    return !!(HierarchyComponent.data[id][HIERARCHY.NUM_CHILDREN] > 0);
}