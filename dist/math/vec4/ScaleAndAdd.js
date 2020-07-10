import { Vec4 } from './Vec4.js';

function ScaleAndAdd(a, b, scalar, out = new Vec4()) {
    return out.set(a.x + b.x * scalar, a.y + b.y * scalar, a.z + b.z * scalar, a.w + b.w * scalar);
}

export { ScaleAndAdd };
