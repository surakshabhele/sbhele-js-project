import todosService from "../../../services/todos.service";
import todos from "../../../services/todos.service";

export default function userHandler(req, res) {
  const {
    query: { id },
    body: { description },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      const todo = todos.findById(id);
      res.status(200).json({ data: todo });
      break;
    case "PUT":
      const todo2 = todos.updateById(id, description);
      res.status(200).json({ data: todo2 });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
