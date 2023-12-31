import {ApprovalStatus} from '../constants';

export const transformApplicationData = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
    }));
  }

  return {
    ...data,
    createdAt: new Date(data.createdAt),
  };
};

export const shortenId = (id) => {
  const maxLength = 6;
  if (id.length > maxLength) {
    return `${id.substring(0, maxLength)}...`;
  }
  return id;
};

export const handleCopyClick = async (value) => {
  try {
    await navigator.clipboard.writeText(value);
    console.log('text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

export const generateRandomPassword = () => {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
};

export const mapStatus = (status) => {
  switch (status) {
    case ApprovalStatus.PENDING:
      return 'Đang chờ';
    case ApprovalStatus.APPROVED:
      return 'Chấp thuận';
    case ApprovalStatus.APPROVED:
      return 'Từ chối';
    default:
      return null;
  }
};
