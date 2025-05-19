import { Facebook, Globe, Instagram, Linkedin, Twitter } from '@lucide/svelte';
import { SocialType } from './types';
import { TikTokIcon } from '@indaco/svelte-iconoir/tiktok';

export const socialIconMap = {
  [SocialType.facebook]: Facebook,
  [SocialType.instagram]: Instagram,
  [SocialType.linkedin]: Linkedin,
  [SocialType.tiktok]: TikTokIcon,
  [SocialType.twitter]: Twitter,
  [SocialType.website]: Globe,
  [SocialType.x]: Twitter,
};
