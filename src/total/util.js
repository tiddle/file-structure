export function totalSizeCalculator(fileList) {
    let totalSize = 0;

    if(fileList.length > 0) {
        totalSize = fileList.reduce((acc, curr) => {
            if(curr.type === 'folder') {
                acc += totalSizeCalculator(curr.children);
            } else {
                acc += curr.size;
            }
            return acc;
        }, 0)
    }

    return totalSize;

}


export function totalFileCount(fileList) {
    let fileCount = 0;

    if(fileList.length > 0) {
        fileCount = fileList.reduce((acc, curr) => {
            if(curr.type === 'folder') {
                acc += totalFileCount(curr.children);
            } else {
                acc++;
            }
            return acc;
        }, 0)
    }

    return fileCount;

}

