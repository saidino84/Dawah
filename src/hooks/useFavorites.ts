import { useState, useEffect } from 'react';
import { UserNote } from '../types';

const FAVORITES_STORAGE_KEY = 'deedat_favorites_ids';
const NOTES_STORAGE_KEY = 'deedat_user_notes';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return stored ? JSON.parse(stored) : ['deedat-q1', 'deedat-q2'];
    } catch {
      return ['deedat-q1', 'deedat-q2'];
    }
  });

  const [notes, setNotes] = useState<Record<string, UserNote>>(() => {
    try {
      const stored = localStorage.getItem(NOTES_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.warn('Failed to persist favorites to localStorage', e);
    }
  }, [favoriteIds]);

  useEffect(() => {
    try {
      localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
      console.warn('Failed to persist notes to localStorage', e);
    }
  }, [notes]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favoriteIds.includes(id);

  const saveNote = (itemId: string, content: string) => {
    setNotes((prev) => ({
      ...prev,
      [itemId]: {
        itemId,
        content,
        updatedAt: new Date().toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }
    }));
  };

  const deleteNote = (itemId: string) => {
    setNotes((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    notes,
    saveNote,
    deleteNote,
    favoritesCount: favoriteIds.length
  };
}
