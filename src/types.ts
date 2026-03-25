export interface Student {
  id: string;
  name: string;
  avatar: string;
  grade: string;
  section: string;
  currentBookId?: string;
  borrowedDate?: string;
  status: 'Reading' | 'Returned' | 'Late';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  status: 'In Library' | 'Borrowed';
  borrowedBy?: string;
}

export interface ActivityRecord {
  id: string;
  studentName: string;
  action: 'returned' | 'checked out' | 'flagged overdue';
  bookTitle: string;
  timestamp: string;
  type: 'Hardcover Edition' | 'Reference Section' | 'Picture Book' | 'Fantasy Fiction' | 'Normal';
}
