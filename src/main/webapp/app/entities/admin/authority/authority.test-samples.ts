import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9652f40f-0b6a-41d2-89a9-52a992f48049',
};

export const sampleWithPartialData: IAuthority = {
  name: 'ff25e892-31cc-4460-ad38-bfbabe395232',
};

export const sampleWithFullData: IAuthority = {
  name: 'ca8a3bd7-b65c-4127-a3bb-20721abcf2b6',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
