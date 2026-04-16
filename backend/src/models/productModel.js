import pool from "../config/db.js";

export const getProducts = async () => {
  const result = await pool.query('SELECT * FROM products')
  return result.rows
}

export const fetchProductById = async (id) => {
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id])
  return result.rows[0]
}

export const insertProduct = async ({name, price, stock}) => {
  const result = await pool.query(
    'INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *',
    [name, price, stock]
  )
  return result.rows[0]
}

export const editProduct = async (id, {name, price, stock}) => {
  const result = await pool.query(
    'UPDATE products SET name = $1, price = $2, stock = $3 WHERE id = $4 RETURNING *',
    [name, price, stock, id]
  )
  return result.rows[0]
}

export const destroyProduct = async (id) => {
  const result = await pool.query('DELETE FROM products WHERE id = $1', [id])
  return result.rows[0]
}