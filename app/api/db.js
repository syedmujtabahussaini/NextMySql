import mysql from "mysql2/promise";

export async function main(query) {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "demotest",
    });
    const [rows] = await connection.execute(query);
    return rows;
  } catch (error) {
    throw new Error(`Error executing query:${error.message}`);
  }
}
