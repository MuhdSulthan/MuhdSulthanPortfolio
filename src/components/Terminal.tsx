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
      `Employer: IBM India Pvt. Ltd., Bengaluru`,
      `Location: Kerala, India`,
      `Timezone: ${person.location}`,
      `Email: ${person.email}`,
      `Languages: ${person.languages?.join(', ')}`,
    ],
    achievements: [
      '🏆 Key Engineering Achievements:',
      '',
      '• Architected microservice automation frameworks at IBM for US enterprise client',
      '• Diagnosed and resolved critical service regressions via structured RCA at IBM',
      '• Built RAAPD telemetry pipeline ingesting 5,000+ packets/sec with sub-sec DB latency',
      '• Engineered PQEncrypt backend on AWS EC2 with >99.9% uptime & post-quantum encryption',
      '• Shipped SecureBox cross-platform client with AES-256-GCM + Kyber-768 encryption',
      '• Automated pfSense routing across 4 subnets, cutting timeline reconstruction by 30%',
      '• Recovered evidence from 7+ devices using Magnet AXIOM & Cellebrite UFED 4PC',
    ],
    skills: [
      '🛡️ Technical Skills:',
      '',
      'Languages & Core CS:',
      '  • Python, Core Java, JavaScript/TypeScript',
      '  • SQL (PostgreSQL, MySQL)',
      '  • Bash/Shell, C/C++ (reading/fundamentals)',
      '  • OOD, Data Structures & Algorithms',
      '',
      'Distributed Systems & Cloud:',
      '  • Microservices Architecture, RESTful APIs',
      '  • AWS (EC2, S3, VPC)',
      '  • Docker, Kubernetes',
      '  • WebSockets, WebRTC',
      '  • CI/CD (GitHub Actions), Maven',
      '',
      'Reliability & Observability:',
      '  • Root Cause Analysis (RCA)',
      '  • Prometheus, Grafana, SLIs/SLOs',
      '  • Linux/UNIX (Ubuntu, RHEL)',
      '  • Load Testing (Locust)',
      '  • Playwright, Selenium, Appium',
      '',
      'Security & Cryptography:',
      '  • Post-Quantum Cryptography (NIST FIPS 203 ML-KEM)',
      '  • AES-256-GCM, TLS/HTTPS',
      '  • Wireshark, Scapy, pfSense Firewall',
      '  • Magnet AXIOM, Cellebrite UFED 4PC',
    ],
    certifications: [
      '📜 Certifications & Training:',
      '',
      '• Claude Certified Developer – Foundations | Anthropic (Oct 2026)',
      '• Certified Partner Specialist: Gemini Enterprise Agent Dev | Google (2026)',
      '• Microsoft Certified: Azure Security Engineer Associate AZ-500 (2026)',
      '• Certified API Security Analyst | APIsec University (2026)',
      '• Google Cybersecurity Professional Certificate | Google (2024)',
      '• TryHackMe Active Learner (Ongoing)',
      '',
      'Education:',
      '• B.Tech (Honours) CSE (Cyber Security) — CGPA: 8.7',
      '  Ilahia College of Engineering & Technology, 2022–2026',
    ],
    experience: [
      '💼 Work Experience:',
      '',
      'IBM India Pvt. Ltd. — Bengaluru (Jul 2026 – Present)',
      '├─ Role: Software Engineer – Microservices & Full Stack',
      '├─ Core Java, Python, REST APIs, Microservices, CI/CD, SQL, RCA, Playwright, Maven',
      '├─ Architected automation frameworks & integration test suites for US enterprise client',
      '├─ Structured Root Cause Analysis across logs, SQL latencies, and API traces',
      '└─ Integrated automated reliability checks into CI/CD (GitHub Actions)',
      '',
      'Kerala Police Academy — Thrissur (Jun 2024 – Jul 2024)',
      '├─ Role: Software & Security Intern',
      '├─ Python, pfSense Firewall, Wireshark, TCP/IP, Subnetting',
      '├─ Automated routing across 4 subnets via Python audit scripts',
      '└─ Engineered OOP forensic microservice, cutting timeline reconstruction by 30%',
      '',
      'Alibi Global Pvt. Ltd. (May 2024 – Jul 2024)',
      '├─ Role: Cyber Forensic Intern',
      '├─ Magnet AXIOM, Cellebrite UFED 4PC',
      '├─ Forensic analysis on 3 criminal case studies',
      '└─ Recovered data from 7+ devices with Cellebrite & AXIOM',
    ],
    projects: [
      '🚀 Engineering Projects:',
      '',
      '1. RAAPD — High-Throughput Telemetry & Anomaly Detection (2025)',
      '   ├─ Python, Flask, Docker, Kubernetes, PostgreSQL, Prometheus, Grafana, Scapy',
      '   ├─ 5,000+ packets/sec ingestion via Scapy with async worker queues',
      '   └─ Sub-second DB latency validated under Locust load tests',
      '',
      '2. PQEncrypt — Distributed Edge Messaging Backend (2025)',
      '   ├─ Node.js, AWS EC2, WebSockets, WebRTC, GitHub Actions CI/CD, MCP, liboqs',
      '   ├─ >99.9% uptime with zero-downtime CI/CD on AWS EC2',
      '   └─ NIST FIPS 203 ML-KEM post-quantum encryption + LLM/MCP diagnostics',
      '',
      '3. SecureBox — Cross-Platform Client & API Diagnostics (2024)',
      '   ├─ React Native, Android, AES-256-GCM, Kyber-768, REST APIs, LLM Automation',
      '   ├─ Hardware-backed AES-256-GCM + Kyber-768 encryption',
      '   └─ LLM-driven agentic test suites: zero memory leaks under stress',
      '',
      '4. pfSense Firewall Deployment & Network Security Lab (2024)',
      '   ├─ pfSense, Python, Suricata, Wireshark, VirtualBox',
      '   ├─ Automated 4-subnet routing, 25+ endpoints, 100% audit compliance',
      '   └─ Python forensic microservice cut timeline reconstruction by 30%',
    ],
    social: [
      '🌐 Find me online:',
      '',
      '• GitHub: https://github.com/MuhdSulthan',
      '• LinkedIn: https://www.linkedin.com/in/muhdsulthan/',
      '• TryHackMe: https://tryhackme.com/p/muhdsulthan1',
      '• Credly: https://www.credly.com/users/muhammad-sulthan-k-m.e56f63d8',
      '• Instagram: https://www.instagram.com/muhdzulthan',
      '• Portfolio: https://muhdsulthan.vercel.app/',
    ],
    help: [
      '📋 Available Commands:',
      '',
      '• whoami        - Display user information',
      '• achievements  - Show engineering achievements',
      '• skills        - List technical skills',
      '• certifications- Show certifications and education',
      '• experience    - Display work experience',
      '• projects      - Show engineering projects',
      '• social        - Display social media links',
      '• clear         - Clear terminal screen',
      '• exit          - Close terminal',
      '• help          - Show this help message',
      '',
      '🤖 AI Assistant:',
      '• ask [question] - Ask AI about expertise or engineering',
      '  Examples:',
      '    ask what is post-quantum cryptography',
      '    ask explain microservices',
      '    ask about your IBM experience',
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
          '  SULTHAN ENGINEERING TERMINAL ',
          '  AI-Powered Interactive Shell',
          '═══════════════════════════════════════════════════════════',
          '',
          'System: Ubuntu 22.04 LTS | IBM Cloud | AWS EC2',
          'User: sulthan@ibm-engineering-lab',
          'Status: ✓ Secure Connection Established',
          '',
          '🤖 AI Assistant: ONLINE',
          '   Mode: Smart Pattern Matching (No API required)',
          '   Capabilities: Expertise Q&A | Engineering & Security Knowledge',
          '',
          '📋 Quick Start:',
          '   • Type "help" for command list',
          '   • Ask questions naturally (e.g., "what is post-quantum cryptography?")',
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
