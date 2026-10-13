import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}
export declare function Button({ variant, size, className, children, ...props }: ButtonProps): React.JSX.Element;
//# sourceMappingURL=Button.d.ts.map