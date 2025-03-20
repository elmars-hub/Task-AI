import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  formatRelative,
  isSameYear,
  format,
  isBefore,
  isToday,
  isTomorrow,
  startOfToday,
} from 'date-fns';

export function toTitleCase(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formartCustomDate(date: string | number | Date) {
  const today = new Date();

  // If the date is today, return 'Today'
  const relativeDay = toTitleCase(formatRelative(date, today).split(' at ')[0]);

  // List of relative days
  const relativeDays = [
    'Today',
    'Tomorrow',
    'Yesterday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];

  if (relativeDays.includes(relativeDay)) {
    return relativeDay;
  }

  if (isSameYear(date, today)) {
    return formatRelative(date, 'dd MMM');
  } else {
    return formatRelative(date, 'dd MMM yyyy');
  }
}

// Get the color class for the task due date
export function getTaskDueDateColorClass(
  dueDate: Date | null,
  completed?: boolean,
): string | undefined {
  if (dueDate === null || completed) return;

  if (isBefore(dueDate, startOfToday())) {
    return 'text-red-error';
  }

  if (isToday(dueDate)) {
    return 'text-emerald-500';
  }

  if (isTomorrow(dueDate) && !completed) {
    return 'text-amber-500';
  }
}
