const pool = require("../db/pool");

const getTodosByList = async (req, res) => {
  const {id} = req.params

  try {
    console.log("here")
    const result = await pool.query("SELECT * FROM get_todos_by_list($1);", [id]);

    if (!result.rows.length) return res.status(404).json({error: "Not found"});
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

const createTodo = async (req, res) => {
  const {name} = req.body;
  const {id} = req.params
  console.log(name, id)
  try {
    const result = await pool.query(
      "SELECT * FROM create_todo($1, $2);",
      [name, id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

const toggleTodo = async (req, res) => {
  const {id} = req.params

  try {
    const result = await pool.query(
      "SELECT * FROM toggle_todo($1)",
      [id]
    );
    if (!result.rows.length) return res.status(404).json({error: "Not found"});
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

const deleteTodo = async (req, res) => {
  const {id} = req.params
  try {
    const result = await pool.query("SELECT * FROM delete_todo($1)", [id]);
    if (!result.rows.length) return res.status(404).json({error: "Not found"});
    res.json({message: "Deleted"});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

module.exports = {
  getTodosByList,
  createTodo,
  toggleTodo,
  deleteTodo
};