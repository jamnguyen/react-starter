import { ReactNode } from 'react';
import { HasChildrenProps } from '~src/interfaces';

export interface HeadingProps extends HasChildrenProps {
  actionBar?: ReactNode;
}
