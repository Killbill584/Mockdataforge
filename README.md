# ⚙️ Mock Data Forge

A lightweight **Mock Data Generator** that helps developers create realistic JSON data for testing, UI development, and database seeding — without needing any real backend data.

Built using **HTML, CSS, and JavaScript (Vanilla JS)**.

---

## 🚀 Features

✅ Supports multiple data types:

* **Primitive**: `string`, `int`, `float`, `boolean`
* **Semantic**: `name`, `email`, `phone`, `date`
* **File URLs**: `image_url` (via [picsum.photos](https://picsum.photos))
* **Complex**: nested `object` and `array`

✅ Supports constraints:

* Min/Max for numbers
* Range for string length

✅ Clean UI:

* Input JSON schema
* Generate button
* Output JSON displayed in a styled box

---

## 🧩 Example Input Schema

```json
{
  "id": "uuid",
  "full_name": "name",
  "is_active": "boolean",
  "avatar": "image_url",
  "profile": {
    "type": "object",
    "schema": {
      "email": "email",
      "phone": "phone"
    }
  },
  "scores": {
    "type": "array",
    "items": { "type": "int", "min": 10, "max": 100 },
    "length": 3
  }
}
```

### 🧾 Example Output

```json
{
  "id": "a1b2-c3d4-e5f6",
  "full_name": "John Doe",
  "is_active": true,
  "avatar": "https://picsum.photos/240/210?random=45",
  "profile": {
    "email": "alexsmith@gmail.com",
    "phone": "9876543210"
  },
  "scores": [72, 34, 91]
}
```

---


