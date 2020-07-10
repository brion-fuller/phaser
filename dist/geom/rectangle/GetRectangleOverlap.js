function GetRectangleOverlap(rectA, rectB) {
    return (rectA.x < rectB.right &&
        rectA.right > rectB.x &&
        rectA.y < rectB.bottom &&
        rectA.bottom > rectB.y);
}

export { GetRectangleOverlap };
