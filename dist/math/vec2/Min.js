import { Vec2 } from './Vec2.js';

function Min(a, b, out = new Vec2()) {
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;
    return out.set(Math.min(ax, bx), Math.min(ay, by));
}

export { Min };
