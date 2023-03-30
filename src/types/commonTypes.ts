export type Metrics = {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
};

export type Asset = {
  assignedUserIds: number[];
  companyId: number;
  healthHistory: {
    status: string;
    timestamp: string;
  }[];
  healthscore: number;
  id: number;
  image: string;
  metrics: Metrics;
  model: string;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp: number;
    power: number;
    rpm: number | null;
  };
  status: string;
  unitId: number;
};

export type Checklist = {
  completed: boolean;
  task: string;
};

export type WorkOrder = {
  id: number;
  assetId: number;
  assignedUserIds: number[];
  checklist: Checklist[];
  description: string;
  priority: string;
  status: string;
  title: string;
};
