import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {gitConfig } from './shared';
import { Logo } from '@/components/Logo/Logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      children: <Logo withName/>,
      enabled:false,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,

  };
}
