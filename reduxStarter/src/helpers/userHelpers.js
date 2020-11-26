export const loadUserData = (result, entry) => {
    const composedEntry = {
        id:entry[0],
        fname: entry[1].fname,
        lname: entry[1].lname
    };
    result.push(composedEntry);
    return result;
};