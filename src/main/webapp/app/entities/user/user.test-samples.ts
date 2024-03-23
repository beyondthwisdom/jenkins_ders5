import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31237,
  login: 'K',
};

export const sampleWithPartialData: IUser = {
  id: 29612,
  login: '8W8Z',
};

export const sampleWithFullData: IUser = {
  id: 3493,
  login: '.',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
