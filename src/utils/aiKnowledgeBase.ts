// AI Knowledge Base for Terminal
// This contains structured information about expertise and general cybersecurity knowledge

export interface KnowledgeEntry {
  keywords: string[];
  response: string[];
  category: 'expertise' | 'cybersecurity' | 'general';
}

export const knowledgeBase: KnowledgeEntry[] = [
  // Expertise-related entries
  {
    keywords: ['digital forensics', 'forensics', 'investigation', 'evidence'],
    category: 'expertise',
    response: [
      '🔍 Digital Forensics Expertise:',
      '',
      'I specialize in digital forensics with hands-on experience in:',
      '• Magnet AXIOM - Advanced digital investigation platform',
      '• Cellebrite UFED 4PC - Mobile device forensics',
      '• True Imager - Forensic imaging and data acquisition',
      '',
      'Experience:',
      '✓ Analyzed 3 criminal cases at Alibi Global Pvt.Ltd.',
      '✓ Recovered evidence from 7+ devices',
      '✓ Expertise in mobile, computer, and network forensics',
      '',
      'Type "projects" to see forensic case studies.',
    ],
  },
  {
    keywords: ['firewall', 'pfsense', 'network security', 'ids', 'ips', 'suricata'],
    category: 'expertise',
    response: [
      '🛡️ Network Security Expertise:',
      '',
      'Firewall & IDS/IPS Implementation:',
      '• pfSense firewall deployment (100+ packets/sec)',
      '• Suricata IDS/IPS configuration',
      '• Network traffic analysis and monitoring',
      '• Reduced false positive alerts by 50%',
      '',
      'Skills:',
      '✓ Firewall rule configuration',
      '✓ Intrusion detection and prevention',
      '✓ Network packet analysis',
      '✓ Security policy implementation',
      '',
      'Deployed at Kerala Police Cyber Security Internship.',
    ],
  },
  {
    keywords: ['python', 'programming', 'scripting', 'automation', 'code'],
    category: 'expertise',
    response: [
      '💻 Programming & Automation:',
      '',
      'Languages & Tools:',
      '• Python - Security automation, scripting',
      '• JavaScript/TypeScript - Web development',
      '• Bash/PowerShell - System automation',
      '',
      'Applications in Cybersecurity:',
      '✓ Automated security scanning scripts',
      '✓ Log analysis and parsing tools',
      '✓ Custom forensic data extraction',
      '✓ Network monitoring automation',
      '',
      'Type "projects" to see coding projects.',
    ],
  },
  {
    keywords: ['internship', 'kerala police', 'alibi', 'work experience', 'job'],
    category: 'expertise',
    response: [
      '💼 Professional Experience:',
      '',
      '1. Kerala Police Cyber Security Internship (June-July 2025)',
      '   • pfSense firewall deployment and configuration',
      '   • Network security monitoring',
      '   • Cyber forensic tools training',
      '   • Zero security incidents during tenure',
      '',
      '2. Alibi Global Pvt.Ltd. (May-July 2024)',
      '   • Cyber Forensic Intern',
      '   • Analyzed 3 criminal cases',
      '   • Digital evidence recovery from 7+ devices',
      '   • Mobile and computer forensics',
      '',
      'Type "achievements" for detailed accomplishments.',
    ],
  },
  {
    keywords: ['certification', 'training', 'google', 'tryhackme', 'learning'],
    category: 'expertise',
    response: [
      '📜 Certifications & Continuous Learning:',
      '',
      'Completed:',
      '✓ Google Cybersecurity Professional Certificate (2024)',
      '✓ Digital Forensics Practitioner (2024)',
      '',
      'Ongoing:',
      '⚡ TryHackMe Active Learner',
      '⚡ B.Tech CSE (Cyber Security)',
      '',
      'Focus Areas:',
      '• Network security and penetration testing',
      '• Digital forensics and incident response',
      '• Security operations and threat hunting',
      '',
      'Visit my Credly profile for verified badges!',
    ],
  },

  // Cybersecurity general knowledge
  {
    keywords: ['what is firewall', 'firewall basics', 'explain firewall'],
    category: 'cybersecurity',
    response: [
      '🔥 Firewall Basics:',
      '',
      'A firewall is a network security device that monitors and controls',
      'incoming and outgoing network traffic based on security rules.',
      '',
      'Types:',
      '• Packet-filtering firewalls',
      '• Stateful inspection firewalls',
      '• Proxy firewalls',
      '• Next-generation firewalls (NGFW)',
      '',
      'Key Functions:',
      '✓ Block unauthorized access',
      '✓ Filter malicious traffic',
      '✓ Monitor network activity',
      '✓ Enforce security policies',
    ],
  },
  {
    keywords: ['what is ids', 'intrusion detection', 'explain ids', 'ips'],
    category: 'cybersecurity',
    response: [
      '🚨 Intrusion Detection System (IDS):',
      '',
      'IDS monitors network traffic for suspicious activity and alerts',
      'administrators when potential threats are detected.',
      '',
      'IDS vs IPS:',
      '• IDS - Detects and alerts (passive)',
      '• IPS - Detects and prevents (active)',
      '',
      'Detection Methods:',
      '✓ Signature-based detection',
      '✓ Anomaly-based detection',
      '✓ Hybrid approaches',
      '',
      'Popular Tools: Suricata, Snort, Zeek',
    ],
  },
  {
    keywords: ['malware', 'virus', 'trojan', 'ransomware', 'types of malware'],
    category: 'cybersecurity',
    response: [
      '🦠 Malware Types:',
      '',
      '1. Virus - Self-replicating code that attaches to files',
      '2. Worm - Standalone malware that spreads automatically',
      '3. Trojan - Disguised as legitimate software',
      '4. Ransomware - Encrypts data and demands payment',
      '5. Spyware - Secretly monitors user activity',
      '6. Rootkit - Hides malicious activity from detection',
      '',
      'Protection:',
      '✓ Keep software updated',
      '✓ Use antivirus/anti-malware',
      '✓ Practice safe browsing',
      '✓ Regular backups',
    ],
  },
  {
    keywords: ['encryption', 'cryptography', 'aes', 'rsa', 'hash'],
    category: 'cybersecurity',
    response: [
      '🔐 Encryption & Cryptography:',
      '',
      'Symmetric Encryption (same key):',
      '• AES (Advanced Encryption Standard)',
      '• DES, 3DES (older, less secure)',
      '',
      'Asymmetric Encryption (public/private key):',
      '• RSA (Rivest-Shamir-Adleman)',
      '• ECC (Elliptic Curve Cryptography)',
      '',
      'Hashing (one-way):',
      '• SHA-256, SHA-3',
      '• MD5 (deprecated, insecure)',
      '',
      'Use Cases: Data protection, authentication, digital signatures',
    ],
  },
  {
    keywords: ['phishing', 'social engineering', 'attack types'],
    category: 'cybersecurity',
    response: [
      '🎣 Social Engineering & Phishing:',
      '',
      'Social Engineering: Manipulating people to divulge confidential info',
      '',
      'Common Attacks:',
      '• Phishing - Fraudulent emails/messages',
      '• Spear Phishing - Targeted attacks',
      '• Whaling - Targeting high-profile individuals',
      '• Vishing - Voice phishing (phone calls)',
      '• Smishing - SMS phishing',
      '',
      'Prevention:',
      '✓ Verify sender identity',
      '✓ Check URLs before clicking',
      '✓ Enable MFA (Multi-Factor Authentication)',
      '✓ Security awareness training',
    ],
  },
  {
    keywords: ['penetration testing', 'pentesting', 'ethical hacking', 'red team'],
    category: 'cybersecurity',
    response: [
      '🎯 Penetration Testing:',
      '',
      'Authorized simulated cyber attack to evaluate security.',
      '',
      'Phases:',
      '1. Reconnaissance - Information gathering',
      '2. Scanning - Identifying vulnerabilities',
      '3. Exploitation - Attempting to breach',
      '4. Post-Exploitation - Assessing impact',
      '5. Reporting - Documenting findings',
      '',
      'Types:',
      '• Black Box - No prior knowledge',
      '• White Box - Full knowledge',
      '• Gray Box - Partial knowledge',
      '',
      'Tools: Metasploit, Burp Suite, Nmap, Wireshark',
    ],
  },
  {
    keywords: ['cia triad', 'confidentiality', 'integrity', 'availability'],
    category: 'cybersecurity',
    response: [
      '🔺 CIA Triad - Core Security Principles:',
      '',
      '1. Confidentiality',
      '   • Protecting information from unauthorized access',
      '   • Methods: Encryption, access controls, authentication',
      '',
      '2. Integrity',
      '   • Ensuring data accuracy and trustworthiness',
      '   • Methods: Hashing, digital signatures, checksums',
      '',
      '3. Availability',
      '   • Ensuring authorized users have access when needed',
      '   • Methods: Redundancy, backups, DDoS protection',
      '',
      'All security measures should support these three pillars.',
    ],
  },
  {
    keywords: ['zero trust', 'zero trust security', 'modern security'],
    category: 'cybersecurity',
    response: [
      '🛡️ Zero Trust Security Model:',
      '',
      'Principle: "Never trust, always verify"',
      '',
      'Core Concepts:',
      '• Verify explicitly - Authenticate every access request',
      '• Least privilege access - Minimum necessary permissions',
      '• Assume breach - Minimize blast radius',
      '',
      'Implementation:',
      '✓ Multi-factor authentication (MFA)',
      '✓ Micro-segmentation',
      '✓ Continuous monitoring',
      '✓ Identity and access management (IAM)',
      '',
      'Replacing traditional perimeter-based security.',
    ],
  },

  // General helpful responses
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    category: 'general',
    response: [
      '👋 Hello! I\'m Sulthan\'s AI assistant.',
      '',
      'I can help you with:',
      '• Information about Sulthan\'s expertise',
      '• Cybersecurity concepts and knowledge',
      '• Technical skills and experience',
      '',
      'Try asking:',
      '  "Tell me about digital forensics"',
      '  "What is a firewall?"',
      '  "Explain penetration testing"',
      '',
      'Or type "help" for available commands.',
    ],
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    category: 'general',
    response: [
      '😊 You\'re welcome!',
      '',
      'Feel free to ask more questions about cybersecurity',
      'or Sulthan\'s expertise.',
      '',
      'Type "help" to see all available commands.',
    ],
  },
];

