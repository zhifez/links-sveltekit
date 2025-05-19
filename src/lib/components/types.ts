export enum SocialType {
  facebook = 'facebook',
  instagram = 'instagram',
  linkedin = 'linkedin',
  tiktok = 'tiktok',
  twitter = 'twitter',
  website = 'website',
  x = 'x',
}

export interface Social {
  type: string;
  link: string;
}