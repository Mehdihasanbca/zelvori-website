import React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glow' | 'interactive';
    children: React.ReactNode;
}
export declare function Card({ variant, className, children, ...props }: CardProps): React.JSX.Element;
//# sourceMappingURL=Card.d.ts.map