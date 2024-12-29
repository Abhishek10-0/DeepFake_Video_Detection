import { initializeGames } from './games.js';
import { setupNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  initializeGames();
});