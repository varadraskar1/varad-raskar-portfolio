export const profile = {
  name: "Varad Raskar",
  positioning: "EXPLORING SYSTEMS. BUILDING & SECURING THEM.",
  focus: "CYBERSECURITY",
  exploring: ["BACKEND", "INFRASTRUCTURE"],
  linkedin: "https://www.linkedin.com/in/varadraskar21/",
  github: "https://github.com/varadraskar1",
  x: "https://x.com/Varad_raskar",
  // HTB / TryHackMe profile URLs were not supplied, so they are intentionally omitted.
};

export const skills = {
  SECURITY: {
    "Web & Application Security": ["Web Security Fundamentals", "HTTP Security Headers", "HTTP/HTTPS", "Rate Limiting"],
    "Network & Protocols": ["TCP/IP", "DNS", "SSH"],
    "Transport Security": ["SSL/TLS"],
    Assessment: ["Security Auditing", "Security Assessments"]
  },
  "OFFENSIVE SECURITY": {
    Reconnaissance: ["Nmap", "cURL", "dig", "nslookup", "Port / Service Enumeration", "HTTP Endpoint Reconnaissance", "Subdomain Reconnaissance"],
    "Web Security": ["HTTP Request/Response Analysis", "Cookies & Session Handling", "Session IDs", "HTTP Methods", "CRUD API Testing", "REST API Testing", "API Endpoint Enumeration", "Web Request Manipulation", "Web Application Security Testing"],
    "Security Testing": ["Security Assessment", "Security Auditing", "Configuration Security Review", "Server Security Assessment", "Security Header Assessment", "Rate-Limit Testing"],
    "Platforms Used": ["Hack The Box", "PortSwigger Web Security Academy", "TryHackMe"]
  },
  "LINUX & SYSTEMS": {
    "Operating Systems": ["Linux", "Ubuntu", "Kali Linux", "Windows"],
    "System / Server": ["Linux Administration", "Production Server Administration", "Server Configuration", "System Hardening", "SSH"],
    Virtualization: ["VirtualBox"],
    "Networking / System Fundamentals": ["TCP/IP", "DNS"]
  },
  INFRASTRUCTURE: {
    "Containers & Deployment": ["Docker", "Coolify"],
    "Web / Reverse Proxy": ["Nginx", "PM2", "Reverse Proxy", "Domain & SSL Configuration"],
    "Server / Infrastructure": ["Production Server Administration", "Backup Server Setup", "Live Data Synchronization", "Server Deployment"]
  },
  LANGUAGES: { Languages: ["Python", "C", "C++"] },
  RESEARCH: { "Research Node": ["AI-Driven Defensive Security Validation"] }
} as const;

export const experience = {
  role: "Cybersecurity Intern",
  company: "Pixaflip Technologies",
  dates: "12 June 2026 — 12 August 2026",
  panels: {
    "PRODUCTION SECURITY": ["Production Linux administration", "Security auditing", "Configuration hardening", "Security assessments"],
    "SECURITY ASSESSMENTS": ["HTTP security headers", "Rate limiting", "Security assessment", "Security auditing"],
    INFRASTRUCTURE: ["Nginx / reverse proxy", "Domain & SSL configuration", "Docker", "PM2", "Backup server work", "Live data synchronization"],
    DEPLOYMENT: ["Coolify deployment/configuration", "Server deployment"],
    RBAC: ["Role-Based Access Control (RBAC)"]
  }
};

export const research = {
  title: "AI-DRIVEN DEFENSIVE SECURITY VALIDATION",
  status: "IN PROGRESS",
  role: "CO-AUTHOR",
  type: "RESEARCH PAPER"
};

export const projects = [
  {
    id: "01",
    title: "CyberIncidentAtlas",
    description: "An open, evidence-backed knowledge base of significant cybersecurity incidents.",
    status: "PUBLIC REPOSITORY",
    github: "https://github.com/varadraskar1/CyberIncidentAtlas",
    details: {
      Overview: "An open, evidence-backed knowledge base of significant cybersecurity incidents.",
      "What I built": "A structured incident knowledge base with documented data, schemas, scripts, methodology, sources and repository validation workflows.",
      Technologies: "Only repository-supported technologies should be added here as the project evolves.",
      "Current status": "Public repository"
    }
  },
  {
    id: "02",
    title: "Phantom Desk",
    description: "Personal AI workspace with modular plugins, workflows, and multi-provider AI orchestration.",
    status: "PRIVATE REPOSITORY",
    github: undefined as string | undefined,
    details: {
      Overview: "Personal AI workspace with modular plugins, workflows, and multi-provider AI orchestration.",
      "What I built": "A private project. Implementation details are intentionally limited to information explicitly confirmed.",
      "Current status": "Private repository"
    }
  },
  {
    id: "03",
    title: "Smart Irrigation System",
    description: "An academic smart irrigation system that monitors temperature, humidity, and soil moisture, automatically controlling a motor pump when predefined thresholds are reached.",
    status: "ACADEMIC PROJECT",
    github: undefined as string | undefined,
    details: {
      Overview: "Environmental monitoring with threshold-based automatic irrigation.",
      "What I built": "A curriculum project centered on monitoring temperature, humidity and soil moisture and automatically controlling a motor pump using predefined thresholds.",
      "Current status": "Academic project"
    }
  }
] as const;

export const certifications = [
  { title: "Basics of Training & Leadership", issuer: "UniAthena in partnership with Cambridge International Qualifications, UK", date: "30 October 2025", credential: "Blockchain ID: 1554-8025-5302", file: "/certificates/basics-of-training-leadership.pdf", type: "COMPLETED" },
  { title: "Basics of Motivation and Leadership", issuer: "UniAthena in partnership with Cambridge International Qualifications, UK", date: "30 October 2025", credential: "Blockchain ID: 9302-0522-1238", file: "/certificates/basics-of-motivation-and-leadership.pdf", type: "COMPLETED" },
  { title: "Hands-on Bootcamp on Artificial Intelligence", issuer: "Blocks eBlock / OpenxAI", date: "28 August 2025", credential: "Certificate of Achievement", file: "/certificates/ai-bootcamp-certificate.pdf", type: "COMPLETED" },
  { title: "HackEthics — 4 Days Ethical Hacking Workshop", issuer: "Spirit Organization in collaboration with Microsoft Student Ambassadors", date: "Not stated on the certificate", credential: "Participation / completion certificate", file: "/certificates/hackethics-workshop.pdf", type: "COMPLETED" },
  { title: "Linux Unhatched", issuer: "Cisco Networking Academy", date: "Not visible on the supplied badge", credential: "Verified badge", file: "/certificates/linux-unhatched.png", type: "COMPLETED" },
  { title: "Inclusive Open Source Community Orientation (LFC102)", issuer: "The Linux Foundation Education", date: "Not visible on the supplied badge", credential: "Open Source Best Practice", file: "/certificates/lfc102.png", type: "COMPLETED" },
  { title: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle", date: "2025", credential: "Foundations Associate badge", file: "/certificates/oracle-cloud-foundations.jpeg", type: "COMPLETED" }
] as const;
