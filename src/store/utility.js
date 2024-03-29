export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const setCharAt = (str,index,chr) => {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}