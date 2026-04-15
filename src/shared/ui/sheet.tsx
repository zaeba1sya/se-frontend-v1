'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from 'shared/lib/utils'

function Sheet(
  props: React.ComponentProps<typeof DialogPrimitive.Root>
) {
  return <DialogPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return (
    <DialogPrimitive.Trigger data-slot="sheet-trigger" {...props} />
  )
}

function SheetClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return <DialogPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm',
        className
      )}
      {...props}
    />
  )
}

interface SheetContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  side?: 'left' | 'right' | 'top' | 'bottom'
  showClose?: boolean
}

function SheetContent({
  className,
  children,
  side = 'right',
  showClose = true,
  ...props
}: SheetContentProps) {
  const sideClass: Record<
    NonNullable<SheetContentProps['side']>,
    string
  > = {
    left: 'inset-y-0 left-0 h-full w-[86vw] max-w-sm border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
    right:
      'inset-y-0 right-0 h-full w-[86vw] max-w-sm border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
    top: 'inset-x-0 top-0 w-full border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    bottom:
      'inset-x-0 bottom-0 w-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom'
  }

  return (
    <DialogPrimitive.Portal>
      <SheetOverlay />
      <DialogPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'bg-background text-foreground fixed z-[70] flex flex-col shadow-2xl outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out duration-300',
          sideClass[side],
          className
        )}
        {...props}
      >
        {children}
        {showClose ? (
          <DialogPrimitive.Close
            aria-label="Закрыть"
            className="ring-offset-background focus:ring-ring text-muted-foreground hover:text-foreground absolute top-4 right-4 rounded-full p-2 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            <X className="size-5" />
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

function SheetTitle(
  props: React.ComponentProps<typeof DialogPrimitive.Title>
) {
  return <DialogPrimitive.Title data-slot="sheet-title" {...props} />
}

function SheetDescription(
  props: React.ComponentProps<typeof DialogPrimitive.Description>
) {
  return (
    <DialogPrimitive.Description
      data-slot="sheet-description"
      {...props}
    />
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
}
