import { createContext } from 'react';
import type { BrowserAppInstance } from '@openhax/sdk';

export const AppInstanceContext = createContext<BrowserAppInstance | null>(null);
