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
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setPortalElement(document.body);
  }, []);

  return (
    <>
      {children}
      {mounted && isTerminalOpen && portalElement && createPortal(
        <Terminal isOpen={isTerminalOpen} onClose={closeTerminal} />,
        portalElement
      )}
    </>
  );
};

export default TerminalProvider;
