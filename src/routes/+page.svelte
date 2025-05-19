<script lang="ts">
	import { Image } from '@lucide/svelte';

  let user = {
    name: 'zhifei',
    title: 'Full Stack Developer',
    desc: `Hi, I'm a full stack developer`,
    socials: [
      {
        type: 'website',
        link: 'example.com',
      },
      {
        type: 'instagram',
        link: 'instagram.com',
      },
      {
        type: 'facebook',
        link: 'facebook.com',
      },
      {
        type: 'tiktok',
        link: 'tiktok.com',
      },
      {
        type: 'xiaohongshu',
        link: 'xiaohongshu.com',
      },
      {
        type: 'x',
        link: 'x.com',
      },
    ],
    links: [
      {
        title: 'My games',
        link: 'itch.io',
        tag: 'main',
      },
      {
        title: 'My aoos',
        link: 'appstore.com',
        tag: 'main',
      },
    ]
  };
</script>

<div class="w-screen h-screen px-6 py-8 md:p-12 flex flex-col gap-6 items-center bg-lime-200">
  <div class="w-24 h-24 p-8 rounded-full flex flex-col justify-center items-center bg-lime-700">
    <Image class="w-full h-full text-white" />
  </div>
  <div class="flex flex-col gap-1 items-center text-center text-lime-800">
    <h1 class="text-3xl font-semibold">{user.name}</h1>
    {#if user.title}
    <p class="text-md font-semibold">{user.title}</p>
    {/if}
    {#if user.desc}
    <p class="text-sm">{user.desc}</p>
    {/if}
    {#if user.socials}
    <div class="flex flex-row gap-2 justify-center items-center text-lime-800 mt-1">
      {#each user.socials as social}
      <SocialLink social={social} />
      {/each}
    </div>
    {/if}
  </div>
  <button class="w-full md:w-2/5 px-8 py-3 bg-lime-700 hover:opacity-90 cursor-pointer text-xl text-white rounded-full">
    Link 0
  </button>
  <button class="w-full md:w-2/5 px-8 py-3 bg-lime-700 hover:opacity-90 cursor-pointer text-xl text-white rounded-full">
    Link 1
  </button>
  <button class="w-full md:w-2/5 px-8 py-3 bg-lime-700 hover:opacity-90 cursor-pointer text-xl text-white rounded-full">
    Link 2
  </button>
</div>