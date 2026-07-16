"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackConversion } from "@/lib/tracking";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventLabel?: string;
};

export default function TrackedLink({
  eventName,
  eventLabel,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      data-conversion={eventName}
      data-conversion-label={eventLabel}
      onClick={(event) => {
        trackConversion({
          name: eventName,
          label: eventLabel,
          page: window.location.pathname,
        });
        onClick?.(event);
      }}
    />
  );
}
