const { v4:uuid } = require("uuid");
exports.Mutation = {
    addCategory: (parent, {input}, context) => {

        const { name } = input
        const newCategory = {
            id: uuid(),
            name: input
        }
    }
}