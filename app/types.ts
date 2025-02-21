export interface User {
  userId: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  paymentMethod: string;
  bankName: string;
  adminStatus: string;
  adminSMSStatus: string;
  userFolderId?: string;
  admin: string;
  position: string;
  titleStatus: string;
  messageStatus: string;
  warningStatus?: string;
  route: string;


  
  username: string; // Add username field
}