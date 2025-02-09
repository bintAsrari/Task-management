export interface TaskItem {
  id?: number; // Optional, because the backend assigns it
  title: string;
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'; // Enums for safety
  type?: string;  // Optional fields with default values
  state?: string;
  source?: string;
  invoke?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
