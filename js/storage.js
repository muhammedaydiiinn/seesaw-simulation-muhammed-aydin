const STORAGE_KEY = "seesaw-simulation-state";

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadState() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (!savedState) {
    return null;
  }

  try {
    return JSON.parse(savedState);
  } catch (error) {
    console.error("Failed to parse saved state:", error);
    return null;
  }
}

export function clearSavedState() {
  localStorage.removeItem(STORAGE_KEY);
}