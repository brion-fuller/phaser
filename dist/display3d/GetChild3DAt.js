function GetChild3DAt(parent, index) {
    const children = parent.children;
    if (index < 0 || index > children.length) {
        throw new Error(`Index out of bounds: ${index}`);
    }
    return children[index];
}

export { GetChild3DAt };
