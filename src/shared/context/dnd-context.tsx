import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

type DnDType = string | null;

type DnDContextValue = {
  type: DnDType;
  setType: Dispatch<SetStateAction<DnDType>>;
};

const DnDContext = createContext<DnDContextValue | undefined>(undefined);

type DnDProviderProps = {
  children: ReactNode;
};

export function DnDProvider(props: DnDProviderProps) {
  const { children } = props;
  const [type, setType] = useState<DnDType>(null);

  const value = useMemo(() => ({ type, setType }), [type]);

  return <DnDContext.Provider value={value}>{children}</DnDContext.Provider>;
}

export function useDnD(): DnDContextValue {
  const context = useContext(DnDContext);

  if (!context) {
    throw new Error('useDnD must be used within a DnDProvider');
  }

  return context;
}

export { DnDContext };
