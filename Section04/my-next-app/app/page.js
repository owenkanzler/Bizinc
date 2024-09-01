// app/page.js
import fs from "fs";
import path from "path";

async function getItems() {
  const filePath = path.join(process.cwd(), "data", "items.json");

  const jsonData = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(jsonData);

  return items;
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
