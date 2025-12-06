/**
 * Smart AI Assistant
 * Uses pattern matching and knowledge base for instant responses
 * No API keys, no downloads, no external calls!
 */

import { getAIResponse as getKnowledgeBaseResponse } from './aiKnowledgeBase';

// Expertise context for the AI
const EXPERTISE_CONTEXT = `You are an AI assistant for Muhammad Sulthan's cybersecurity portfolio.

ABOUT SULTHAN:
- Cyber Security Student pursuing B.Tech CSE (Cyber Security)
- Location: Kerala, India
- Email: muhdsulthan1@gmail.com

EXPERTISE:
1. Digital Forensics:
   - Magnet AXIOM (Advanced digital investigation)
   - Cellebrite UFED 4PC (Mobile device forensics)
   - True Imager (Forensic imaging)
   - Analyzed 3 criminal cases at Alibi Global Pvt.Ltd.
   - Recovered evidence from 7+ devices

2. Network Security:
   - pfSense firewall deployment (100+ packets/sec)
   - Suricata IDS/IPS configuration
   - Network traffic analysis
   - Reduced false positive alerts by 50%

3. Programming:
   - Python (Security automation, scripting)
   - JavaScript/TypeScript (Web development)
   - Bash/PowerShell (System automation)

WORK EXPERIENCE:
1. Kerala Police Cyber Security Internship (June-July 2025)
   - pfSense firewall deployment
   - Network security monitoring
   - Zero security incidents

2. Alibi Global Pvt.Ltd. (May-July 2024)
   - Cyber Forensic Intern
   - Criminal case analysis
   - Digital evidence recovery

CERTIFICATIONS:
- Google Cybersecurity Professional Certificate (2024)
- Digital Forensics Practitioner (2024)
- TryHackMe Active Learner (Ongoing)

When answering questions:
- Be concise and professional
- Focus on Sulthan's expertise when asked about him
- Provide accurate cybersecurity information for general questions
- Keep responses under 200 words
- Use bullet points for clarity`;

// No model loading needed - using pattern matching!

/**
 * Get AI response using browser-based model
 */
export async function getBrowserAIResponse(query: string): Promise<string[]> {
  try {
    // First, try knowledge base for instant responses
    const kbResponse = getKnowledgeBaseResponse(query);
    if (kbResponse) {
      return kbResponse;
    }

    // For now, use enhanced fallback with smart matching
    // The Q&A model doesn't work well for general conversation
    return generateSmartResponse(query);

  } catch (error) {
    console.error('Browser AI error:', error);
    return [
      '⚠️ AI processing error',
      '',
      'There was an issue processing your question.',
      'Please try rephrasing or ask about specific topics like:',
      '• Digital forensics',
      '• Network security',
      '• Certifications',
    ];
  }
}

/**
 * Generate smart responses based on query analysis
 */
function generateSmartResponse(query: string): string[] {
  const lowerQuery = query.toLowerCase();

  // Greetings
  if (lowerQuery.match(/^(hi|hello|hey|greetings|good morning|good evening)/)) {
    return [
      '👋 Hello! I\'m Sulthan\'s AI assistant.',
      '',
      'I can help you learn about:',
      '• Sulthan\'s cybersecurity expertise',
      '• Digital forensics and network security',
      '• Certifications and work experience',
      '• General cybersecurity concepts',
      '',
      'Try asking: "what is digital forensics?" or "tell me about your skills"',
    ];
  }

  // How are you
  if (lowerQuery.match(/how are (you|u)/)) {
    return [
      '🤖 I\'m functioning perfectly! Thanks for asking.',
      '',
      'I\'m here to help you learn about Sulthan\'s cybersecurity expertise.',
      '',
      'What would you like to know?',
      '• Digital forensics experience',
      '• Network security projects',
      '• Certifications and training',
      '• Cybersecurity concepts',
    ];
  }

  // Who are you
  if (lowerQuery.match(/who are (you|u)/)) {
    return [
      '🤖 I\'m an AI assistant for Muhammad Sulthan\'s portfolio.',
      '',
      'I can answer questions about:',
      '• Sulthan\'s expertise in cybersecurity',
      '• Digital forensics and network security',
      '• Work experience and certifications',
      '• General cybersecurity knowledge',
      '',
      'Type "whoami" to learn about Sulthan, or ask me anything!',
    ];
  }

  // Thanks
  if (lowerQuery.match(/thank|thanks|appreciate/)) {
    return [
      '😊 You\'re welcome!',
      '',
      'Feel free to ask more questions about cybersecurity',
      'or Sulthan\'s expertise.',
    ];
  }

  // Default fallback
  return [
    '🤔 I don\'t have specific information about that.',
    '',
    'Try asking about:',
    '• "what is digital forensics?"',
    '• "tell me about firewalls"',
    '• "what are your certifications?"',
    '• "explain penetration testing"',
    '',
    'Or use standard commands: help, whoami, skills, experience',
  ];
}

/**
 * Check if AI is ready (always true for pattern matching)
 */
export function isAIReady(): boolean {
  return true;
}

/**
 * Get AI status
 */
export function getAIStatus(): { ready: boolean; loading: boolean; error: string | null } {
  return {
    ready: true,
    loading: false,
    error: null,
  };
}

/**
 * Preload the AI model (call this on terminal open)
 * Note: Currently using pattern matching, no model preload needed
 */
export async function preloadAI(): Promise<void> {
  // No-op for now - using smart pattern matching instead of heavy AI model
  console.log('AI assistant ready (pattern matching mode)');
}
