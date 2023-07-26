export const formatDate = (date: Date | string) => {
  const dateObj = date instanceof Date ? date : new Date(date);

  const diff = new Date().getTime() - dateObj.getTime();
  const diffInMinutes = Math.floor(diff / 1000 / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInYears > 0) {
    return `${diffInYears}y`;
  }
  if (diffInMonths > 0) {
    return `${diffInMonths}m`;
  }
  if (diffInDays > 0) {
    return `${diffInDays}d`;
  }
  if (diffInHours > 0) {
    return `${diffInHours}h`;
  }
  if (diffInMinutes > 0) {
    return `${diffInMinutes}m`;
  }
  return 'now';
};
