function CopyRectangleFrom(source, dest) {
    return dest.set(source.x, source.y, source.width, source.height);
}

export { CopyRectangleFrom };
