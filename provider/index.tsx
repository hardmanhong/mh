import { ThemeProvider } from './theme';
import { TRPCProvider } from './trpc';

type IProvider = React.FC<{ children: React.ReactNode }>;
function composeProviders(...providers: IProvider[]) {
  return ({ children }: { children: React.ReactNode }) =>
    providers.reduce((prev, Provider) => <Provider>{prev}</Provider>, children);
}

export const Provider = composeProviders(TRPCProvider, ThemeProvider);
