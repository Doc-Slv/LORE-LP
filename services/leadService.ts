import { LeadFormData } from '../types';

export const sendLeadForm = async (data: LeadFormData): Promise<void> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Lead sent to CRM:', data);
      resolve();
    }, 1000);
  });
};