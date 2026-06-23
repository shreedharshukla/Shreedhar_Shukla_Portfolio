import { Project, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Shreedhar Shukla',
  title: 'Analytics • Product • Machine Learning',
  subTitle: 'Engineering Graduate & Tech Innovator',
  email: 'shreedhar29shukla@gmail.com',
  linkedin: 'https://linkedin.com/in/shreedhar-shukla',
  github: 'https://github.com/shreedhar-shukla',
  bio: 'Engineering graduate with experience building data pipelines, analytics products, and ML systems on real-world datasets. I work comfortably across the full stack—from SQL and Python on the data side to product thinking and stakeholder communication on the business side. I enjoy turning ambiguous problems into concrete solutions.',
  education: {
    degree: 'B.Tech Electronics and Communication Engineering',
    institution: 'Jaypee Institute of Information Technology, Noida',
    cgpa: '7.34',
    timeline: [
      {
        year: '2022 - 2026',
        title: 'B.Tech in Electronics & Communication',
        institution: 'JIIT Noida',
        description: 'Focused on digital signal processing, communication networks, and artificial intelligence. Built strong foundation in math, statistics, and programming.'
      },
      {
        year: '2026 (Jan - Apr)',
        title: 'Advanced Specialization (NPTEL Elite)',
        institution: 'IIT Madras / IIIT Delhi',
        description: 'Optical Wireless Communications for Beyond 5G & IoT. Ranked in the top 2% nationally.'
      }
    ]
  }
};

export const STATISTICS = [
  { value: 1, suffix: '', label: 'Internship Completed' },
  { value: 4, suffix: '', label: 'Major Engineering Projects' },
  { value: 6, suffix: 'M+', label: 'Transactions Processed' },
  { value: 200, suffix: 'K+', label: 'Customer Records Managed' },
  { value: 2, suffix: '%', label: 'NPTEL Elite National Rank' }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Machine Learning Intern',
    company: 'Airtel Digital Ltd.',
    location: 'Noida, India',
    period: 'June 2025 – August 2025',
    achievements: [
      'Built automated Python pipelines for 200,000+ customer records.',
      'Reduced operational effort by approximately 30%.',
      'Developed optimized SQL queries.',
      'Designed Power BI dashboards.',
      'Performed root-cause analysis.',
      'Collaborated with product and engineering teams.',
      'Communicated analytical findings to stakeholders.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'aerial-guardian',
    title: 'Aerial Guardian — Real-Time UAV Surveillance AI',
    category: 'ml-ai',
    tech: ['YOLOv8', 'SAHI', 'ByteTrack', 'BoT-SORT', 'OSNet', 'TensorRT', 'React 19', 'Node.js', 'Gemini API'],
    description: 'Real-time drone surveillance platform running at 59 FPS with object detection, tracking, Re-ID, and AI tactical copilot.',
    longDescription: 'Developed a high-performance computer vision solution targeting aerial video streams. Integrated Small Object Detection (SAHI) with YOLOv8, achieving robust 59 FPS processing via TensorRT quantization. ByteTrack ensures identity persistence, while OSNet and BoT-SORT provide object Re-ID. An intelligent AI Tactical Copilot powered by the Gemini API automatically describes aerial scenes, flags potential safety threats, and coordinates simulated responses.',
    githubUrl: 'https://github.com/shreedharshukla/Aerial_Guardian',
    liveUrl: '#',
    keyMetric: '59 FPS Object Tracking'
  },
  {
    id: 'payments-analytics',
    title: 'Digital Payments Analytics Platform',
    category: 'analytics',
    tech: ['SQL', 'Python', 'Power BI', 'ETL', 'Anomaly Detection'],
    description: 'Designed an end-to-end analytics platform processing over 6 million financial transactions with reconciliation, anomaly detection, and automated reporting.',
    longDescription: 'Created a high-throughput data warehouse project simulating and analyzing over 6 million digital transaction records. Engineered robust SQL schema designs, Python ETL procedures for extracting and cleaning bank records, dynamic reconciliation models ensuring zero loss, and isolation-forest ML models for anomalous transaction alerts. Dynamic Power BI dashboards demonstrate transactional volume, peak load time metrics, and alert statuses.',
    githubUrl: 'https://github.com/shreedharshukla/Digital-Payments-Analytics',
    liveUrl: '#',
    keyMetric: '6M+ Transactions Parsed'
  },
  {
    id: 'yt-summarizer',
    title: 'AI YouTube Summarizer',
    category: 'product',
    tech: ['Python', 'OpenAI API', 'Whisper', 'Prompt Engineering'],
    description: 'Built a multi-agent automation pipeline from YouTube ingestion to transcription and LLM summarization.',
    longDescription: 'Amalgamated advanced multi-agent design patterns utilizing Python scripts. Designed an ingestion client pulling video files and audio channels from specified URLs. Whisper API parses audio data efficiently into pure time-synchronized text arrays. Implemented a hierarchical orchestration flow using structured prompts, producing precise executive highlights, mind-map structures, and automated technical summaries.',
    githubUrl: 'https://github.com/shreedharshukla/AI-Youtube-Summarizer',
    liveUrl: '#',
    keyMetric: 'Interactive Media Parsing'
  },
  {
    id: 'layoff-prediction',
    title: 'Employee Layoff Prediction',
    category: 'ml-ai',
    tech: ['Scikit-learn', 'Random Forest', 'XGBoost', 'SMOTE', 'PCA'],
    description: 'Built an ML pipeline with feature engineering, model selection, and statistical analysis achieving 99.2% accuracy.',
    longDescription: 'Engineered an end-to-end statistical modeling workflow investigating corporate layoff indicators. Resolved severe class-imbalance anomalies using Synthetic Minority Over-sampling Technique (SMOTE). Built precise Random Forest and XGBoost classification models evaluating employee tenure, performance metrics, department types, and industry sector indicators. Leveraged Principal Component Analysis (PCA) to visualize high-dimensional feature distributions, leading to an optimal 99.2% recall accuracy.',
    githubUrl: 'https://github.com/pragy34/employee-attrition-predection',
    liveUrl: '#',
    keyMetric: '99.2% Classifier Accuracy'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data & Analytics',
    skills: ['SQL', 'Python', 'Pandas', 'NumPy', 'Power BI', 'Excel'],
    icon: 'Database'
  },
  {
    title: 'ML & AI',
    skills: ['OpenAI APIs', 'Gemini', 'Claude', 'Prompt Engineering', 'Computer Vision', 'Statistical Modelling'],
    icon: 'BrainCircuit'
  },
  {
    title: 'Product & Delivery',
    skills: ['Requirements Gathering', 'User Stories', 'Agile', 'Scrum', 'Documentation', 'Stakeholder Communication'],
    icon: 'Layers'
  },
  {
    title: 'Tools',
    skills: ['Git', 'VS Code', 'Jupyter', 'REST APIs', 'Google Workspace', 'MS Office'],
    icon: 'Wrench'
  }
];

