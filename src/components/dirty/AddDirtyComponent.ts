import { DirtyComponent } from './DirtyComponent';
import { GameObjectWorld } from '../../GameObjectWorld';
import { SetDirtyColor } from './SetDirtyColor';
import { addComponent } from 'bitecs';

export function AddDirtyComponent (id: number): void
{
    addComponent(GameObjectWorld, DirtyComponent, id);

    SetDirtyColor(id);
}
