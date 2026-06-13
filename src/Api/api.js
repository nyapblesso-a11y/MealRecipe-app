
const STORAGE_KEY = "savor_recipes";

const DEFAULT_RECIPES = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and fresh basil on a crispy crust.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
    favorite: false,
  },
  {
    id: "2",
    name: "Avocado Toast",
    description: "Creamy avocado on toasted sourdough with chili flakes and lemon.",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400",
    favorite: false,
  },
  {
    id: "3",
    name: "Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    favorite: false,
  },
  {
    id: "4",
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons, and classic Caesar dressing.",
    image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400",
    favorite: false,
  },
];

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveToStorage(recipes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// Convert a File to a base64 data URL so it survives localStorage
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

// GET all recipes
export const fetchRecipes = async () => {
  const stored = loadFromStorage();
  if (stored) return stored;
  saveToStorage(DEFAULT_RECIPES);
  return DEFAULT_RECIPES;
};

// CREATE recipe
export const creatRecipeApi = async (data, isFile) => {
  const recipes = loadFromStorage() || DEFAULT_RECIPES;

  let imageValue = data.image;
  if (isFile && data.image instanceof File) {
    imageValue = await fileToDataUrl(data.image);
  }

  const newRecipe = {
    id: generateId(),
    name: data.name,
    description: data.description,
    image: imageValue || "",
    favorite: false,
  };

  const updated = [...recipes, newRecipe];
  saveToStorage(updated);
  return newRecipe;
};

// UPDATE
export const updateRecipeAPI = async (id, data) => {
  const recipes = loadFromStorage() || [];

  let imageValue = data.image;
  if (data.image instanceof File) {
    imageValue = await fileToDataUrl(data.image);
  }

  const updated = recipes.map((r) =>
    r.id === id
      ? { ...r, name: data.name, description: data.description, image: imageValue ?? r.image }
      : r
  );

  saveToStorage(updated);
  const updatedRecipe = updated.find((r) => r.id === id);
  return { update: updatedRecipe };
};

// DELETE
export const deleteRecipeApi = async (id) => {
  const recipes = loadFromStorage() || [];
  const updated = recipes.filter((r) => r.id !== id);
  saveToStorage(updated);
  return { deleted: id };
};

// TOGGLE FAVORITE
export const toggleFavoriteApi = async (id) => {
  const recipes = loadFromStorage() || [];
  const updated = recipes.map((r) =>
    r.id === id ? { ...r, favorite: !r.favorite } : r
  );
  saveToStorage(updated);
  const updatedRecipe = updated.find((r) => r.id === id);
  return { update: updatedRecipe };
};
