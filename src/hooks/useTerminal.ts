'use client';

import { useState, useEffect } from 'react';

// Create a global state to avoid multiple instances
let globalTerminalState = {
  isOpen: false,
  listeners: new Set<(isOpen: boolean) => void>()
};

const updateGlobalState = (newState: boolean) => {
  globalTerminalState.isOpen = newState;
  globalTerminalState.listeners.forEach(listener => listener(newState));
};

export const useTerminal = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(globalTerminalState.isOpen);

  useEffect(() => {
    // Add this component to listeners
    globalTerminalState.listeners.add(setIsTerminalOpen);
    
    // Sync with global state
    setIsTerminalOpen(globalTerminalState.isOpen);

    // Cleanup
    return () => {
      globalTerminalState.listeners.delete(setIsTerminalOpen);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Ctrl+` (backtick)
      if (event.ctrlKey && event.key === '`') {
        event.preventDefault();
        updateGlobalState(!globalTerminalState.isOpen);
      }
      
      // Close terminal on Escape key
      if (event.key === 'Escape' && globalTerminalState.isOpen) {
        updateGlobalState(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openTerminal = () => updateGlobalState(true);
  const closeTerminal = () => updateGlobalState(false);
  const toggleTerminal = () => updateGlobalState(!globalTerminalState.isOpen);

  return {
    isTerminalOpen,
    openTerminal,
    closeTerminal,
    toggleTerminal,
  };
};
