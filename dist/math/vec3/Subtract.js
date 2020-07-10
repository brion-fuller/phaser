import { Vec3 } from './Vec3.js';

function Subtract(a, b, out = new Vec3()) {
    return out.set(a.x - b.x, a.y - b.y, a.z - b.z);
}

export { Subtract };
