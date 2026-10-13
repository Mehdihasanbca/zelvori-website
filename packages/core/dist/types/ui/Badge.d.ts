import React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'cyan' | 'slate' | 'emerald' | 'amber';
    children: React.ReactNode;
}
export declare function Badge({ variant, className, children, ...props }: BadgeProps): React.JSX.Element;
//# sourceMappingURL=Badge.d.ts.map