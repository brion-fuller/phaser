import { DepthFirstSearchFromParentID } from '../components/hierarchy';
import { GameObjectCache } from '../gameobjects';
import { IGameObject } from '../gameobjects/IGameObject';

//  Returns all children of the parent, no matter what depth they go to, using an iterative search.
//  Does NOT include the parent in the results.

export function DepthFirstSearch <P extends IGameObject> (parent: P): IGameObject[]
{
    const children = DepthFirstSearchFromParentID(parent.id);

    const output: IGameObject[] = children.map(id => GameObjectCache.get(id));

    return output;

    /*
    let stack: IGameObject[] = [ parent ];
    const output: IGameObject[] = [];

    while (stack.length > 0)
    {
        const node = stack.shift();

        output.push(node);

        if (node.getNumChildren() > 0)
        {
            stack = stack.concat(node.getChildren());
        }
    }

    //  Remove the parent from the results
    output.shift();

    return output.reverse();
    */
}
