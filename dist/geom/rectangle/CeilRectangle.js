function CeilRectangle(rect) {
    rect.x = Math.ceil(rect.x);
    rect.y = Math.ceil(rect.y);
    rect.width = Math.ceil(rect.width);
    rect.height = Math.ceil(rect.height);
    return rect;
}

export { CeilRectangle };
