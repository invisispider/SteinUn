
import { ref } from 'vue';
import type { Ref } from 'vue';
import socialGm from "@/assets/img/social_gm.png";
import socialYt from "@/assets/img/social_yt.png";
import socialDc from "@/assets/img/social_dc.png";
import socialGh from "@/assets/img/social_gh.png";
import socialVn from "@/assets/img/social_vn.png";
import socialLi from "@/assets/img/social_li.png";
export interface Social {
  name: string;
  link: string;
  url: string;
}

export function useSocials(): { socials: Ref<Social[]> } {
  const socials = ref<Social[]>([
    {
      name: "gm",
      link: socialGm,
      url: "mailto:adam.loewen@gmail.com",
    },
    {
      name: "yt",
      link: socialYt,
      url: "https://www.youtube.com/channel/UC6i8QNmPT1buzJqLZFS5aNQ",
    },
    {
      name: "dc",
      link: socialDc,
      url: "https://discord.gg/jZrS3GVXsS",
    },
    {
      name: "gh",
      link: socialGh,
      url: "https://github.com/invisispider",
    },
    {
      name: "vn",
      link: socialVn,
      url: "https://venmo.com/u/Adam-Loewen-1",
    },
    {
      name: "li",
      link: socialLi,
      url: "https://www.linkedin.com/in/adam-loewen-3218ab48/"
    }
  ]);

  return { socials };
}