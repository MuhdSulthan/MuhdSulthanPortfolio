'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTerminal } from '@/hooks/useTerminal';
import Terminal from './Terminal';

interface TerminalProviderProps {
  children: React.ReactNode;
}

const TerminalProvider: React.FC<TerminalProviderProps> = ({ children }) => {
  const { isTerminalOpen, closeTerminal } = useTerminal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {children}
      {mounted && isTerminalOpen && createPortal(
        <Terminal isOpen={isTerminalOpen} onClose={closeTerminal} />,
        document.body
      )}
    </>
  );
};

export default TerminalProvider;
