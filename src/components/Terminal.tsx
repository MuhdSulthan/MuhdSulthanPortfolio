'use client';

import React, { useState, useEffect, useRef } from 'react';
import { person } from '@/resources/content';
import { getAIResponse, generateFallbackResponse } from '@/utils/aiKnowledgeBase';
import { getBrowserAIResponse, preloadAI, getAIStatus } from '@/utils/browserAI';
import styles from './Terminal.module.scss';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Command {
  input: string;
  output: string[];
  timestamp: string;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lastCommandTime, setLastCommandTime] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const cybersecurityCommands = {
    whoami: [
      `${person.name}`,
      `Role: ${person.role}`,
      `Location: Kerala, India`,
      `Timezone: ${person.location}`,
      `Email: ${person.email}`,
      `Languages: ${person.languages?.join(', ')}`,
    ],
    achievements: [
      '🏆 Cybersecurity Achievements:',
      '',
      '• Deployed pfSense firewall processing 100+ packets/sec',
      '• Analyzed 3 criminal cases using digital forensics',
      '• Recovered evidence from 7+ devices with Magnet AXIOM',
      '• Configured Suricata IDS for threat detection',
      '• Reduced false positive alerts by 50%',
      '• Zero security incidents during internship period',
    ],
    skills: [
      '🛡️ Cybersecurity Skills:',
      '',
      'Digital Forensics:',
      '  • Magnet AXIOM',
      '  • Cellebrite UFED 4PC',
      '  • True Imager',
      '',
      'Network Security:',
      '  • pfSense Firewall',
      '  • Suricata IDS/IPS',
      '  • Network Analysis',
      '',
      'Programming:',
      '  • Python',
      '  • JavaScript/TypeScript',
      '  • Bash/PowerShell',
      '',
      'Virtualization:',
      '  • VMware',
      '  • Virtual Lab Setup',
      '  • Security Testing',
    ],
    certifications: [
      '📜 Certifications & Training:',
      '',
      '• Google Cybersecurity Professional Certificate (2024)',
      '• TryHackMe Active Learner (Ongoing)',
      '• Digital Forensics Practitioner (2024)',
      '• B.Tech CSE (Cyber Security) - In Progress',
    ],
    experience: [
      '💼 Work Experience:',
      '',
      'Kerala Police (June-July 2025)',
      '├─ Role: Cyber Security Intern',
      '├─ pfSense firewall deployment',
      '└─ Cyber forensic tools training',
      '',
      'Alibi Global Pvt.Ltd. (May-July 2024)',
      '├─ Role: Cyber Forensic Intern',
      '├─ Criminal case analysis',
      '└─ Digital evidence recovery',
    ],
    projects: [
      '🚀 Featured Projects:',
      '',
      '1. pfSense Firewall Deployment',
      '   └─ Network security lab with 100+ packet/sec monitoring',
      '',
      '2. Digital Forensics Case Analysis',
      '   └─ 3 criminal cases, 7+ devices analyzed',
      '',
      '3. Cybersecurity Virtual Lab',
      '   └─ Complete testing environment with multiple VMs',
    ],
    social: [
      '🌐 Find me online:',
      '',
      '• GitHub: https://github.com/MuhdSulthan',
      '• LinkedIn: https://www.linkedin.com/in/muhdsulthan/',
      '• TryHackMe: https://tryhackme.com/p/muhdsulthan1',
      '• Credly: https://www.credly.com/users/muhdsulthan',
      '• Instagram: https://www.instagram.com/muhdzulthan',
    ],
    help: [
      '📋 Available Commands:',
      '',
      '• whoami        - Display user information',
      '• achievements  - Show cybersecurity achievements',
      '• skills        - List technical skills',
      '• certifications- Show certifications and training',
      '• experience    - Display work experience',
      '• projects      - Show featured projects',
      '• social        - Display social media links',
      '• clear         - Clear terminal screen',
      '• exit          - Close terminal',
      '• help          - Show this help message',
      '',
      '🤖 AI Assistant:',
      '• ask [question] - Ask AI about expertise or cybersecurity',
      '  Examples:',
      '    ask what is digital forensics',
      '    ask explain firewall',
      '    ask about your experience',
      '',
      'Or simply type your question naturally!',
      '',
      'Tip: Use ↑/↓ arrows to navigate command history',
      'Press Ctrl+` to toggle terminal',
    ],
  };

  const executeCommand = async (input: string) => {
    // Security: Rate limiting to prevent command spam
    const now = Date.now();
    if (now - lastCommandTime < 100) { // 100ms cooldown
      return;
    }
    setLastCommandTime(now);
    
    if (isProcessing) {
      return; // Prevent multiple simultaneous queries
    }

    // Security: Sanitize input to prevent XSS
    const sanitizedInput = input.trim().replace(/[<>\"'&]/g, '');
    const cmd = sanitizedInput.toLowerCase();
    const timestamp = new Date().toLocaleTimeString();
    
    let output: string[] = [];

    // Security: Limit input length to prevent DoS
    if (sanitizedInput.length > 100) {
      output = ['Error: Command too long (max 100 characters)'];
      const newCommand: Command = {
        input: sanitizedInput.substring(0, 20) + '...',
        output,
        timestamp,
      };
      setCommands(prev => [...prev, newCommand]);
      return;
    }

    if (cmd === 'clear') {
      setCommands([]);
      return;
    }

    if (cmd === 'exit') {
      onClose();
      return;
    }

    if (cmd in cybersecurityCommands) {
      output = cybersecurityCommands[cmd as keyof typeof cybersecurityCommands];
    } else if (cmd === '') {
      output = [];
    } else {
      // Try AI assistant for natural language queries
      setIsProcessing(true);
      
      try {
        let aiResponse: string[] | null = null;
        
        // Check if it's an "ask" command
        const question = cmd.startsWith('ask ') ? sanitizedInput.substring(4).trim() : sanitizedInput;
        
        // Use browser-based AI for intelligent responses
        aiResponse = await getBrowserAIResponse(question);
        
        if (aiResponse) {
          output = aiResponse;
        } else {
          output = [
            `Command not found: ${sanitizedInput}`,
            '',
            '💡 Tip: Try asking a question naturally, like:',
            '  "what is digital forensics?"',
            '  "tell me about firewalls"',
            '  "explain your experience"',
            '',
            'Or type "help" for available commands.',
          ];
        }
      } catch (error) {
        console.error('AI processing error:', error);
        output = [
          '⚠️ Error processing your question',
          '',
          'Please try again or use standard commands.',
          'Type "help" to see available commands.',
        ];
      } finally {
        setIsProcessing(false);
      }
    }

    const newCommand: Command = {
      input: sanitizedInput,
      output,
      timestamp,
    };

    // Security: Limit command history to prevent memory exhaustion
    setCommands(prev => {
      const newCommands = [...prev, newCommand];
      return newCommands.length > 50 ? newCommands.slice(-50) : newCommands;
    });
    setCommandHistory(prev => {
      const newHistory = [...prev, sanitizedInput];
      return newHistory.length > 20 ? newHistory.slice(-20) : newHistory;
    });
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!isProcessing) {
        executeCommand(currentInput);
        setCurrentInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    if (isOpen && commands.length === 0) {
      // Preload AI model in background
      preloadAI();
      
      // Show welcome message when terminal opens
      const welcomeCommand: Command = {
        input: '',
        output: [
          '═══════════════════════════════════════════════════════════',
          '  SULTHAN CYBERSECURITY TERMINAL ',
          '  AI-Powered Interactive Shell',
          '═══════════════════════════════════════════════════════════',
          '',
          'System: Ubuntu 22.04 LTS | Kernel: 5.15.0-ai',
          'User: sulthan@cybersec-lab',
          'Status: ✓ Secure Connection Established',
          '',
          '🤖 AI Assistant: ONLINE',
          '   Mode: Smart Pattern Matching (No API required)',
          '   Capabilities: Expertise Q&A | Cybersecurity Knowledge',
          '',
          '📋 Quick Start:',
          '   • Type "help" for command list',
          '   • Ask questions naturally (e.g., "what is digital forensics?")',
          '   • Use ↑/↓ for command history',
          '',
          '⚡ Ready for queries. Type your command below.',
          '═══════════════════════════════════════════════════════════',
        ],
        timestamp: new Date().toLocaleTimeString(),
      };
      setCommands([welcomeCommand]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.terminalOverlay}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalTitle}>
            <span className={styles.terminalIcon}>🤖</span>
            Sulthan@ai-cybersec-terminal
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className={styles.terminalBody} ref={terminalRef}>
          {commands.map((command, index) => (
            <div key={index} className={styles.commandBlock}>
              {command.input && (
                <div className={styles.commandInput}>
                  <span className={styles.prompt}>sulthan@cybersec:~$</span>
                  <span className={styles.command}>{command.input}</span>
                  <span className={styles.timestamp}>[{command.timestamp}]</span>
                </div>
              )}
              {command.output.map((line, lineIndex) => (
                <div key={lineIndex} className={styles.commandOutput}>
                  {line}
                </div>
              ))}
            </div>
          ))}
          
          <div className={styles.inputLine}>
            <span className={styles.prompt}>sulthan@cybersec:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => {
                // Security: Limit input length and sanitize
                const value = e.target.value;
                if (value.length <= 100) {
                  setCurrentInput(value);
                }
              }}
              onKeyDown={handleKeyDown}
              className={styles.terminalInput}
              autoComplete="off"
              spellCheck="false"
              maxLength={100}
              disabled={isProcessing}
              placeholder={isProcessing ? 'Processing...' : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
