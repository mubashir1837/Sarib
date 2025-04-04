declare module '@radix-ui/react-slot' {
    interface SlotProps extends React.HTMLAttributes<HTMLElement> {
      asChild?: boolean;
    }
    
    export const Slot: React.ForwardRefExoticComponent<
      SlotProps & React.RefAttributes<HTMLElement>
    >;
  }