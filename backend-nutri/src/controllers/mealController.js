// src/controllers/mealController.js

import fetch from 'node-fetch'; // Usamos node-fetch para las solicitudes HTTP (import para ES Modules)

// *** CORRECCIÓN IMPORTANTE: BASE_URL correcta con protocolo HTTPS y sin endpoint específico ***
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Función auxiliar para manejar la obtención de datos y errores
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data from TheMealDB:", error);
        throw error;
    }
};

/**
 * @desc Obtiene una comida aleatoria de TheMealDB
 * @route GET /api/meals/random
 * @access Public
 */
const getRandomMeal = async (req, res) => {
    try {
        const data = await fetchData(`${BASE_URL}random.php`); // Usa BASE_URL + endpoint
        if (data.meals && data.meals.length > 0) {
            const meal = data.meals[0];
            const simplifiedMeal = {
                id: meal.idMeal,
                name: meal.strMeal,
                category: meal.strCategory,
                area: meal.strArea,
                instructions: meal.strInstructions,
                thumbnail: meal.strMealThumb,
                youtube: meal.strYoutube,
                source: meal.strSource,
                ingredients: []
            };

            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient && ingredient.trim() !== '') {
                    simplifiedMeal.ingredients.push({ ingredient, measure });
                }
            }
            res.status(200).json(simplifiedMeal);
        } else {
            res.status(404).json({ message: "No se encontró una comida aleatoria." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la comida aleatoria.", error: error.message });
    }
};

/**
 * @desc Busca comidas por nombre desde TheMealDB
 * @route GET /api/meals/search?name=Arrabiata
 * @access Public
 */
const searchMealsByName = async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ message: "Se requiere un parámetro 'name' para la búsqueda." });
    }
    try {
        const data = await fetchData(`${BASE_URL}search.php?s=${encodeURIComponent(name)}`); // Usa BASE_URL + endpoint + parámetro
        if (data.meals) {
            const simplifiedMeals = data.meals.map(meal => ({
                id: meal.idMeal,
                name: meal.strMeal,
                category: meal.strCategory,
                area: meal.strArea,
                thumbnail: meal.strMealThumb
            }));
            res.status(200).json(simplifiedMeals);
        } else {
            res.status(404).json({ message: `No se encontraron comidas con el nombre "${name}".` });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al buscar comidas por nombre.", error: error.message });
    }
};

// Exportar las funciones para ES Modules
export {
    getRandomMeal,
    searchMealsByName
};