// Simple keyword matching AI function
export function getAIResponse(query: string): string[] | null {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Find matching knowledge entries
  const matches = knowledgeBase.filter(entry =>
    entry.keywords.some(keyword => normalizedQuery.includes(keyword))
  );

  if (matches.length > 0) {
    // Prioritize expertise over general knowledge
    const expertiseMatch = matches.find(m => m.category === 'expertise');
    const cybersecMatch = matches.find(m => m.category === 'cybersecurity');
    const generalMatch = matches.find(m => m.category === 'general');
    
    return (expertiseMatch || cybersecMatch || generalMatch)?.response || null;
  }

  return null;
}

// Generate AI-like response for unknown queries
export function generateFallbackResponse(query: string): string[] {
  return [
    '🤖 AI Assistant:',
    '',
    `I don't have specific information about "${query}" in my knowledge base.`,
    '',
    'I can help you with:',
    '• Sulthan\'s expertise in digital forensics and network security',
    '• Cybersecurity concepts (firewalls, IDS/IPS, encryption, etc.)',
    '• Professional experience and certifications',
    '',
    'Try asking about:',
    '  • "digital forensics"',
    '  • "firewall basics"',
    '  • "work experience"',
    '  • "certifications"',
    '',
    'Or type "help" for standard commands.',
  ];
}
