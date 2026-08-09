export const tableStyles = {
  wrapper:
    "w-full overflow-x-auto bg-surface shadow-elevated max-sm:overflow-visible max-sm:bg-transparent max-sm:shadow-none",
  table: "w-full min-w-[560px] border-collapse max-sm:block max-sm:min-w-0",
  thead: "max-sm:hidden",
  th: "border-b border-border bg-primary-soft/40 px-5 py-4 text-left text-xs font-bold tracking-wide text-primary uppercase",
  tbody: "max-sm:block max-sm:space-y-3",
  tr: "border-l-4 border-l-transparent border-b border-border transition-colors even:bg-bg-subtle/60 last:border-b-0 hover:border-l-primary hover:bg-primary-soft/20 max-sm:block max-sm:rounded-xl max-sm:border max-sm:border-l-4 max-sm:border-border max-sm:bg-surface max-sm:px-4 max-sm:py-2 max-sm:shadow-sm even:max-sm:bg-surface",
  td: "px-5 py-4 text-[0.9375rem] max-sm:flex max-sm:justify-between max-sm:gap-4 max-sm:border-none max-sm:px-0 max-sm:py-2 max-sm:before:font-semibold max-sm:before:text-muted-foreground max-sm:before:content-[attr(data-label)]",
};
