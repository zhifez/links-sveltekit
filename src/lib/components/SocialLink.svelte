<script lang="ts">
	import { socialIconMap } from './socialIcons';
	import type { Social, SocialType } from './types';

  let { social } = $props<{
    social: Social
  }>();

  // const Icon = socialIconMap[social.type as SocialType];
</script>

<a href={social.link}>
  <!-- <Icon /> -->
</a>

