"use client";

import { forwardRef } from "react";
import Image from "next/image";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import Typography from "@/app/components/Typography";
import Plus from "../../app/assets/icons/plus.svg";
import CenteredElement from "@/app/components/ui/CenteredElement";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "min-h-[104px] px-7 py-5 my-4 bg-[#7F7F7F] hover:bg-[#7F7F7F]/90 transition-colors ease-in-out duration-200 rounded-2xl hover:cursor-pointer",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-0 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <CenteredElement justify="between">
        <Typography className="text-2xl">{children}</Typography>
        <Image
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-500"
          src={Plus}
          alt="plus icon"
        />
      </CenteredElement>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="pt-4 pb-1 overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <Typography className={cn("pb-4 pt-0 text-xl", className)} weight="400">
      {children}
    </Typography>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
