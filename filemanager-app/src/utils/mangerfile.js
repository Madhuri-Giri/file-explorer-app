export function addNode(tree, path, newNode){
    if(path.length === 1 && tree.name === path[0]){
        return {...tree, files: [...tree.files, newNode]};
    }
    return {
        ...tree,
        files: tree.files.map((child) =>
        child.name === path[1] ? addNode(child, path.slice(1), newNode) : child
        ),
    }
}

export function deleteNode(tree, path){
    if(path.length <= 1) return tree;

    const [root, target] = path;

    return {
        ...tree,
        files: tree.files.filter((c)=>c.name !== target),
    }
}