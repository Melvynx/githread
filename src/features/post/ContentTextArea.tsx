'use client';

import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, useRef } from 'react';

export const ContentTextArea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<'textarea'>
>(({ onChange, className, rows = 1, ...props }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight + 2}px`;
    }
  };

  return (
    <textarea
      ref={ref}
      onChange={(e) => {
        handleChange();
        onChange?.(e);
      }}
      rows={rows}
      className={clsx(className, 'resize-none w-full bg-transparent outline-none')}
      {...props}
    />
  );
});

ContentTextArea.displayName = 'ContentTextArea';
