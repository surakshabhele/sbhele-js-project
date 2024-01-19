import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import _, { each } from "lodash";

let data = JSON.parse(fs.readFileSync("./todo.json"));

const todos = () => {
  //   const jsData = JSON.stringify(data);

  return {
    getAll: () => {
      data = JSON.parse(fs.readFileSync("./todo.json"));
      return data;
    },
    add: (title, description) => {
      data.push({
        id: uuidv4(),
        title,
        description,
      });

      fs.writeFileSync("./todo.json", JSON.stringify(data));
    },

    removeById: (id) => {
      const newData = _.filter(data, function (target) {
        return target.id != id;
      });

      // data.splice(0, data.length);
      fs.writeFileSync("./todo.json", JSON.stringify(newData));
    },

    findById: (id) => {
      const foundTask = _.find(data, function (target) {
        return target.id == id;
      });
      return foundTask;

      // console.log("found task==",foundTask)
      // res.status(200).json({ data: foundTask });
    },
    updateById: (id, descNewData) => {
      const newData = _.filter(data, function (target) {
        return target.id === id ? (target.description = descNewData) : data;
      });
      // console.log("newData is", newData);
      fs.writeFileSync("./todo.json", JSON.stringify(newData));
      data = JSON.parse(fs.readFileSync("./todo.json"));
      return data;
    },
  };
};

export default todos();
