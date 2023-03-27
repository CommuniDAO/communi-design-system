export const getFields = (fields) => {
    return fields.map((item) => {
        const isArr = Object.prototype.toString.call(item) == '[object Array]';
        if (isArr) {
            const output = item.map(({ field, title, description }) => {
                return { ...field, title, description };
            });
            return output;
        }
        else {
            const { field, title, description } = item;
            return [{ ...field, title, description }];
        }
    });
};