export interface Certificate {
  id: string;
  title: string;
  course?: string;
  issuer: string;
  period: string;
  credentialId?: string;
  url: string;
  summary: string;
  badgeUrl?: string;
  skillsGained?: string[];
}

export const CERTIFICATES: Certificate[] = [
  {
    id: 'nptel-elite',
    title: 'NPTEL Elite — Top 2% nationally',
    course: 'Optical Wireless Communications for Beyond 5G & IoT',
    issuer: 'IIT Madras / IIIT Delhi',
    period: 'Jan–Apr 2026',
    credentialId: 'NPTEL-OWC-2026-ELITE-02',
    url: 'https://drive.google.com/file/d/1l6LPW-glSBcKVpLb35SszPZg8-dxfqof/view?usp=drive_link',
    summary: 'Successfully completed the advanced specialization course in Optical Wireless Communications with elite standings, ranking in the top 2% of candidates nationally across India.',
    skillsGained: ['Beyond 5G', 'Signal Propagation', 'IoT System Design', 'Optical Networks']
  },
  {
    id: 'microsoft-ai-skills-fest',
    title: 'AI Skills Fest 2026',
    issuer: 'Microsoft',
    period: 'June 2026',
    url: 'https://www.credly.com/badges/21bc4f28-9b92-41e6-a7e1-fdf0ede4fd29/public_url',
    summary: 'Earners demonstrate foundational and applied AI knowledge, including how to use AI tools to enhance productivity, create content, and solve real-world problems. They can identify practical use cases, apply AI responsibly, and continue building skills through guided learning pathways.',
    skillsGained: [
      'AI Ethics',
      'AI Literacy',
      'AI Tools Adoption',
      'Applied AI',
      'Artificial Intelligence Applications',
      'Build Automation',
      'Prompt Engineering',
      'Responsible AI',
      'Workflow Automation'
    ]
  }
];
